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
  height: 100%;
  padding-top: 80px;
`
export const HomeLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HomeRightContainer = styled.div`
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
export const BannerContainer = styled.div`
  justify-content: space-between;
  padding: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 270px;
  padding: 40px;
  display: ${props => props.display};
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`
export const BannerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const BannerImage = styled.img`
  height: 30px;
  width: 120px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #000000;
  @media screen and (min-width: 576px;) {
    font-size: 14px;
  }
`
export const BannerGetNowButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1.2px solid #000000;
  width: 110px;
  font-size: 14px;
  padding: 4px;
  height: 36px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const BannerRightContainer = styled.div`
  display: flex;
  flex-direction: flex-end;
`
export const BannerCloseButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 20px;
  background-color: transparent;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 50%;
  height: 30px;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`
export const SearchInput = styled.input`
  padding-left: 12px;
  background-color: transparent;
  border: none;
  height: 30px;
  padding-bottom: 4px;
  width: 100%;
  outline: none;
  color: #909090;
  font-family: 'Roboto';
`
export const SearchIconContainer = styled.button`
  background-color: #909090;
  //   border: 1px solid #909090;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  border: none;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 20px;
`
export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 767px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`
export const NoVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
`
