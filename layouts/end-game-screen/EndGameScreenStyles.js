import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    marginVertical: 75
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  endGameButton: {
    width: 250,
    height: 75,
    backgroundColor: '#81d4fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  endGameButtonText: {
    fontSize: 20
  }
})