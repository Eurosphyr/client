import React from 'react';
import { View } from 'react-native';
import DataItem from './DataItem';
import DataListStyles from './styles/DataListStyle';

const DataList = ({ dataList, handleDelete, handleEdit }: any) => {
  return (
    <View style={DataListStyles.container}>
      {
        dataList.map((item:any, index:any) => (
          <DataItem key={index} item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))
      }
    </View>
  );
}

export default DataList;
