import styled from 'styled-components'

export const AppVideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 80px;
`
export const VideoItemDetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoItemDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88vh;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`
export const ReactPlayerContainer = styled.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 0px;
  @media screen and (max-width: 767px) {
    background-color: #000000;
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const VideoDetailsContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`
export const PlayVideoTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    margin-top: 25px;
    font-size: 22px;
  }
`
export const VideoStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoViewAndPlayStatus = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 13px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const SocialButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const SocialButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  gap: 5px;
  color: ${props => props.color};
`
export const HorizontalRule = styled.hr`
  border: 0.1px solid ${props => props.color};
  width: 100%;
`
export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`
export const ChannelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  color: ${props => props.color};
`
export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-top: 5px;
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
  margin-top: 6px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
  margin-left: 60px;
`

export const LoaderContainer = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`
