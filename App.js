import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import Write from './screens/WriteStoryScreen'
import Read from './screens/ReadStoryScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{

  render(){
    return(
      <View>
        <AppContainer />
      </View>
    )
  }
}

const AppNavigator = createBottomTabNavigator({
  Write: {screen: Write},
  Read: {screen: Read},
},{
  defaultNavigationOptions: ({navigation}) => {
    tabBarIcon: ({}) => {
      const route = navigation.state.route
      if (route === 'Write') {
        return(
          <Image source={require('./assets/write.png')}/>
        )
      }else if (route === 'Read') {
        <Image source={require('./assets/read.png')}/>
      }
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)
