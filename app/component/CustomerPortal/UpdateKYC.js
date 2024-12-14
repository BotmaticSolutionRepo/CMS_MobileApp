import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons from react-native-vector-icons

const UpdateKYC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  const handleEdit = () => {
    // Add logic for handling edit action
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={{ color: 'lightblue', marginLeft: 10 }}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Update KYC</Text>
          <View style={{ flex: 1 }} />
        </View> */}
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PERSONAL INFORMATION</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text>Edit</Text>
            <MaterialIcons name="edit" size={20} color="black" style={styles.editIcon} /> 
          </TouchableOpacity>
          <View style={styles.faintLine} />
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fullname</Text>
            <Text style={styles.inputText}>Kishor Patil</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date of Birth</Text>
            <Text style={styles.inputText}>16/07/2003</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Mobile Number</Text>
            <Text style={styles.inputText}>9307181758</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.inputText}>kishor.g@botmaticsolution.in</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Pin Code</Text>
            <Text style={styles.inputText}>413516</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>IDENTITY PROOF</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text>Edit</Text>
            <MaterialIcons name="edit" size={20} color="black" style={styles.editIcon} /> 
          </TouchableOpacity>
          <View style={styles.faintLine} />
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID Card</Text>
            <Text style={styles.inputText}>257***********</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Card Number</Text>
            <Text style={styles.inputText}>125********</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Uploaded Document</Text>
            <Text style={styles.inputText}>passport</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BANK DETAILS</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text>Edit</Text>
            <MaterialIcons name="edit" size={20} color="black" style={styles.editIcon} /> 
          </TouchableOpacity>
          <View style={styles.faintLine} />
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Account Name</Text>
            <Text style={styles.inputText}>bank of ******</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Account Number</Text>
            <Text style={styles.inputText}>5729********</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>IFSC Code</Text>
            <Text style={styles.inputText}>************</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Account Type</Text>
            <Text style={styles.inputText}>saveing******</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Bank Name</Text>
            <Text style={styles.inputText}>************</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.updateButton} onPress={() => {
          navigation.navigate('Dashboard')}}>
          
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    marginVertical: 10,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  faintLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  editButton: {
   // backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row', // Align text and icon horizontally
    justifyContent: 'center', // Align text and icon in center
    alignItems: 'center', // Align text and icon in center
    position: 'absolute',
    marginRight: 20,
    right: 0,
    top: 0,
  },
  editIcon: {
    marginLeft: 5, // Add space between text and icon
  },
  detailLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputText: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 8,
    marginLeft: 10,
    fontSize: 14,
  },
  updateButton: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 20,
    width: '80%',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 100,
  },
});

export default UpdateKYC;
