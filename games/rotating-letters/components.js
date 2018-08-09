import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Svg, { Path } from 'react-native-svg'
import {
  checkCircle,
  timesCircle
} from '../../svg/icons'


import Modal from 'react-native-modal'
import styles from './RotatingLettersStyles'
import { numberOfMovesPerGame } from './level-one/staticVariables'

const SvgGenerator = params => (
  <Svg width='90' height='90' viewBox={params.viewBox}>
    <Path 
      d={params.d}
      fill={params.fill}
      stroke={params.stroke}
    />
  </Svg>
)

export const AnswerModal = ({
  isModalVisible, 
  refreshGameBoard,
  correctAnswer,
  endGame,
  timesPlayed
}) => {
  return (
    <Modal
      animationIn='slideInUp'
      animationOut='slideOutUp'
      isVisible={isModalVisible}
      style={styles.modal}
      onBackdropPress={refreshGameBoard}
      onBackButtonPress={refreshGameBoard}
    >
      <View style={styles.modalBackground}>
        {correctAnswer ? SvgGenerator(checkCircle) : SvgGenerator(timesCircle)}
        <Text style={styles.modalText}>{correctAnswer ? 'Good job, you selected the right answer!' : 'Better luck next time bucko'}</Text>
        <TouchableOpacity style={styles.nextButton} onPress={timesPlayed < numberOfMovesPerGame ? refreshGameBoard : endGame}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}