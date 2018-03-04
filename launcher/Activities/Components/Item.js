import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

const stepItem = ({item, index}) => (
  <View style={styles.stepItem}>
    <Text style={styles.stepNo}>STEP {index}</Text>
    <Text style={styles.text}>{item}</Text>
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
        { instruction 
          ? <Text style={styles.text}>{instruction}</Text>
          : <Text/>
        }
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
    marginTop: 8,
    marginBottom: 8,
    lineHeight: 24,
  },
  stepNo: {
    fontSize: 10,
    color: '#3EBEB3',
    textAlign: 'center'
  },
  stepItem: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    margin: 8,
  },
  image: {
    margin: 12,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 60,
  }
})