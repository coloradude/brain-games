import React from 'react'
import { 
  Text, 
  View , 
  Button,
  TouchableOpacity,
} from 'react-native'

import Modal from 'react-native-modal'

import Svg, { Path } from 'react-native-svg'

import styles from './RotatingLettersStyles'

import shuffle from 'lodash.shuffle'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const rotations = ['90deg', '180deg', '270deg']
const colors = ['#90caf9', '#80cbc4', '#b39ddb', '#ffcdd2', '#c8e6c9', '#ffccbc', '#fff9c4']

const checkCircle = {
  viewBox: '0 0 512 512',
  d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
  stroke: '#c5e1a5',
  fill: '#c5e1a5'
}

const timesCircle = {
  viewBox: '0 0 512 512',
  d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
  stroke: '#f48fb1',
  fill: '#f48fb1'
}

const SvgGenerator = params => (
  <Svg width='90' height='90' viewBox={params.viewBox}>
    <Path 
      d={params.d}
      fill={params.fill}
      stroke={params.stroke}
    />
  </Svg>
)

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
      timesPlayed: 0,
      isModalVisible: false,
      correctAnswer: false,
    }
  }

  setModalVisible = isModalVisible => {
    this.setState({isModalVisible})
  }

  handleAnswer = answer => {

    if (this.state.timesPlayed === 9 && answer){
      this.setState({
        score: this.state.score + 1,
        timesPlayed: this.state.timesPlayed + 1
      })
    } else if (this.state.timesPlayed === 9 && !answer){
      this.setState({
        timesPlayed: this.state.timesPlayed + 1
      })
    } else if (answer){
      this.setState({
        isModalVisible: true,
        correctAnswer: true,
        score: this.state.score + 1,
        timesPlayed: this.state.timesPlayed + 1
      })
    } else {
      this.setState({
        isModalVisible: true,
        correctAnswer: false,
        timesPlayed: this.state.timesPlayed + 1
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

  render() {
    return (
      <View style={styles.rotatingLettersContainer}>

        <Text>{`Score: ${this.state.score}/10`}</Text>

        {this.state.timesPlayed === 10 && 
        <Modal
          animationIn='slideInUp'
          animationOut='slideOutUp'
          isVisible={true}
          style={styles.modal}
        >
          <View style={styles.modalBackground}>
            <Text>{`You got ${this.state.score}/10 answers correct`}</Text>
            <Button title='Play Again' onPress={this.props.navigation.navigate('GameGrid')}/>
            <Button title='Back to Main Menu' onPress={this.props.navigation.navigate('GameGrid')}/>
          </View>
        </Modal>}

        <Modal
          animationIn='slideInUp'
          animationOut='slideOutUp'
          isVisible={this.state.isModalVisible}
          style={styles.modal}
          onBackdropPress={this.refreshGameBoard}
          onBackButtonPress={this.refreshGameBoard}
        >
          <View style={styles.modalBackground}>
            {this.state.correctAnswer ? SvgGenerator(checkCircle) : SvgGenerator(timesCircle)}
            <Text>{this.state.correctAnswer ? 'Good job, you selected the right answer!' : 'Better luck next time bucko'}</Text>
            <Button title='Next' onPress={this.refreshGameBoard}/>
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