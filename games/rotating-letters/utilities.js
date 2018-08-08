import shuffle from 'lodash.shuffle'

export const generateUniqueLetterArray = activeLetter => {
  const uniques = []
  while (uniques.length < 3){
    const randomNum = Math.floor(Math.random() * 25)
    if (!uniques.includes(randomNum) && randomNum !== activeLetter){
      uniques.push(randomNum)
    }
  }

  return shuffle([activeLetter, ...uniques])
}

export const generateUniqueBackgroundColorArray = () => {
  const colors = []
  while (colors.length < 5) {
    const randomNum = Math.floor(Math.random() * 7)
    if (!colors.includes(randomNum)){
      colors.push(randomNum)
    }
  }
  return colors
}

export const generateRandomActiveLetter = () => {
  return Math.floor(Math.random() * 25)
}

export const generateRandomRotation = () => {
  return Math.floor(Math.random() * 3)
}