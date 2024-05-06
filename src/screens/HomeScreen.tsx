// HomeScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Button, ScrollView } from 'react-native';
import AddForm from '../components/AddForm/AddForm';
import DataList from '../components/DataList/DataList';
import api from '../services/api';
import HomeScreenStyles from './styles/HomeScreenStyle/HomeScreenStyle';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  _id: string;
}

const HomeScreen: React.FC = () => {
  const [addSection, setAddSection] = useState<boolean>(false);
  const [editSection, setEditSection] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    _id: ''
  });
  const [dataList, setDataList] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/');
      setDataList(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async () => {
    try {
      if (isEditing) {
        if (formData._id) {
          await api.put(`/update/${formData._id}`, formData);
          // If editing, fetch updated data after successful update
          fetchData();
          setAddSection(false);
          setIsEditing(false);
        } else {
          console.error('ID is undefined. Cannot update.');
          return;
        }
      } else {
        const { _id, ...newUserData } = formData;
        const response = await api.post('/create', newUserData);
        if (response.data && response.status === 200) {
          console.log('New user created:', response.data);
          // If creating a new user, fetch updated data after successful creation
          fetchData();
          setFormData({
            name: '',
            email: '',
            phone: '',
            password: '',
            _id: ''
          });
          setAddSection(false);
          setIsEditing(false);
        } else {
          console.error('Failed to create new user.');
          return;
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  
  

  const handleDelete = async (_id: string) => {
    try {
      await api.delete(`/delete/${_id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }

  const handleEdit = (item: FormData) => {
    console.log('User information:', item);
    setFormData(item);
    setIsEditing(true);
    setEditSection(true);
    setAddSection(true);
  }

  return (
    <ScrollView>
      <View style={HomeScreenStyles.container}>
        {addSection && (
          <AddForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            setAddSection={setAddSection}
          />
        )}

        <DataList dataList={dataList} handleDelete={handleDelete} handleEdit={handleEdit} />
        <View style={HomeScreenStyles.addButtonContainer}>
          <Button title='Add' onPress={() => setAddSection(true)} />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
