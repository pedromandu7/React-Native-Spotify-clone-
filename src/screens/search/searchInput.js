import React from 'react';
import {Text, StyleSheet, TextInput, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = ({navigation}) => {
  const [text, onChangeText] = React.useState();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={{flex: 1, height: '100%', width: '100%'}}>
        <View style={styles.viewInput}>
          <Icon
            name="chevron-left"
            style={{padding: 10}}
            size={25}
            onPress={() => navigation.goBack()}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="search here"
            value={text}
          />
          {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
        </View>
        <View style={{ flex: 1, }}>
          <Text style={{textAlign: 'center', color: 'white', justifyContent: 'center'}}>
            Play what you love
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 55,
    backgroundColor: 'gray',
  },
  viewInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  safeAreaView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2E2E2E',
  },
});

export default SearchInput;
