import React from 'react'
import { 
  Text, 
  View , 
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

// import styles from './RotatingLettersStyles'

import shuffle from 'lodash.shuffle'

const styles = StyleSheet.create({
  rotateLetterMain: {
    fontSize: 250
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  rotateLettersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rotatingLetterBox: {
    alignItems: 'center'
  },
})


export default class RotatingLetters extends React.Component {

  static navigationOptions = {
    title: 'Rotating Letters',
    header: null
  }

  constructor(props){
    super(props)
    this.state = {
      activeLetter: Math.floor(Math.random() * 25),
      rotation: Math.floor(Math.random() * 3),
      score: 0
    }
  }

  generateUniqueArray = () => {
    const uniques = []
    while (uniques.length < 3){
      const randomNum = Math.floor(Math.random() * 4)
      if (!uniques.includes(randomNum)){
        uniques.push(randomNum)
      }
    }
    return shuffle([this.state.activeLetter, ...uniques])
  }

  render() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const rotations = ['90deg', '180deg', '270deg']

    return (<View style={styles.rotatingLettersContainer}>
      <View style={[styles.rotatingLetterBox, {
        transform: [{
          rotate: rotations[this.state.rotation]
        }], 
      }]}>
        <Text style={styles.rotateLetterMain}>{letters[this.state.activeLetter]}</Text>
      </View>
      <View style={styles.letterRow}>{this.generateUniqueArray().map((num, i) => {
        return (
          <Text key={i}>{letters[num]}</Text>
        )
      })}</View>
    </View>)
  }
}