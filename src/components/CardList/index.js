import React from 'react';
import {Text, View, Image, FlatList, ImageBackground} from 'react-native';

const CardList = ({dataList, imageUrl, containerStyle}) => {
  return (
    <View
      style={{
        minWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <FlatList
        data={dataList}
        renderItem={(obj) => {
          return SquareCard(obj);
        }}
        style={{height: 250}}
        horizontal={true}
      />
    </View>
  );
};

const SquareCard = (obj) => (
  <View
    style={{
      backgroundColor: obj.item.color,
      marginRight: 15,
      width: 120,
      // maxWidth: 130,
      height: 120,
      // maxHeight: 130,
    }}>
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={{
        uri: obj.item.imageUrl,
      }}
    />

    <Text style={{color: 'white' }}>{obj.item.title}</Text>
  </View>
);

export default CardList;
