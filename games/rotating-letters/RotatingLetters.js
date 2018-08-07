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

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const rotations = ['90deg', '180deg', '270deg']
const colors = ['#90caf9', '#80cbc4', '#b39ddb', '#ffcdd2', '#c8e6c9', '#ffccbc', '#fff9c4']

export default class RotatingLetters extends React.Component {

  static navigationOptions = {
    title: 'Rotating Letters',
    header: null
  }

  constructor(props){
    super(props)

    const activeLetter = this.generateRandomActiveLetter()

    this.state = {
      activeLetter,
      letterList: this.generateUniqueLetterArray(activeLetter),
      colorList: this.generateUniqueBackgroundColorArray(),
      rotation: this.generateRandomRotation(),
      score: 0,
      isModalVisible: false,
      correctAnswer: false,
    }
  }

  // componentWillMount(){
    
  //   this.setState({
  //     activeLetter,
  //     letterList: this.generateUniqueLetterArray(activeLetter),
  //     colorList: this.generateUniqueBackgroundColorArray(),
  //     rotation: this.generateRandomRotation()
  //   })
  // }

  setModalVisible(visible){
    this.setState({isModalVisible: visible})
  }

  generateUniqueLetterArray = (activeLetter) => {
    const uniques = []
    while (uniques.length < 3){
      const randomNum = Math.floor(Math.random() * 25)
      if (!uniques.includes(randomNum) && randomNum !== activeLetter){
        uniques.push(randomNum)
      }
    }

    console.log('yo')

    console.log(activeLetter, uniques, 'here')

    return shuffle([activeLetter, ...uniques])
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

  generateRandomActiveLetter = () => {
    return Math.floor(Math.random() * 25)
  }

  generateRandomRotation = () => {
    return Math.floor(Math.random() * 3)
  }

  render() {

    console.log(this.state, 'render')

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
      <View style={styles.letterRow}>{this.state.letterList.map((num, i) => {


        return (
          <TouchableOpacity onPress={() => {
            if (num === this.state.activeLetter){
              console.log('success')
              this.setModalVisible(true)
            } else {
              console.log(`You pickes ${letters[num]} but the correct answer was ${letters[this.state.activeLetter]}`)
            }
          }} key={i}>
            <View  style={[styles.letterBtn, {backgroundColor: colors[this.state.colorList[i]]}]}>
              <Text style={styles.gameLetter}>{letters[num]}</Text>
            </View>
          </TouchableOpacity>
        )
      })}</View>
    </View>)
  }
}