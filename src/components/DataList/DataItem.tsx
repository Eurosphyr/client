// DataItem.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import DataItemStyles from './styles/DataItemStyle';

interface DataItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface Props {
  item: DataItem;
  handleDelete: (_id: string) => void;
  handleEdit: (item: DataItem) => void;
}

const DataItem: React.FC<Props> = ({ item, handleDelete, handleEdit }) => {
  return (
    <View style={DataItemStyles.container}>
      <Text style={DataItemStyles.text}>{item.name}</Text>
      <Text style={DataItemStyles.text}>{item.email}</Text>
      <Text style={DataItemStyles.text}>{item.phone}</Text>
      <Text style={DataItemStyles.text}>{item.password}</Text>
      <View style={DataItemStyles.buttonContainer}>
        <Button title='Edit' onPress={() => handleEdit(item)} />
        <Button title='Delete' onPress={() => handleDelete(item._id)} color='#DC3545' />
      </View>
    </View>
  );
}

export default DataItem;
