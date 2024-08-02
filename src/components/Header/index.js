import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'

import {FiLogOut} from 'react-icons/fi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBarContainer,
  HeaderLogo,
  HeaderActionsContainer,
  ThemeButton,
  NavLink,
  ProfileImageContainer,
  ProfileImage,
  HamburgerButton,
  HamburgerPopupContainer,
  MenuContainer,
  MenuItemsContainer,
  NavItem,
  NavName,
  LogoutButton,
  PopupBgContainer,
  PopupContainer,
  Text,
  ControllerContainer,
  CancelButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, changeActiveTab, activeTab} = value
      const themeColor = isDarkTheme ? '#000000' : '#ffffff'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const logoutTextColor = isDarkTheme ? '#ffffff' : '#3b82f6'
      const logoutBgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const LogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

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
        <NavBarContainer color={themeColor}>
          <NavLink to="/">
            <HeaderLogo src={LogoUrl} alt="website logo" />
          </NavLink>
          <HeaderActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={28} />
              ) : (
                <BsMoon size={28} />
              )}
            </ThemeButton>
            <ProfileImageContainer>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileImageContainer>

            <Popup
              modal
              trigger={
                <HamburgerButton>
                  <GiHamburgerMenu size={27} color={textColor} />
                </HamburgerButton>
              }
            >
              {close => (
                <HamburgerPopupContainer color={themeColor}>
                  <MenuContainer color={themeColor}>
                    <MenuItemsContainer>
                      <NavLink to="/">
                        <NavItem
                          onClick={() => {
                            onChangeTabHome()
                            close()
                          }}
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
                          color={
                            activeTab === 'Trending' ? activeTabBg : 'none'
                          }
                        >
                          <HiFire
                            size={20}
                            color={
                              activeTab === 'Trending' ? '#ff0b37' : '#909090'
                            }
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
                            color={
                              activeTab === 'Gaming' ? '#ff0b37' : '#909090'
                            }
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
                            color={
                              activeTab === 'Saved' ? '#ff0b37' : '#909090'
                            }
                          />
                          <NavName
                            color={textColor}
                            bold={activeTab === 'Saved' ? 'bold' : 'none'}
                          >
                            Saved videos
                          </NavName>
                        </NavItem>
                      </NavLink>
                    </MenuItemsContainer>
                    <AiOutlineClose onClick={() => close()} color={textColor} />
                  </MenuContainer>
                </HamburgerPopupContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  bgColor={logoutBgColor}
                  color={logoutTextColor}
                >
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <PopupBgContainer>
                  <PopupContainer color={themeColor}>
                    <Text color={textColor}>
                      Are you sure, you want to logout?
                    </Text>
                    <ControllerContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={() => onClickLogout()}>
                        Confirm
                      </ConfirmButton>
                    </ControllerContainer>
                  </PopupContainer>
                </PopupBgContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIconButton onClick={onClickLogout}>
                  <FiLogOut size={27} color={textColor} />
                </LogoutIconButton>
              }
            >
              {close => (
                <PopupBgContainer>
                  <PopupContainer color={themeColor}>
                    <Text color={textColor}>
                      Are you sure, you want to logout?
                    </Text>
                    <ControllerContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={() => onClickLogout()}>
                        Confirm
                      </ConfirmButton>
                    </ControllerContainer>
                  </PopupContainer>
                </PopupBgContainer>
              )}
            </Popup>
          </HeaderActionsContainer>
        </NavBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
