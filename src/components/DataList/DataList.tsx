import React from 'react';
import { View } from 'react-native';
import DataItem from './DataItem';
import DataListStyles from './styles/DataListStyle'; // Import styles from the separate file

const DataList = ({ dataList, handleDelete }: any) => {
  return (
    <View style={DataListStyles.container}>
      {
        dataList.map((item: any, index: any) => (
          <DataItem key={index} item={item} handleDelete={handleDelete} />
        ))
      }
    </View>
  );
}

export default DataList;
