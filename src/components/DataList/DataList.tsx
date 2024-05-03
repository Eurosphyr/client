import React from 'react';
import { View } from 'react-native';
import DataItem from './DataItem';

const DataList = ({ dataList , handleDelete  } :any) => {
  return (
    <View>
      {
        dataList.map((item: any, index: any) => (
          <DataItem key={index} item={item} handleDelete={handleDelete} />
        ))
      }
    </View>
  );
}

export default DataList;
