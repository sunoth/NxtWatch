import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import NxtWatchContext from './context/NxtWatchContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          changeActiveTab: this.changeActiveTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          activeTab,
          isDarkTheme,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
