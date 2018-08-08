import React from 'react'
import { 
  Text, 
  View , 
  Button,
  TouchableOpacity,
} from 'react-native'

import Modal from 'react-native-modal'

import styles from './RotatingLettersStyles'

import shuffle from 'lodash.shuffle'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const rotations = ['90deg', '180deg', '270deg']
const colors = ['#90caf9', '#80cbc4', '#b39ddb', '#ffcdd2', '#c8e6c9', '#ffccbc', '#fff9c4']

const generateUniqueLetterArray = activeLetter => {
  const uniques = []
  while (uniques.length < 3){
    const randomNum = Math.floor(Math.random() * 25)
    if (!uniques.includes(randomNum) && randomNum !== activeLetter){
      uniques.push(randomNum)
    }
  }

  return shuffle([activeLetter, ...uniques])
}

const generateUniqueBackgroundColorArray = () => {
  const colors = []
  while (colors.length < 5) {
    const randomNum = Math.floor(Math.random() * 7)
    if (!colors.includes(randomNum)){
      colors.push(randomNum)
    }
  }
  return colors
}

const generateRandomActiveLetter = () => {
  return Math.floor(Math.random() * 25)
}

const generateRandomRotation = () => {
  return Math.floor(Math.random() * 3)
}

export default class RotatingLetters extends React.Component {

  static navigationOptions = {
    title: 'Rotating Letters',
    header: null
  }

  constructor(props){
    super(props)

    const activeLetter = generateRandomActiveLetter()

    this.state = {
      activeLetter,
      letterList: generateUniqueLetterArray(activeLetter),
      colorList: generateUniqueBackgroundColorArray(),
      rotation: generateRandomRotation(),
      score: 0,
      isModalVisible: false,
      correctAnswer: false,
    }
  }

  setModalVisible = isModalVisible => {
    this.setState({isModalVisible})
  }

  gotAnswerCorrect = () => {
    this.setState({
      isModalVisible: true,
      correctAnswer: true
    })
  }

  gotAnswerWrong = () => {
    this.setState({
      isModalVisible: true,
      correctAnswer: false
    })
  }

  refreshGameBoard = () => {
    const activeLetter = generateRandomActiveLetter()
    this.setState({
      activeLetter,
      letterList: generateUniqueLetterArray(activeLetter),
      colorList: generateUniqueBackgroundColorArray(),
      rotation: generateRandomRotation(),
      score: 0,
      isModalVisible: false,
    })
  }

  render() {
    return (
      <View style={styles.rotatingLettersContainer}>

        <Modal
          animationIn='slideInUp'
          animationOut='slideOutUp'
          isVisible={this.state.isModalVisible}
          style={styles.modal}
          onBackdropPress={this.refreshGameBoard}
          onBackButtonPress={this.refreshGameBoard}
        >
          <View style={styles.modalBackground}>
            <Text>{this.state.correctAnswer ? 'Good job, you selected the right answer!' : 'Better luck next time bucko'}</Text>
          </View>
        </Modal>

        <View style={[styles.rotatingLetterBox, {
          transform: [{
            rotate: rotations[this.state.rotation]
          }], 
        }]}>
          <Text style={styles.rotateLetterMain}>{letters[this.state.activeLetter]}</Text>
        </View>
        <View style={styles.letterRow}>{this.state.letterList.map((num, i) => {


          return (
            <TouchableOpacity onPress={() => {
              if (num === this.state.activeLetter){
                console.log(num, this.state.activeLetter)
                this.gotAnswerCorrect()
              } else {
                this.gotAnswerWrong()
              }
            }} key={i}>
              <View  style={[styles.letterBtn, {backgroundColor: colors[this.state.colorList[i]]}]}>
                <Text style={styles.gameLetter}>{letters[num]}</Text>
              </View>
            </TouchableOpacity>
          )
        })}</View>
      </View>
    )
  }
}