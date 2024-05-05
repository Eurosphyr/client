import React, { useState, useEffect } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import AddForm from '../components/AddForm/AddForm';
import DataList from '../components/DataList/DataList';
import api from '../services/api';
import HomeScreenStyles from './styles/HomeScreenStyle/HomeScreenStyle';

const HomeScreen = () => {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (name: any, value: any) => {
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async () => {
    try {
      await api.post('/create', formData);
      fetchData();
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: ''
      });
      setAddSection(false);
    } catch (err) {
      console.error(err);
    }
  }

  const fetchData = async () => {
    try {
      const response = await api.get('/');
      setDataList(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleDelete = async (id: any) => {
    try {
      await api.delete(`/delete/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ScrollView>
      <View style={HomeScreenStyles.container}>
        {
          addSection && (
            <AddForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
              setAddSection={setAddSection}
            />
          )
        }

        <DataList dataList={dataList} handleDelete={handleDelete} handleEdit={handleChange} />
        <View style={HomeScreenStyles.addButtonContainer} >
          <Button title='Add' onPress={() => setAddSection(true)}  />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
