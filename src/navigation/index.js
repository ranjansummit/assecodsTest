import { createAppContainer } from 'react-navigation'
import { AppRegistry  } from 'react-native'
import { createStackNavigator, } from 'react-navigation-stack'
import Login from '../screens/Login'

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
