import React from 'react';
import { View, TextInput, Button } from 'react-native';

const AddForm = ({ handleSubmit, handleChange, formData, setAddSection } : any) => {
  return (
    <View>
      <TextInput placeholder='Name' onChangeText={(text) => handleChange('name', text)} value={formData.name} />
      <TextInput placeholder='Email' onChangeText={(text) => handleChange('email', text)} value={formData.email} />
      <TextInput placeholder='Phone' onChangeText={(text) => handleChange('phone', text)} value={formData.phone} />
      <TextInput placeholder='Password' onChangeText={(text) => handleChange('password', text)} value={formData.password} secureTextEntry={true} />
      <Button title='Submit' onPress={handleSubmit} />
      <Button title='Close' onPress={() => setAddSection(false)} />
    </View>
  );
}

export default AddForm;
