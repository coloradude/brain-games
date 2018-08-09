import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
  startGameButton: {
    width: 250,
    height: 75,
    backgroundColor: '#a5d6a7',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row'
  },
  startGameText: {
    fontSize: 40
  }
})
