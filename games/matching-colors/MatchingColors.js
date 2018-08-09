import React from 'react'
import { 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native'

import GridView from 'react-native-super-grid'

import shuffle from 'lodash.shuffle'

import Svg, { Circle } from 'react-native-svg'

import styles from './MatchingColorsStyles'

import { AnswerModal } from '../rotating-letters/components'

const colors = [{
  color: '#f44336',
  name: 'Red'
},{
  color: '#9c27b0', 
  name: 'Purple'
},{
  color: '#2196f3', 
  name: 'Blue'
},{
  color: '#4caf50', 
  name: 'Green'
},{
  color: '#ffeb3b', 
  name: 'Yellow'
},{
  color: '#ff9800', 
  name: 'Orange'
},{
  color: '#795548', 
  name: 'Brown'
},{
  color: '#9e9e9e', 
  name: 'Grey'
},{
  color: '#000000', 
  name: 'Black'
},]

const numberOfMovesPerGame = 3

const generateUniqueColorArray = activeColor => {
  const colors = []
  while (colors.length < 3) {
    const randomNum = Math.floor(Math.random() * 9)
    if (!colors.includes(randomNum) && randomNum !== activeColor){
      colors.push(randomNum)
    }
  }
  return shuffle([activeColor, ...colors])
}
const generateRandomColorIndex = () => {
  return Math.floor(Math.random() * 9)
}

export default class MatchingColors extends React.Component{

  static navigationOptions = {
    title: 'Matching Colors',
    header: null
  }

  constructor(props){
    super(props)

    const randomColorIndex = generateRandomColorIndex()

    this.state ={
      score: 0,
      numberOfMovesPerGame,
      timesPlayed: 0,
      activeColor: randomColorIndex,
      colorList: generateUniqueColorArray(randomColorIndex),
      endGame: false
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
    const activeColor = generateRandomColorIndex()
    this.setState({
      isModalVisible: false,
      activeColor,
      colorList: generateUniqueColorArray(activeColor)
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
      <View style={styles.matchingColorsContainer}>

        <Text>{`Score: ${this.state.score}/${numberOfMovesPerGame}`}</Text>

        <AnswerModal 
          isModalVisible={this.state.isModalVisible} 
          correctAnswer={this.state.correctAnswer}
          timesPlayed={this.state.timesPlayed}
          refreshGameBoard={this.refreshGameBoard}
          numberOfMovesPerGame={numberOfMovesPerGame}
          endGame={() => {
            this.setModalVisible(false)
            const params = {
              gameName: 'MatchingColors', 
              score: this.state.score,
              numberOfMovesPerGame,
            }
            this.props.navigation.navigate('EndGameScreen', params)
          }}
        />

        <View>
          <Svg height='210' width='210'>
            <Circle 
              cx="105"
              cy="105"
              r="100"
              stroke={colors[this.state.activeColor].color}
              fill={colors[this.state.activeColor].color}
            />
          </Svg>
        </View>

        <GridView
          itemDimension={130}
          style={styles.gridView}
          items={this.state.colorList}
          renderItem={(num, i) => {

            return (
              <TouchableOpacity onPress={() => this.handleAnswer(num === this.state.activeColor)} key={i}>
                <View  style={styles.colorButton}>
                  <Text style={styles.gameLetter}>{colors[num].name}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        >
        </GridView>
      </View>
    )
  }
}