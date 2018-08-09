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

import styles from './InstructionsStyles'

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
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate(navParams.game)}}
        >
          <View style={styles.startGameButton}>
            <Text style={styles.startGameText}>Let's Go</Text>
            <Svg
              width='50'
              height='50'
              viewBox='0 0 448 512'
            >
              <Path
                d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'
                stroke='#808080'
                fill='#808080'
              />
            </Svg>
          </View>
          
        </TouchableOpacity>
      </View>
    )
  }
}