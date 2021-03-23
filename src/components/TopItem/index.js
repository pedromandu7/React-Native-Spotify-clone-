import React from 'react';
import {Text, View, Image} from 'react-native';

const TopItem = ({label, imageUrl, containerStyle}) => {
  return (
    <View
      style={[
        containerStyle,
        {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 0,
        margin: 5,
      }
      ]}>
      <Image
        style={{
          flex: 1,
          height: '100%',
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={{flex: 2, fontWeight: 'bold', color: 'white'}}>
        {label}
      </Text>
    </View>
  );
};

export default TopItem;
