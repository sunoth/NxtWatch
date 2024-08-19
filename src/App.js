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

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {activeTab, isDarkTheme} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          changeActiveTab: this.changeActiveTab,
          toggleTheme: this.toggleTheme,
          activeTab,
          isDarkTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
