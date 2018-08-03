import React from 'react'

import { createStackNavigator } from 'react-navigation'

import HomeScreen from './layouts/home-screen/HomeScreen'
import GameGrid from './layouts/game-grid/GameGrid'
import Instructions from './layouts/instructions/Instructions'
import RotatingLetters from './games/rotating-letters/RotatingLetters'


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#90caf9',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 50,
//     marginBottom: 20,
//   },
//   getStartedBtn: {
//     width: 300,
//   },
//   gridView: {
//     paddingTop: 25,
//     flex: 1,
//   },
//   itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 5,
//     padding: 10,
//     height: 175,
//   },
//   itemName: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '600',
//     marginTop: 10,
//   },
//   itemCode: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#fff',
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   instructions: {
//     width: 350,
//     textAlign: 'center',
//     fontSize: 25
//   },
//   instructionsHeader: {
//     fontSize: 35,
//     fontWeight: 'bold'
//   },
//   rotateLetterMain: {
//     fontSize: 250
//   },
//   letterRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   },
//   rotateLettersContainer: {
//     flex: 1,
//     // backgroundColor: '#90caf9',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   }
// })

const RootStack = createStackNavigator({
  HomeScreen,
  GameGrid,
  Instructions,
  RotatingLetters
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'screen',
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}