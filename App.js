import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';
const deviceWidth = Dimensions.get('window').width

import Carousel from './components/Carousel'

export default class App extends React.Component {



  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        {/* <Carousel /> */}
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: deviceWidth,
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
});
