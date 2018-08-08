import React from 'react'
import { 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native'

import Modal from 'react-native-modal'

import {
  generateUniqueLetterArray,
  generateRandomActiveLetter,
  generateRandomRotation,
  generateUniqueBackgroundColorArray
} from './utilities'

import {
  letters,
  rotations,
  colors,
  numberOfMovesPerGame
} from './staticVariables'

import { 
  AnswerModal
} from './components'

import styles from './RotatingLettersStyles'

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
      timesPlayed: 0,
      isModalVisible: false,
      correctAnswer: false,
      endGame: false,
    }
  }

  setModalVisible = isModalVisible => {
    this.setState({isModalVisible})
  }

  handleAnswer = answer => {
    if (answer){
      this.setState({
        score: this.state.score + 1,
        timesPlayed: this.state.timesPlayed + 1,
        isModalVisible: true,
        correctAnswer: true,
      })
    } else {
      this.setState({
        timesPlayed: this.state.timesPlayed + 1,
        isModalVisible: true,
        correctAnswer: false,
      })
    }
  }

  refreshGameBoard = () => {
    const activeLetter = generateRandomActiveLetter()
    this.setState({
      activeLetter,
      letterList: generateUniqueLetterArray(activeLetter),
      colorList: generateUniqueBackgroundColorArray(),
      rotation: generateRandomRotation(),
      isModalVisible: false,
    })
  }

  restartGame = () => {
    const activeLetter = generateRandomActiveLetter()
    this.setState({
      activeLetter,
      letterList: generateUniqueLetterArray(activeLetter),
      colorList: generateUniqueBackgroundColorArray(),
      rotation: generateRandomRotation(),
      isModalVisible: false,
      score: 0,
      timesPlayed: 0,
      correctAnswer: false,
      endGame: false,
    })
  }

  endGame = () => {
    this.setState({
      endGame: true,
      isModalVisible: false,
    })
  }

  render() {
    return (
      <View style={styles.rotatingLettersContainer}>

        <Text>{`Score: ${this.state.score}/${numberOfMovesPerGame}`}</Text>

        {this.state.endGame && 
        <Modal
          animationIn='slideInUp'
          animationOut='slideOutUp'
          isVisible={true}
          style={styles.modal}
          onBackButtonPress={() => this.props.navigation.navigate('GameGrid')}
        >
          <View style={styles.modalBackground}>
            <Text>{`You got ${this.state.score}/${numberOfMovesPerGame} answers correct`}</Text>
            <TouchableOpacity onPress={this.restartGame}><Text>Play Again</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GameGrid')}><Text>Back To Game Menu</Text></TouchableOpacity>
          </View>
        </Modal>}

        <AnswerModal 
          isModalVisible={this.state.isModalVisible} 
          correctAnswer={this.state.correctAnswer}
          timesPlayed={this.state.timesPlayed}
          refreshGameBoard={this.refreshGameBoard}
          endGame={() => {
            this.setModalVisible(false)
            this.props.navigation.navigate('EndGameScreen')
          }}
        />

        <View style={[styles.rotatingLetterBox, {
          transform: [{
            rotate: rotations[this.state.rotation]
          }], 
        }]}>
          <Text style={styles.rotateLetterMain}>{letters[this.state.activeLetter]}</Text>
        </View>
        <View style={styles.letterRow}>{this.state.letterList.map((num, i) => {


          return (
            <TouchableOpacity onPress={() => this.handleAnswer(num === this.state.activeLetter)} key={i}>
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