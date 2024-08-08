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
} from './styledComponents'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navigation from '../Navigation'
import FailureCard from '../FailureCard'
import VideoCard from '../VideoCard'

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

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderVideosView = () => {
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
      </NoVideosViewContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureCard onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
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

          return (
            <AppHomeContainer bgColor={backgroundColor}>
              <Header />
              <HomeContainer>
                <HomeLeftContainer bgColor={backgroundColor} display={display}>
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
                    />
                    <SearchIconContainer
                      onClick={this.onClickGetResults}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch size={16} />
                    </SearchIconContainer>
                  </SearchContainer>
                  {this.renderHomeVideos()}
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
