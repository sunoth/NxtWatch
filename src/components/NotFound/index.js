import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundLeftContainer,
  NotFoundRightContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import Navigation from '../Navigation'
import Header from '../Header'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const appBgColor = isDarkTheme ? '#000000' : '#f9f9f9'
      const backgroundColor = isDarkTheme ? '#181818' : '#ffffff'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const NotFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundContainer bgColor={backgroundColor}>
          <Header />
          <NotFoundCard>
            <NotFoundLeftContainer>
              <Navigation />
            </NotFoundLeftContainer>
            <NotFoundRightContainer bgColor={appBgColor}>
              <NotFoundImage src={NotFoundImageUrl} alt="not found" />
              <NotFoundHeading color={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundRightContainer>
          </NotFoundCard>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
