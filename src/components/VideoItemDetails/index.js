import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player/youtube'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  AppVideoItemDetailsContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsLeftContainer,
  VideoItemDetailsRightContainer,
  LoaderContainer,
  ReactPlayerContainer,
  VideoDetailsContainer,
  VideoStatusContainer,
  VideoViewAndPlayStatus,
  Dot,
  SocialButtonsContainer,
  SocialButton,
  PlayVideoTitle,
  HorizontalRule,
  ChannelContainer,
  ChannelImage,
  ChannelInfoContainer,
  ChannelTitle,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import FailureCard from '../FailureCard'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: {},
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = {
        id: data.video_details.id,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewsCount: data.video_details.view_count,
      }
      //   console.log(updatedData)
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onLikeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onDislikeVideo = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  onRetry = () => {
    this.getVideoItemData()
  }

  renderVideoItemDetailsSuccessView = () => {
    const {isLiked, isDisLiked, videoItemDetails} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value
          const themeColor = isDarkTheme ? '#ffffff' : '#000000'
          const ruleColor = isDarkTheme ? '#64748b' : '#909090'
          const descriptionColor = isDarkTheme ? '#ffffff' : '#64748b'
          const {
            id,
            videoUrl,
            title,
            channelName,
            description,
            viewsCount,
            publishedAt,
            subscriberCount,
            profileImageUrl,
          } = videoItemDetails

          const onSaveVideo = () => {
            addVideo(videoItemDetails)
          }
          let isSaved
          const videoIndex = savedVideos.findIndex(
            eachVideo => eachVideo.id === id,
          )
          if (videoIndex === -1) {
            isSaved = false
          } else {
            isSaved = true
          }
          const savedText = isSaved ? 'Saved' : 'Save'

          const likeColor = isLiked ? '#2563eb' : '#64748b'
          const disLikeColor = isDisLiked ? '#2563eb' : '#64748b'
          const savedColor = isSaved ? '#2563eb' : '#64748b'

          return (
            <>
              <ReactPlayerContainer>
                <ReactPlayer url={videoUrl} controls width="100%" />
              </ReactPlayerContainer>
              <VideoDetailsContainer>
                <PlayVideoTitle color={themeColor}>{title}</PlayVideoTitle>
                <VideoStatusContainer>
                  <VideoViewAndPlayStatus>
                    {viewsCount}
                    <Dot> &#8226;</Dot>
                    {publishedAt}
                  </VideoViewAndPlayStatus>
                  <SocialButtonsContainer>
                    <SocialButton color={likeColor} onClick={this.onLikeVideo}>
                      <BiLike size={20} /> Like
                    </SocialButton>
                    <SocialButton
                      color={disLikeColor}
                      onClick={this.onDislikeVideo}
                    >
                      <BiDislike size={20} /> Dislike
                    </SocialButton>
                    <SocialButton color={savedColor} onClick={onSaveVideo}>
                      <BiListPlus size={20} /> {savedText}
                    </SocialButton>
                  </SocialButtonsContainer>
                </VideoStatusContainer>
                <HorizontalRule color={ruleColor} />
                <ChannelContainer>
                  <ChannelImage src={profileImageUrl} alt="channel logo" />
                  <ChannelInfoContainer>
                    <ChannelTitle color={themeColor}>
                      {channelName}
                    </ChannelTitle>
                    <ChannelSubscribers>
                      {subscriberCount} subscribers
                    </ChannelSubscribers>
                  </ChannelInfoContainer>
                </ChannelContainer>
                <ChannelDescription color={descriptionColor}>
                  {description}
                </ChannelDescription>
              </VideoDetailsContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderVideoItemFailureView = () => <FailureCard onRetry={this.onRetry} />

  renderVideoItemDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderVideoItemFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const appBgColor = isDarkTheme ? '#000000' : '#f9f9f9'
          const backgroundColor = isDarkTheme ? '#181818' : '#ffffff'

          return (
            <AppVideoItemDetailsContainer bgColor={backgroundColor}>
              <Header />
              <VideoItemDetailsContainer>
                <VideoItemDetailsLeftContainer>
                  <Navigation />
                </VideoItemDetailsLeftContainer>
                <VideoItemDetailsRightContainer
                  data-testid="videoItemDetails"
                  bgColor={appBgColor}
                >
                  {this.renderVideoItemDetailsView()}
                </VideoItemDetailsRightContainer>
              </VideoItemDetailsContainer>
            </AppVideoItemDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
