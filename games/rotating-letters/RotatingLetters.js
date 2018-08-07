import React from 'react'
import { 
  Text, 
  View , 
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Modal from 'react-native-modal'

// import styles from './RotatingLettersStyles'

import shuffle from 'lodash.shuffle'

const styles = StyleSheet.create({
  rotateLetterMain: {
    fontSize: 250
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  rotateLettersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rotatingLetterBox: {
    alignItems: 'center'
  },
  letterBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5
  },
  gameLetter: {
    fontSize: 40
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
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
      score: 0,
      isModalVisible: false,
      correctAnswer: false,
    }
  }

  setModalVisible(visible){
    this.setState({isModalVisible: visible})
  }

  generateUniqueLetterArray = () => {
    const uniques = []
    while (uniques.length < 3){
      const randomNum = Math.floor(Math.random() * 25)
      if (!uniques.includes(randomNum) && randomNum !== this.state.activeLetter){
        uniques.push(randomNum)
      }
    }
    return shuffle([this.state.activeLetter, ...uniques])
  }

  generateUniqueBackgroundColorArray = () => {
    const colors = []
    while (colors.length < 5) {
      const randomNum = Math.floor(Math.random() * 7)
      if (!colors.includes(randomNum)){
        colors.push(randomNum)
      }
    }
    return colors
  }

  render() {

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const rotations = ['90deg', '180deg', '270deg']
    const colors = ['#90caf9', '#80cbc4', '#b39ddb', '#ffcdd2', '#c8e6c9', '#ffccbc', '#fff9c4']
    const colorIndexes = this.generateUniqueBackgroundColorArray()

    console.log(colorIndexes)

    return (
    <View style={styles.rotatingLettersContainer}>

        <Modal
          animationIn='slideInUp'
          animationOut='slideOutRight'
          isVisible={this.state.isModalVisible}
          style={styles.modal}
          onBackdropPress={() => this.setModalVisible(false)}
          onBackButtonPress={() => this.setModalVisible(false)}
          >
          <View style={styles.modalBackground}>
            <Text>Hello world!</Text>
          </View>
        </Modal>

      <View style={[styles.rotatingLetterBox, {
        transform: [{
          rotate: rotations[this.state.rotation]
        }], 
      }]}>
        <Text style={styles.rotateLetterMain}>{letters[this.state.activeLetter]}</Text>
      </View>
      <View style={styles.letterRow}>{this.generateUniqueLetterArray().map((num, i) => {
        const background = colors[Math.floor(Math.random() * 6)]
        console.log(background)
        return (
          <TouchableOpacity onPress={() => {
            if (num === this.state.activeLetter){
              console.log('success')
              this.setModalVisible(true)
            } else {
              console.log(`You pickes ${letters[num]} but the correct answer was ${letters[this.state.activeLetter]}`)
            }
          }} key={i}>
            <View  style={[styles.letterBtn, {backgroundColor: colors[colorIndexes[i]]}]}>
              <Text style={styles.gameLetter}>{letters[num]}</Text>
            </View>
          </TouchableOpacity>
        )
      })}</View>
    </View>)
  }
}