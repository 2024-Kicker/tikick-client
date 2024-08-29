import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckbox = ({ label, checked, onCheck, showSeparator }) => {

  return (
    <View>
      <TouchableOpacity onPress={onCheck} style={styles.container}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && <Icon name="check" size={16} color="#000" />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      {showSeparator && <View style={styles.separator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d6d6d6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#65E77B',
    borderColor: '#65E77B',
    color: '#000000'
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default CustomCheckbox;
