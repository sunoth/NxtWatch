import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  changeActiveTab: () => {},
  addVideo: () => {},
})

export default NxtWatchContext
