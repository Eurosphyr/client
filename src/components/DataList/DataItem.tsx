// DataItem.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import DataItemStyles from './styles/DataItemStyle';

const DataItem = ({ item, handleDelete, handleEdit }: any) => {
  return (
    <View style={DataItemStyles.container}>
      <Text style={DataItemStyles.text}>{item.name}</Text>
      <Text style={DataItemStyles.text}>{item.email}</Text>
      <Text style={DataItemStyles.text}>{item.phone}</Text>
      <Text style={DataItemStyles.text}>{item.password}</Text>
      <View style={DataItemStyles.buttonContainer}>
        <Button title='Edit' onPress={() => handleEdit(item._id)} />
        <Button title='Delete' onPress={() => handleDelete(item._id)} color='#DC3545' />
      </View>
    </View>
  );
}

export default DataItem;
