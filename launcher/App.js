import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Welcome } from './Welcome';
import { Activities } from './Activities'

const App = StackNavigator({
  Home: {
    screen: Welcome,
  },
  Activities: {
    screen: Activities,
  },
});

export default App;