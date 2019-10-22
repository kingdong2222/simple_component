import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import Constants from 'expo-constants';
const deviceWidth = Dimensions.get('window').width
const DATA = [
  {
    id: 0,
    title: 'First Item',
  },
  {
    id: 1,
    title: 'Second Item',
  },
  {
    id: 2,
    title: 'Third Item',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      // onPress={() => onSelect(id)}
      style={[
        styles.item,
        // { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    const { order } = props;
    this.state = { page: 0 }
  }

  onViewableItemsChanged = ({ viewableItems }) => {
    const firstViewItem = viewableItems[0].key;
    const index = DATA.findIndex(item => item.id === firstViewItem);

    this.setState({page: index})

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
            // selected={!!selected.get(item.id)}
            // onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.id}
          // extraData={selected}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: this.state.page === 0 ? '#ff0000' : '#000',
              borderRadius: 20,
              marginHorizontal: 5,
            }}
          ></View>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: this.state.page === 1 ? '#ff0000' : '#000',
              borderRadius: 20,
              marginHorizontal: 5,
            }}
          ></View>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: this.state.page === 2 ? '#ff0000' : '#000',
              borderRadius: 20,
              marginHorizontal: 5,
            }}
          ></View>
        </View>

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
