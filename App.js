import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'
import Login from './src/screens/Login'

export default function App() {
  AppRegistry.registerComponent('Login', () => AppNavigator);


  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  )
}