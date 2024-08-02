import {Component} from 'react'
import {HomeContainer, BannerContainer} from './styledComponents'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <BannerContainer>Hi</BannerContainer>
      </HomeContainer>
    )
  }
}

export default Home
