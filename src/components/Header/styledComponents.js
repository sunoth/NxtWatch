import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 20px;
  font-family: 'Roboto';
  height: 70px;
  top: 0px;
  background-color: ${props => props.color};
  @media screen and (min-width: 767px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
export const HeaderLogo = styled.img`
  height: 30px;
  width: 120px;
`
export const HeaderActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 767px) {
    gap: 16px;
  }
`

export const ThemeButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin-top: 2px;
  background-color: transparent;
  width: 40px;
`
export const ProfileImageContainer = styled.div`
  display: flex;
  @media screen and (max-width: 766px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
`
export const HamburgerButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const HamburgerPopupContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 576px;
  background-color: ${props => props.color};
`

export const MenuItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
  width: 350px;
`
export const NavItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 10px;
  background-color: ${props => props.color};
`
export const NavName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => props.bold};
  color: ${props => props.color};
`
export const LogoutButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 5px 10px 5px 10px;
  font-family: 'Roboto';
  border: 1px solid;
  font-weight: 500;
  width: 100%;
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 2px;
  background-color: ${props => props.bgColor};
  border-color: ${props => props.color};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  padding: 40px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
`
export const PopupBgContainer = styled.div`
  background-color: #cccccc;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Text = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
`
export const ControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
`

export const ConfirmButton = styled.button`
  color: white;
  background-color: #3b82f6;
  border: none;
  padding: 10px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
`
export const CancelButton = styled.button`
  color: #475569;
  background-color: transparent;
  border: 1px solid #475569;
  padding: 10px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  @media screen and (min-width: 767px) {
    display: none;
    border: none;
  }
`
