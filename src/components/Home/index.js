import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {
  HomeContainer,
  BannerContainer,
  BannerLeftContainer,
  BannerRightContainer,
  BannerImage,
  HomeLeftContainer,
  HomeRightContainer,
  AppHomeContainer,
  BannerDescription,
  BannerCloseButton,
  BannerGetNowButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
  HomeVideosContainer,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
} from './styledComponents'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navigation from '../Navigation'
import FailureCard from '../FailureCard'
import VideoCard from '../VideoCard'
import {RetryButton} from '../FailureCard/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: 'flex',
    searchInput: '',
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      //   console.log(data)

      const updateData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        homeVideos: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickGetResults = () => {
    this.getVideos()
  }

  onKeyDownSearch = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderVideosView = (headingColor, noteColor) => {
    const {homeVideos} = this.state
    const videosCount = homeVideos.length

    return videosCount > 0 ? (
      <HomeVideosContainer>
        {homeVideos.map(eachVideo => (
          <VideoCard video={eachVideo} key={eachVideo.id} />
        ))}
      </HomeVideosContainer>
    ) : (
      <NoVideosViewContainer>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideosHeading headingColor={headingColor}>
          No Search results found
        </NoVideosHeading>
        <NoVideosDescription noteColor={noteColor}>
          Try different Keywords or remove search filter
        </NoVideosDescription>
        <RetryButton type="button" onClick={this.onRetry}>
          Retry
        </RetryButton>
      </NoVideosViewContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureCard onRetry={this.onRetry} />

  renderHomeVideos = (headingColor, noteColor) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView(headingColor, noteColor)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const appBgColor = isDarkTheme ? '#000000' : '#f9f9f9'
          const backgroundColor = isDarkTheme ? '#181818' : '#ffffff'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

          return (
            <AppHomeContainer bgColor={backgroundColor}>
              <Header />
              <HomeContainer>
                <HomeLeftContainer>
                  <Navigation />
                </HomeLeftContainer>
                <HomeRightContainer data-testid="home" bgColor={appBgColor}>
                  <BannerContainer display={display}>
                    <BannerLeftContainer>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <BannerGetNowButton type="button">
                        GET IT NOW
                      </BannerGetNowButton>
                    </BannerLeftContainer>
                    <BannerRightContainer>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                        type="button"
                      >
                        <AiOutlineClose size={20} />
                      </BannerCloseButton>
                    </BannerRightContainer>
                  </BannerContainer>
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearch}
                      onKeyDown={this.onKeyDownSearch}
                    />
                    <SearchIconContainer
                      onClick={this.onClickGetResults}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch size={16} />
                    </SearchIconContainer>
                  </SearchContainer>
                  {this.renderHomeVideos(headingColor, noteColor)}
                </HomeRightContainer>
              </HomeContainer>
            </AppHomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
