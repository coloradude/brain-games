import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler
} from 'react-native'

export default class EndGameScreen extends React.Component {

  static navigationOptions = {
    title: 'Game Over',
    header: null
  }

  constructor(props){
    super(props)

    this.state = {
      a: 'b'
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
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}