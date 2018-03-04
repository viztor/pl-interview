import React from 'react';
import { Text, View, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { ActivityItem } from './Components/Item'
const dataUrl = "https://plgaia-staging.herokuapp.com/api/v1/post_get_active/4Wa0y74X1mAKKIo2qgiWii"

export class ActivitiesScreen extends React.Component {
  static navigationOptions = {
    title: "Get Active",
    headerTintColor: "black",
    headerStyle: { backgroundColor: '#FFE4D3'}
  }
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return fetch(dataUrl, {
      headers: {
        'Authorization': 'Token token=ZVKgYbjoOxoM9fvuhDvQOAtt',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.get_active
      })
    })
  }
  render() {
    const { isLoading, dataSource } = this.state
    return (
      isLoading
      ? <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      : <FlatList
          style={styles.container}
          data={dataSource}
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