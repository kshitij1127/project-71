import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Write from './screens/WriteStoryScreen';
import Read from './screens/ReadStoryScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return ( 
        <AppContainer />
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Write: { screen: Write },
    Read: { screen: Read },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const route = navigation.state.routeName;
        if (route === 'Write') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
          );
        } else if (route === 'Read') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(AppNavigator);
