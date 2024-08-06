import {Component} from 'react'
import {
  HomeContainer,
  BannerContainer,
  BannerLeftContainer,
  BannerImage,
  HomeLeftContainer,
  HomeRightContainer,
  AppHomeContainer,
} from './styledComponents'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import Navigation from '../Navigation'

class Home extends Component {
  state = {
    bannerDisplay: true,
  }

  render() {
    const {bannerDisplay} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const appBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <AppHomeContainer bgColor={backgroundColor}>
              <Header />
              <HomeContainer>
                <HomeLeftContainer bgColor={backgroundColor} display={display}>
                  <Navigation />
                </HomeLeftContainer>
                <HomeRightContainer data-testid="home" bgColor={appBgColor}>
                  <BannerContainer>
                    <BannerLeftContainer>
                      <BannerImage alt="nxt watch logo" />
                    </BannerLeftContainer>
                  </BannerContainer>
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
