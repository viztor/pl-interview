import React from 'react';
import { Text, View, FlatList, Button, StyleSheet } from 'react-native';
import { ActivityItem } from './Components/Item'
const customData = require('./data.json').get_active

export class ActivitiesScreen extends React.Component {
  static navigationOptions = {
    title: "Get Active",
    headerTintColor: "black",
    headerStyle: { backgroundColor: '#FFE4D3'}
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={customData}
        keyExtractor={(item) => item.content_id}
        renderItem={({item}) => <ActivityItem {...item}/>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})