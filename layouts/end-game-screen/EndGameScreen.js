import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler
} from 'react-native'

import styles from './EndGameScreenStyles'

export default class EndGameScreen extends React.Component {

  static navigationOptions = {
    title: 'Game Over',
    header: null
  }

  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('GameGrid')
    return true
  }

  render(){

    const navParams = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{`Score: ${navParams.score}/${navParams.numberOfMovesPerGame}`}</Text>
        <TouchableOpacity
          // onPress={}
        >
          <View style={styles.endGameButton}>
            <Text style={styles.endGameButtonText}>Submit Score</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(navParams.gameName, {newGame: true})}
        >
          <View style={styles.endGameButton}>
            <Text style={styles.endGameButtonText}>Play Again</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('GameGrid')}
        >
          <View style={styles.endGameButton}>
            <Text style={styles.endGameButtonText}>Back To Game Menu</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}