import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   margin-top: 80px;
  //   min-height: 90vh;
  //   background-color: ${props => props.color};
  //   padding-left: 10px;
  //   padding-right: 15px;
  //   position: fixed;
  text-decoration: none;
`
