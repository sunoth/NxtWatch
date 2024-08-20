import styled from 'styled-components'

export const AppTrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 80px;
`
export const TrendingLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const TrendingRightContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  height: 90vh;
  overflow-y: auto;
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`

export const HeadingContainer = styled.div`
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
export const IconContainer = styled.div`
  border-radius: 100%;
  padding: 20px;
  background-color: ${props => props.color};
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const TrendingListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
