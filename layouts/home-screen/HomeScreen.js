import React from 'react'
import { 
  Text, 
  View , 
  Button,
} from 'react-native'

import styles from './HomeScreenStyles'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home Screen',
    header: null
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
          <Button
            onPress={()=>{this.props.navigation.navigate('GameGrid')}}
            title='Get Started'
            color='#b39ddb'
          />
        </View>
      </View>
    )
  }
}
