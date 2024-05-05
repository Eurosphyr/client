import React from 'react';
import { View, TextInput, Button } from 'react-native';
import AddFormStyles from './styles/AddFormStyle'; // Import styles from the separate file

const AddForm = ({ handleSubmit, handleChange, formData, setAddSection }: any) => {
  return (
    <View style={AddFormStyles.container}>
      <TextInput
        style={AddFormStyles.input}
        placeholder='Name'
        onChangeText={(text) => handleChange('name', text)}
        value={formData.name}
      />
      <TextInput
        style={AddFormStyles.input}
        placeholder='Email'
        onChangeText={(text) => handleChange('email', text)}
        value={formData.email}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={AddFormStyles.input}
        placeholder='Phone'
        onChangeText={(text) => handleChange('phone', text)}
        value={formData.phone}
        keyboardType='phone-pad'
      />
      <TextInput
        style={AddFormStyles.input}
        placeholder='Password'
        onChangeText={(text) => handleChange('password', text)}
        value={formData.password}
        secureTextEntry={true}
      />
      <View style={AddFormStyles.buttonContainer}>
        <Button title='Submit' onPress={handleSubmit} color='#007BFF' />
        <Button title='Close' onPress={() => setAddSection(false)} color='#6C757D' />
      </View>
    </View>
  );
}

export default AddForm;
