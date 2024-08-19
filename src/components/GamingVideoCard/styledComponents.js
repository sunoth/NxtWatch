import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 767px) {
    margin: 20px;
  }
`

export const GameCardThumbnail = styled.img`
  width: 200px;
  @media screen and (min-width: 767px) {
    width: 240px;
  }
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 500;
  margin-bottom: 0px;
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 3px;
  color: #94a3b8;
`
