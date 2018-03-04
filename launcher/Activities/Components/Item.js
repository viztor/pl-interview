import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

const stepItem = ({item, index}) => (
  <View style={styles.stepItem}>
    <Text style={{color: '#3EBEB3', textAlign: 'center'}}>STEP {index}</Text>
    <Text style={{marginTop: 12, marginBottom: 12, lineHeight: 24}}>{item}</Text>
  </View>
)

export class ActivityItem extends React.Component {
  render () {
    const { name, instruction, steps, image } = this.props;
    return (
      <View style={styles.item}>
        { image ? <Image
          source={{uri: `http:${image.url}`}}
          style={styles.image}
        /> : <View></View>
        }
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{instruction}</Text>
        <FlatList 
          data={steps}
          keyExtractor={(item, index) => index}
          renderItem={stepItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    lineHeight: 24,
  },
  stepItem: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    margin: 12,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 60,
  }
})