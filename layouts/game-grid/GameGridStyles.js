import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 175,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})