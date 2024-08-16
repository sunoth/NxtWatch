import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  display: flex;
  padding-left: 40px;
  justify-content: flex-start;
  margin-bottom: 30px;
  width: 100%;
  @media screen and (max-width: 576px) {
    max-width: 576px;
    flex-direction: column;
  }
`

export const CardImage = styled.img`
  min-width: 200px;
  max-width: 576px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 20px 10px 20px;
  width: 100%;
  @media screen and (max-width: 576px) {
    max-width: 576px;
  }
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 100%;
`

export const ChannelTitle = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  width: 350px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  color: #909090;
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: #909090;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
