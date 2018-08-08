import React from 'react'

import { createStackNavigator } from 'react-navigation'

import HomeScreen from './layouts/home-screen/HomeScreen'
import GameGrid from './layouts/game-grid/GameGrid'
import Instructions from './layouts/instructions/Instructions'
import EndGameScreen from './layouts/end-game-screen/EndGameScreen'
import RotatingLetters from './games/rotating-letters/RotatingLetters'

const RootStack = createStackNavigator({
  HomeScreen,
  GameGrid,
  Instructions,
  EndGameScreen,
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