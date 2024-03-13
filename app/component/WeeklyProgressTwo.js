import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Appearance, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const WeeklyProgressTwo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={[styles.container, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : '#fff' }]}>
      {/* Search Input */}
      <View style={[styles.searchContainer, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#111' : '#eee', borderWidth: Appearance.getColorScheme() === 'dark' ? 1 : 0 }]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={Appearance.getColorScheme() === 'dark' ? "#616161" : 'gray'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialIcons name="search" size={20} color={Appearance.getColorScheme() === 'dark' ? '#FFF' : 'gray'} style={{fontWeight:'bold'}} />
      </View>

      {/* Title */}
      <Text style={[styles.title, { color: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#333' }]}>Your Pending Tasks</Text>

      {/* Tasks */}
      <View style={styles.taskContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9,10].map((index) => (
          <TouchableOpacity style={[styles.taskBox, { borderColor: Appearance.getColorScheme() === 'dark' ? '#FFF' : 'transparent' }]} key={index}>
            <View style={styles.taskRow}>
              <Text style={[styles.taskText, { color: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#333' }]}>
                {index}.{' '}
                {index === 1 && 'KYC Pending'}
                {index === 2 && 'ISR 1 Complete'}
                {index === 3 && 'Sign Pending'}
                {index === 4 && 'NOC Pending'}
                {index === 5 && 'Probate Will'}
                {index === 6 && 'Succession'}
                {index === 7 && 'ISR 3'}
                {index === 8 && 'Bank Certification'}
                {index === 9 && 'Police Complaint'}
                {index === 10 && 'ISR 4'}
              </Text>
              <TextInput style={styles.taskTextInput} placeholder="1 day" />
              <TouchableOpacity>
                <MaterialIcons name="add" size={30} color="#0079FB"   /> 
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    
    ...Platform.select({
      ios: {
        shadowColor: 'lightblue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: Appearance.getColorScheme() === 'dark' ? '0' : '1',
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    color: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#000', // Change text color based on appearance mode
  },
  searchIcon: {
    marginLeft: 10,
    fontWeight:'bold'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskContainer: {
    marginTop: 10,
   
  },
  taskBox: {
    width: '100%',
    height: 50,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : 'white', // Change background color based on appearance mode
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: Appearance.getColorScheme() === 'dark' ? '#FFF' : 'transparent', // Add white border for dark mode
    borderWidth: 0.2, // Add border width
    ...Platform.select({
      ios: {
        shadowColor: Appearance.getColorScheme()=='dark'? null: '#cde5fe',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity:Appearance.getColorScheme() === 'dark' ? 0 : 1,
        shadowRadius: 10,
      },
      android: {
        elevation: Appearance.getColorScheme() === 'dark' ? 0 : 5, // Remove elevation only for dark mode
      },
    }),
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskTextInput: {
    width: 60,
    height: 35,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 5,
    fontSize: 12,
    marginTop: 10,
  },
});

export default WeeklyProgressTwo;
