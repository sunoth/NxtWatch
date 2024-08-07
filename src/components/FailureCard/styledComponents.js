import styled from 'styled-components'

export const FailedViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const FailedImage = styled.img`
  width: 250px;
  @media screen and (min-width: 767px) {
    width: 450px;
  }
`
export const FailedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`
export const FailedDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const RetryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 5px 10px;
  width: 80px;
  height: 35px;
`
