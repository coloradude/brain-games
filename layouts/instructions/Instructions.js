import React from 'react'
import { 
  Text, 
  View , 
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Tts from 'react-native-tts'

import Svg, { Path } from 'react-native-svg'

// import styles from './InstructionsStyles'

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90caf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    width: 350,
    textAlign: 'center',
    fontSize: 25
  },
  instructionsHeader: {
    fontSize: 35,
    fontWeight: 'bold'
  },
})

export default class Instructions extends React.Component {

  // this is wrong context apparently
  // static navigationOptions = {
  //   title: this.props.navigation.state.params.gameName
  // }

  render () {

    const navParams = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Button title='Speak' onPress={() => Tts.speak('')}/>
        <View style={styles.iconContainer}>
          <Svg
            width='90'
            height='90'
            viewBox={navParams.viewBox}
          >
            <Path 
              d={navParams.d} 
              stroke={navParams.stroke} 
              fill={navParams.fill}
              transform={navParams.transform}
            />
          </Svg>
        </View>
        <Text style={styles.instructionsHeader}>{navParams.gameName}</Text>
        <Text style={styles.instructions}>{navParams.instructions}</Text>
        <Button
          title="Let's Go"
          onPress={() => {this.props.navigation.navigate(navParams.game)}}
        />
      </View>
    )
  }
}