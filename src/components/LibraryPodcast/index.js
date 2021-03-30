import React from 'react';
import {Text, View, Image, FlatList, ImageBackground} from 'react-native';

const LibraryPodcast = ({textCard1, textCard2, imageUrl}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text>Library Podcast</Text>
    </View>
  );
};

export default LibraryPodcast;
