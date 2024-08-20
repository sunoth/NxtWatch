import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const NotFoundCard = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 80px;
`

export const NotFoundLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NotFoundRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`
export const NotFoundImage = styled.img`
  width: 300px;
  @media screen and (min-width: 767px) {
    width: 450px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
  @media screen and (min-width: 767px) {
    font-size: 32px;
  }
  margin-bottom: 0px;
`
export const NotFoundDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #475569;
`
