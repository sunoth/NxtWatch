import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailedViewContainer,
  FailedImage,
  FailedHeading,
  FailedDescription,
  RetryButton,
} from './styledComponents'

const FailureCard = props => {
  const {onRetry} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descriptionColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const onClickRetry = () => {
          onRetry()
        }

        return (
          <FailedViewContainer>
            <FailedImage src={failureImageUrl} alt="failure view" />
            <FailedHeading color={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedDescription color={descriptionColor}>
              We are having some trouble to complete your request. Please try
              again later.
            </FailedDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureCard
