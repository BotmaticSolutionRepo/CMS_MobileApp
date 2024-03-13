import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Appearance, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WeeklyProgress = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleChangePassword = () => {
    navigation.navigate('WeeklyProgress');
  };

  return (
    <View style={[styles.container, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : '#fff' }]}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weekly Progress</Text>
        <Image source={require('../Images/cms.png')} style={styles.profileImage} />
      </View> */}

      {/* Search Input */}
      <View style={[styles.searchContainer, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#111' : '#eee', borderColor: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#ccc', elevation: 5 }]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={Appearance.getColorScheme() === 'dark' ? "#FFFFFF" : 'gray'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>CMS Ops Team Task</Text>

      {/* Tasks */}
      <View style={styles.taskContainer}>
        <TouchableOpacity style={styles.taskBox}>
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>1. Physical document not changed</Text>
            <TextInput style={styles.taskTextInput} placeholder="1 day" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.taskBox}>
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>2. ISR form not filled</Text>
            <TextInput style={styles.taskTextInput} placeholder="1 day" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.taskBox}>
          <View style={styles.taskRow}>
            <Text style={styles.taskText}>3. Notary coordination pending</Text>
            <TextInput style={styles.taskTextInput} placeholder="1 day" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    marginTop: -1,
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'lightblue',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  searchContainer: {
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
  },
  searchInput: {
    height: 40,
    color: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  taskContainer: {
    marginTop: 10,
  },
  taskBox: {
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : 'white',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#ccc',
    elevation: 5, // Add elevation for Android
    ...Platform.select({
      ios: {
        shadowColor: 'lightblue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
    }),
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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

export default WeeklyProgress;
