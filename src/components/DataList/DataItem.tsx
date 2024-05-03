import React from 'react';
import { View, Text, Button } from 'react-native';

const DataItem = ({ item , handleDelete } :any) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.phone}</Text>
      <Text>{item.password}</Text>
      <Button title='Delete' onPress={() => handleDelete(item._id)} />
    </View>
  );
}

export default DataItem;
