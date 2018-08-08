import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rotateLetterMain: {
    fontSize: 250
  },
  letterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  rotateLettersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rotatingLetterBox: {
    alignItems: 'center'
  },
  letterBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5
  },
  gameLetter: {
    fontSize: 40
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 400,
    borderRadius: 5
  }
})