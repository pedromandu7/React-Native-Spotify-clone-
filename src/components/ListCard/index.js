import React from 'react';
import {Text, View, Image, FlatList, ImageBackground} from 'react-native';

const ListCard = ({dataList, imageUrl, containerStyle}) => {
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
        style={{height: 175}}
        horizontal={true}
      />
    </View>
  );
};

const SquareCard = (obj) => (
  <View
    style={{
      marginRight: 15,
      width: 120,
      height: 120,
    }}>
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={{
        uri: obj.item.imageUrl,
      }}
    />

    <Text style={{color: 'white'}}>{obj.item.title}</Text>
  </View>
);

export default ListCard;
