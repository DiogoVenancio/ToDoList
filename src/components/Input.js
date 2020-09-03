import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Input = ({ onChangeText, value }) => (
    <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid="#000"/>
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 10,
        paddingBottom: 10,
    }
});

export default Input;