import styled from 'styled-components'

export const AppSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const SavedVideosContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
`
export const SavedVideosLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SavedVideosRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  height: 100%;
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`
export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  padding-left: 40px;
  height: 130px;
  gap: 25px;
  background-color: ${props => props.color};
  @media screen and (max-width: 576px) {
    height: 100px;
  }
`
export const SavedVideosIconContainer = styled.div`
  border-radius: 100%;
  padding: 22px 20px 18px 20px;
  background-color: ${props => props.color};
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const SavedVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
`
export const NoSavedVideosImage = styled.img`
  width: 350px;
  @media screen and (min-width: 767px) {
    width: 450px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.color};
`

export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 5px;
  font-weight: 400;
  color: ${props => props.color};
`
