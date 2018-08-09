import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  matchingColorsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  colorButton: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#808080', 
    borderRadius: 5
  },
  gameLetter: {
    fontSize: 35
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  }
})