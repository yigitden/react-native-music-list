import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import musicData from './data/musicData.json';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [list, setList] = useState(musicData);

  const renderData = ({item}) => <Card item={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const onSearch = text => {
    const filteredData = musicData.filter(item => {
      const searchedText = text.toLowerCase();
      const currentText = item.title.toLowerCase();

      return currentText.indexOf(searchedText) > -1;
    });

    setList(filteredData);
  };

  return (
    <SafeAreaView style={styles.main}>
      <SearchBar onSearch={onSearch} />
      <FlatList
        data={list}
        renderItem={renderData}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
  },
});
