import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  AppSavedVideosContainer,
  SavedVideosContainer,
  SavedVideosLeftContainer,
  SavedVideosRightContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  SavedVideosListContainer,
} from './styledComponents'
import Navigation from '../Navigation'
import Header from '../Header'
import SavedVideoCard from '../SavedVideoCard'

const SavedVideos = () => {
  const renderSavedVideosView = (isDarkTheme, savedVideos) => {
    const headingContainerBgColor = isDarkTheme ? '#212121' : '#f4f4f4'
    const iconBgColor = isDarkTheme ? '#000000' : '#e2e8f0'
    const headingColor = isDarkTheme ? '#ffffff' : '#000000'

    return (
      <>
        <SavedVideosHeadingContainer color={headingContainerBgColor}>
          <SavedVideosIconContainer color={iconBgColor}>
            <BiListPlus size={30} color="red" />
          </SavedVideosIconContainer>
          <SavedVideosHeading color={headingColor}>
            Saved Videos
          </SavedVideosHeading>
        </SavedVideosHeadingContainer>
        <SavedVideosListContainer>
          {savedVideos.map(eachVideo => (
            <SavedVideoCard key={eachVideo.id} savedVideosDetails={eachVideo} />
          ))}
        </SavedVideosListContainer>
      </>
    )
  }

  const renderNoSavedVideosView = isDarkTheme => {
    const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
    const descriptionColor = isDarkTheme ? '#ffffff' : '#64748b'

    return (
      <NoSavedVideosContainer>
        <NoSavedVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedVideosHeading color={headingColor}>
          No saved videos found
        </NoSavedVideosHeading>
        <NoSavedVideosDescription color={descriptionColor}>
          You can save your videos while watching them
        </NoSavedVideosDescription>
      </NoSavedVideosContainer>
    )
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value
        const appBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const backgroundColor = isDarkTheme ? '#181818' : '#ffffff'

        return (
          <AppSavedVideosContainer bgColor={backgroundColor}>
            <Header />
            <SavedVideosContainer>
              <SavedVideosLeftContainer>
                <Navigation />
              </SavedVideosLeftContainer>
              <SavedVideosRightContainer
                data-testid="savedVideos"
                bgColor={appBgColor}
              >
                {savedVideos.length > 0
                  ? renderSavedVideosView(isDarkTheme, savedVideos)
                  : renderNoSavedVideosView(isDarkTheme)}
              </SavedVideosRightContainer>
            </SavedVideosContainer>
          </AppSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
