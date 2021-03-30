import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchCard from '../../components/SearchCard';
import SearchInput from './searchInput';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const SearchScreen = ({navigation}) => {
  // const [text, onChangeText] = React.useState('Useless Text');
  const [searching, setSearching] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#2E2E2E'}}>
      <ScrollView
        // style={{backgroundColor: '#2E2E2E'}}
        Style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {!searching && (
          <View style={{backgroundColor: '#2E2E2E', margin: 15}}>
            <Text style={styles.title}>Search</Text>
            <View>
              <View
                style={styles.input}
                onPress={() => {
                  setSearching(true);
                  console.log('foi');
                }}
              >
                <Icon
                  name="search"
                  size={25}
                  color="#2E2E2E"
                  style={{margin: 10}}
                  onPress={() => navigation.navigate('SearchInput')}
                />
                <Text
                  style={styles.textInput}
                  onPress={() => navigation.navigate('SearchInput')}>
                  Artists, songs, or podcasts
                </Text>
              </View>
            </View>
            <Text style={styles.text}>Your top genres</Text>
            <SearchCard textCard1={'Pop'} textCard2={'Rock menino'} />
            <Text style={styles.text}>Popular podcast categories</Text>
            <SearchCard textCard1={'de novo qualquer texto'} />
            <Text style={styles.text}>Browzer all</Text>
            <SearchCard textCard1={'de novo qualquer'} />
            <SearchCard textCard1={'de novo qualquer'} />
            <SearchCard textCard1={'de novo qualquer'} />
            <SearchCard textCard1={'de novo qualquer'} />
            <SearchCard textCard1={'de novo qualquer'} />
            <SearchCard textCard1={'de novo qualquer'} />
            <SearchCard textCard1={'de novo qualquer'} />
          </View>
        )}
        {searching && (() => navigation.navigate('PlayScreen'))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 35,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 5,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  iconInput: {
    margin: 10,
  },
  textInput: {
    color: '#2E2E2E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SearchScreen;
