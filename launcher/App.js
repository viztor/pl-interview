import React from 'react';
import { StackNavigator } from 'react-navigation';
import { WelcomeScreen } from './WelcomeScreen';
import { ActivitiesScreen } from './Activities/ActivitiesScreen'

const App = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Activities: {
    screen: ActivitiesScreen,
  },
});

export default App;