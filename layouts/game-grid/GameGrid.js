import React from 'react'
import { 
  Text, 
  View , 
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Svg, { Path } from 'react-native-svg'

import GridView from 'react-native-super-grid'

import styles from './GameGridStyles'

export default class GameGrid extends React.Component {

  static navigationOptions = {
    title: 'Game Grid',
    header: null
  }

  onPress = (params) => {
    this.props.navigation.navigate('Instructions', params)
  }

  render() {

    const items = [{
      viewBox: '0 0 448 512',
      fill: 'white',
      stroke: 'white',
      d: 'M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z',
      gameName: 'Rotating Letters',
      code: '#80cbc4',
      transform: 'rotate(-90 224.00000000000003,256)',
      instructions: 'Choose the letter on the bottom of the screen that matches the large rotated letter in the center of the screen.',
      game: 'RotatingLetters'
    },{
      viewBox: '0 0 512 512',
      fill: 'white',
      stroke: 'white',
      d: 'M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z',
      gameName: 'Matching Colors',
      code: '#90caf9',
      transform: '',
      instructions: 'Choose the letter on the bottom of the screen that matches the large rotated letter in the center of the screen.',
      game: 'RotatingLetters'
    },{
      viewBox: '0 0 448 512',
      fill: '#b39ddb',
      stroke: '#b39ddb',
      d: 'M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z',
      gameName: 'Matching Letters & Colors',
      code: '#f48fb1',
      transform: '',
      instructions: 'Choose the letter on the bottom of the screen that matches the large rotated letter in the center of the screen.',
      game: 'RotatingLetters'
    },]

    return (
      <GridView
        style={styles.gridView}
        itemDimension={130}
        items={items}
        renderItem={item => (
          <TouchableOpacity onPress={() => this.onPress({
            instructions: item.instructions, 
            gameName: item.gameName,
            viewBox: item.viewBox,
            d: item.d,
            stroke: item.stroke,
            fill: item.fill,
            transform: item.transform,
            game: item.game
          })}>
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <View style={styles.iconContainer}>
                <Svg
                  width='90'
                  height='90'
                  viewBox={item.viewBox}
                >
                  <Path 
                    d={item.d} 
                    stroke={item.stroke} 
                    fill={item.fill}
                    transform={item.transform}
                  />
                </Svg>
              </View>
              <Text style={styles.itemName}>{item.gameName}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}