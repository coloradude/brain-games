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
  modalText: {
    fontSize: 25,
    textAlign: 'center'
  },
  modalBackground: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 325,
    height: 300,
    borderRadius: 5,
    marginTop: 60,
    marginBottom: 60
  },
  nextButton: {
    width: 150,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#81d4fa',
    borderRadius: 5,
    justifyContent: 'center'
  },
  nextButtonText: {
    fontSize: 25
  }
})