import styled from 'styled-components'

export const AppGamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const GamingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 80px;
`
export const GamingLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const GamingRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  height: 88vh;
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`
export const GamingHeadingContainer = styled.div`
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
export const GamingIconContainer = styled.div`
  border-radius: 100%;
  padding: 22px 20px 18px 20px;
  background-color: ${props => props.color};
`

export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const GamingListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
