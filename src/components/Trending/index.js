import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import FailureCard from '../FailureCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  AppTrendingContainer,
  TrendingContainer,
  TrendingLeftContainer,
  TrendingRightContainer,
  HeadingContainer,
  IconContainer,
  TrendingHeading,
  LoaderContainer,
  TrendingListContainer,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import TrendingVideoCard from '../TrendingVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingData: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `BEARER ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingSuccessView = isDarkTheme => {
    const {trendingData} = this.state
    const headingContainerBgColor = isDarkTheme ? '#212121' : '#f4f4f4'
    const IconBgColor = isDarkTheme ? '#000000' : '#e2e8f0'
    const HeadingColor = isDarkTheme ? '#ffffff' : '#000000'

    return (
      <>
        <HeadingContainer color={headingContainerBgColor}>
          <IconContainer color={IconBgColor}>
            <HiFire size={30} color="red" />
          </IconContainer>
          <TrendingHeading color={HeadingColor}>Trending</TrendingHeading>
        </HeadingContainer>
        <TrendingListContainer>
          {trendingData.map(eachVideo => (
            <TrendingVideoCard
              key={eachVideo.id}
              trendingVideoDetails={eachVideo}
            />
          ))}
        </TrendingListContainer>
      </>
    )
  }

  renderTrendingFailureView = () => (
    <FailureCard onRetry={this.getTrendingData} />
  )

  renderTrendingLoadingView = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderTrendingView = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      case apiStatusConstants.loading:
        return this.renderTrendingLoadingView()
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
            <AppTrendingContainer bgColor={backgroundColor}>
              <Header />
              <TrendingContainer>
                <TrendingLeftContainer>
                  <Navigation />
                </TrendingLeftContainer>
                <TrendingRightContainer
                  data-testid="trending"
                  bgColor={appBgColor}
                >
                  {this.renderTrendingView(isDarkTheme)}
                </TrendingRightContainer>
              </TrendingContainer>
            </AppTrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
