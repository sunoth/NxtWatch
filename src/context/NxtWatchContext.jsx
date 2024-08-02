import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  toggleTheme: () => {},
  changeActiveTab: () => {},
})

export default NxtWatchContext
