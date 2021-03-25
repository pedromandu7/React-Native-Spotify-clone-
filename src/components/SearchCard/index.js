import React from 'react';
import {Text, View, Image, FlatList, ImageBackground} from 'react-native';

const SearchCard = ({textCard1, textCard2, imageUrl}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {SquareCard(textCard1)}
      {SquareCard(textCard2)}
    </View>
  );
};

const SquareCard = (obj) => (
  <View
    style={{
      borderRadius: 5,
      backgroundColor: 'red',
      alignItems: 'center',
      flexDirection: 'row',
      width: '48%',
      height: 90,
      marginBottom: 15,
    }}>
    <Text
      style={{
        color: 'white',
        backgroundColor: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
      }}>
      {obj}
    </Text>
  </View>
);

export default SearchCard;
