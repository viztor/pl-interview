import React from 'react';
import { Text, View, FlatList, Button, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { ActivityItem } from './Components/Item'
import { Audio } from 'expo';

const dataUrl = "https://plgaia-staging.herokuapp.com/api/v1/post_get_active/4Wa0y74X1mAKKIo2qgiWii"
const soundObject = new Audio.Sound();

export class ActivitiesScreen extends React.Component {
  static navigationOptions = {
    title: "Get Active",
    headerTintColor: "black",
    headerStyle: { backgroundColor: '#FFE4D3'}
  }
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      musicPosition: 0
    }
  }
  async componentDidMount() {
    const { navigation } = this.props
    try {
      const storedData = await AsyncStorage.getItem('@PL:activities')
      this.setState({
        isLoading: false,
        dataSource: JSON.parse(storedData)
      })
    } catch (e) {
    }
    fetch(dataUrl, {
      headers: {
        'Authorization': 'Token token=ZVKgYbjoOxoM9fvuhDvQOAtt',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      AsyncStorage.setItem('@PL:activities', JSON.stringify(responseJson.get_active))
      this.setState({
        isLoading: false,
        dataSource: responseJson.get_active
      })
    })
    await soundObject.loadAsync(require('../assets/bgmusic.mp3'));
    soundObject.setOnPlaybackStatusUpdate(async ({isLoaded, isPlaying, positionMillis}) => {
      if (isLoaded && isPlaying) {
        this.setState({musicPosition: positionMillis / 1000})
      } else {
      }
    })
    soundObject.playAsync();
    this.didFocusListener = navigation.addListener(
      'didFocus',
      payload => {
        soundObject.playAsync();
      }
    );
    this.willBlurListener = navigation.addListener(
      'willBlur',
      payload => {
        soundObject.stopAsync();
      }
    );
  }
  componentWillUnmount () {
    this.willBlurListener.remove();
    this.didFocusListener.remove();
    soundObject.unloadAsync()
  }
  render() {
    const { isLoading, dataSource } = this.state
    return (
      <View style={styles.container}>
      { isLoading
      ? <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      : <FlatList
          style={styles.container}
          data={dataSource}
          keyExtractor={(item) => item.content_id}
          renderItem={({item}) => <ActivityItem {...item}/>}
        />
      }
        <Text style={styles.floater}>{Math.floor(this.state.musicPosition)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  floater: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    color: 'white',
    backgroundColor: 'black'
  }
})