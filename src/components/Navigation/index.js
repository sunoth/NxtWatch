import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {NavItemsContainer, NavItem, NavLink, NavName} from './styledComponents'

class Navigation extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, changeActiveTab, activeTab} = value
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'

          const onChangeTabHome = () => {
            changeActiveTab('Home')
          }

          const onChangeTabTrending = () => {
            changeActiveTab('Trending')
          }

          const onChangeTabGaming = () => {
            changeActiveTab('Gaming')
          }

          const onChangeTabSavedVideos = () => {
            changeActiveTab('Saved')
          }

          return (
            <>
              <NavItemsContainer>
                <NavLink to="/">
                  <NavItem
                    onClick={onChangeTabHome}
                    color={activeTab === 'Home' ? activeTabBg : 'none'}
                  >
                    <AiFillHome
                      size={20}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavName
                      color={textColor}
                      bold={activeTab === 'Home' ? 'bold' : 'none'}
                    >
                      Home
                    </NavName>
                  </NavItem>
                </NavLink>
                <NavLink to="/trending">
                  <NavItem
                    onClick={onChangeTabTrending}
                    color={activeTab === 'Trending' ? activeTabBg : 'none'}
                  >
                    <HiFire
                      size={20}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavName
                      color={textColor}
                      bold={activeTab === 'Trending' ? 'bold' : 'none'}
                    >
                      Trending
                    </NavName>
                  </NavItem>
                </NavLink>
                <NavLink to="/gaming">
                  <NavItem
                    onClick={onChangeTabGaming}
                    color={activeTab === 'Gaming' ? activeTabBg : 'none'}
                  >
                    <SiYoutubegaming
                      size={20}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavName
                      color={textColor}
                      bold={activeTab === 'Gaming' ? 'bold' : 'none'}
                    >
                      Gaming
                    </NavName>
                  </NavItem>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavItem
                    onClick={onChangeTabSavedVideos}
                    color={activeTab === 'Saved' ? activeTabBg : 'none'}
                  >
                    <BiListPlus
                      size={20}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavName
                      color={textColor}
                      bold={activeTab === 'Saved' ? 'bold' : 'none'}
                    >
                      Saved videos
                    </NavName>
                  </NavItem>
                </NavLink>
              </NavItemsContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Navigation