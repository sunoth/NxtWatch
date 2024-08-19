import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  AppGamingContainer,
  GamingContainer,
  GamingLeftContainer,
  GamingRightContainer,
  GamingHeadingContainer,
  GamingIconContainer,
  GamingHeading,
  LoaderContainer,
  GamingListContainer,
} from './styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import FailureCard from '../FailureCard'
import GamingVideoCard from '../GamingVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingData: [],
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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

      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewsCount: eachVideo.view_count,
      }))
      this.setState({
        gamingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingSuccessView = isDarkTheme => {
    const {gamingData} = this.state
    const headingContainerBgColor = isDarkTheme ? '#212121' : '#f4f4f4'
    const IconBgColor = isDarkTheme ? '#000000' : '#e2e8f0'
    const HeadingColor = isDarkTheme ? '#ffffff' : '#000000'

    return (
      <>
        <GamingHeadingContainer color={headingContainerBgColor}>
          <GamingIconContainer color={IconBgColor}>
            <SiYoutubegaming size={32} color="red" />
          </GamingIconContainer>
          <GamingHeading color={HeadingColor}>Gaming</GamingHeading>
        </GamingHeadingContainer>
        <GamingListContainer>
          {gamingData.map(eachVideo => (
            <GamingVideoCard
              key={eachVideo.id}
              gamingVideoDetails={eachVideo}
            />
          ))}
        </GamingListContainer>
      </>
    )
  }

  renderGamingFailureView = () => <FailureCard onRetry={this.getGamingData} />

  renderGamingLoadingView = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderGamingView = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
      case apiStatusConstants.inProgress:
        return this.renderGamingLoadingView()
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
            <AppGamingContainer bgColor={backgroundColor}>
              <Header />
              <GamingContainer>
                <GamingLeftContainer>
                  <Navigation />
                </GamingLeftContainer>
                <GamingRightContainer data-testid="gaming" bgColor={appBgColor}>
                  {this.renderGamingView(isDarkTheme)}
                </GamingRightContainer>
              </GamingContainer>
            </AppGamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
