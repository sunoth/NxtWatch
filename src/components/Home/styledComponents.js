import styled from 'styled-components'

export const AppHomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const HomeLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 80px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HomeRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 88vh;
  margin-top: 80px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`
export const BannerContainer = styled.div`
  padding: 10px;
`
export const BannerLeftContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  width: 50%;
`
export const BannerImage = styled.img`
  height: 30px;
  width: 80px;
`
