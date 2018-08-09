import React from 'react'
import { 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native'

import {
  generateUniqueLetterArray,
  generateRandomActiveLetter,
  generateRandomRotation,
  generateUniqueBackgroundColorArray
} from '../utilities'

import { 
  AnswerModal
} from '../components'

import styles from '../RotatingLettersStyles'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const rotations = ['90deg', '180deg', '270deg']
const colors = ['#90caf9', '#80cbc4', '#b39ddb', '#ffcdd2', '#c8e6c9', '#ffccbc', '#fff9c4']
const numberOfMovesPerGame = 3

export default class RotatingLettersLevelOne extends React.Component {

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
      numberOfMovesPerGame,
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
    this.setModalVisible(false)
    const params = {
      gameName: 'RotatingLettersLevelOne',
      score: this.state.score,
      numberOfMovesPerGame,
      restartGame: this.restartGame,
      timesPlayed: this.state.timesPlayed
    }
    this.props.navigation.navigate('EndGameScreen', params)
  }

  render() {
    return (
      <View style={styles.rotatingLettersContainer}>

        <Text style={styles.scoreboard}>{`Score: ${this.state.score}/${numberOfMovesPerGame}`}</Text>

        <AnswerModal 
          isModalVisible={this.state.isModalVisible} 
          correctAnswer={this.state.correctAnswer}
          timesPlayed={this.state.timesPlayed}
          refreshGameBoard={this.refreshGameBoard}
          numberOfMovesPerGame={numberOfMovesPerGame}
          endGame={this.endGame}
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