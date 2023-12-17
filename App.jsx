import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './component/store'
import { Provider } from 'react-redux'
import Anycomponent from './Anycomponent'

const App = () => {
  return (
    <Provider store={store}>
          <Anycomponent/>
    </Provider>
  )
}

export default App;

// const styles = StyleSheet.create({})