import React from 'react';
import { View, Text, Button } from 'react-native';
import DataItemStyles from './styles/DataItemStyle'; // Import styles from the separate file

const DataItem = ({ item, handleDelete }: any) => {
  return (
    <View style={DataItemStyles.container}>
      <Text style={DataItemStyles.text}>{item.name}</Text>
      <Text style={DataItemStyles.text}>{item.email}</Text>
      <Text style={DataItemStyles.text}>{item.phone}</Text>
      <Text style={DataItemStyles.text}>{item.password}</Text>
      <Button title='Delete' onPress={() => handleDelete(item._id)} color='#DC3545' />
    </View>
  );
}

export default DataItem;