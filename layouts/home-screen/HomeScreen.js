import React from 'react'
import { 
  Text, 
  View , 
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native'

import styles from './HomeScreenStyles'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home Screen',
    header: null
  }

  constructor(props){
    super(props)

    this.state = {
      text: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header}
        >
          Brain Games!
        </Text>
        <View style={styles.getStartedBtn}>
          <TextInput
            style={{height: 40}}
            onChangeText={phone => this.setState({phone})}
            value={this.state.phone}
            placeholder='Phone Number'
          />
          <TextInput
            style={{height: 40}}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            placeholder='Password'
          />
          <TouchableOpacity
            onPress={()=>{}}
            style={{backgroundColor: '#b39ddb', justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 5}}
          > 
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('GameGrid')}}
            style={{backgroundColor: '#b39ddb', justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 5}}
          > 
            <Text>Go to Game Grid</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
