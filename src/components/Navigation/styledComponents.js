import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.div`
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const NavItemsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
export const NavItem = styled.li`
  display: flex;
  padding-left: 20px;
  gap: 20px;
  align-items: center;
  background-color: ${props => props.color};
`

export const NavName = styled.p`
  font-size: 14px;
  font-weight: ${props => props.bold};
  color: ${props => props.color};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 30px;
`
export const ContactHeading = styled.h1`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 500;
  font-family: 'Roboto';
`
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const SocialImage = styled.img`
  width: 30px;
  border-radius: 100%;
`
export const SocialDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
  color: ${props => props.color};
  line-height: 1.5;
`
