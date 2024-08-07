import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.div`
  height: 92%;
`
export const NavItemsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
export const NavItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 10px;
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
