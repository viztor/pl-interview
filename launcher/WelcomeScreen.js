import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

export class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>Grow Together!</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={{
              position:'absolute',
              width: '100%',
              resizeMode: 'cover',
              maxHeight: 40,
              bottom: 0,
            }}
            source={require('./img/hill.png')}
          />
          <Image
            resizeMode='contain'
            style={{
              maxHeight: 320,
            }}
            source={require('./img/kangaroo.png')}
          />
        </View>
        <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Activities')}
          style={styles.button}
        >
          <Text style={{color: 'white', fontWeight: 'bold'}}>Get Started</Text>
        </TouchableOpacity>
          <Text style={styles.ftn}>By continuing, you agree to our <Text style={{color: 'black'}}>Terms of Use & Privacy Policy</Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 2,
    maxHeight: 300,
    flexDirection: 'column-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  btnContainer: {
    flex: 1,
    backgroundColor: '#D9F1F5',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 80,
    fontSize: 24,
  },
  ftn: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
    fontSize: 10,
    textAlign: 'center',
    color: 'grey'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#43BCD3',
    padding: 10,
    margin: 40,
    borderRadius: 20
  },
});