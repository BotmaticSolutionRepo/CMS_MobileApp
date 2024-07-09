import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Details = () => {
    const navigation = useNavigation();
    const handleOther = () =>{
        navigation.navigate('OtherDetails');

    }
    handlePersonal = () =>{
        navigation.navigate('PersonalDetails');

    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../Images/cms.png')}
        />
        <Text style={styles.headerTitle}>Claim My Shares</Text>
        <IconButton icon="bell" size={20} color="white" />
        <View style={styles.userSection}>
          <Icon name="person" size={30} color="white" />
          <Text style={styles.headerUser}>Michaeldavis</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePersonal}>
          <Text style={styles.buttonText}>Personal Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOther}>
          <Text style={styles.buttonText}>Other Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#162732',
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerUser: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#142631',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation:5,
    borderColor:'#78B7FB',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Details;