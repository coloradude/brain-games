import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
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

  render(){
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}