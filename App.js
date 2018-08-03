import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View , 
  Button,
  TouchableOpacity
} from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import GridView from 'react-native-super-grid'

import { createStackNavigator } from 'react-navigation'

import Svg, { Path } from 'react-native-svg'

import reducers from './reducers'

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>OMFG I FINALLY GOT REACT NATIVE SETUP</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Hoooray</Text>
//       </View>
//     )
//   }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90caf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    marginBottom: 20,
  },
  getStartedBtn: {
    width: 300,
  },
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
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home Screen',
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header}
        >
          Brain Games!
        </Text>
        <View style={styles.getStartedBtn}>
          <Button
            // style={styles.getStartedBtn}
            onPress={()=>{this.props.navigation.navigate('GameGrid')}}
            title='Get Started'
            color='#b39ddb'
          />
        </View>
      </View>
    )
  }
}

class GameGrid extends React.Component {
  static navigationOptions = {
    title: 'Game Grid',
    header: null
  }

  onPress = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  render() {

    const items = [{
      viewBox: '0 0 448 512',
      fill: 'white',
      stroke: 'white',
      d: 'M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z',
      title: 'Rotating Letters',
      code: '#80cbc4',
      transform: 'rotate(-90 224.00000000000003,256)'
    },{
      viewBox: '0 0 512 512',
      fill: 'white',
      stroke: 'white',
      d: 'M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z',
      title: 'Matching Colors',
      code: '#90caf9',
      transform: ''
    },{
      viewBox: '0 0 448 512',
      fill: '#b39ddb',
      stroke: '#b39ddb',
      d: 'M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z',
      title: 'Matching Letters & Colors',
      code: '#f48fb1',
      transform: ''
    },]

    return (
      <GridView
        style={styles.gridView}
        itemDimension={130}
        items={items}
        renderItem={item => (
          <TouchableOpacity onPress={this.onPress}>
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <View style={styles.iconContainer}>
                <Svg
                  width='90'
                  height='90'
                  viewBox={item.viewBox}
                >
                  <Path 
                    d={item.d} 
                    stroke={item.stroke} 
                    fill={item.fill}
                    transform={item.transform}
                  />
                </Svg>
              </View>
              <Text style={styles.itemName}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}

const RootStack = createStackNavigator({
  HomeScreen,
  GameGrid
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'screen'
})

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}