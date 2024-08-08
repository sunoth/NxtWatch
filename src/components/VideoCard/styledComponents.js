import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardLink = styled(Link)`
  text-decoration: none;
`

export const VideoListCard = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 20px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-top: 8px;
`

export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  margin-bottom: 0px;
  margin-top: 0px;
  line-height: 1.3;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
  margin-top: 6px;
  margin-bottom: 0px;
`
export const ViewsDate = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 12px;
  margin-top: 6px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
