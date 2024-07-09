import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const data = [
  { key: 'Yet To Start', value: 21 },
  { key: 'Work In Process', value: 25 },
  { key: 'Not Traced', value: 34 },
  { key: 'Lost', value: 14 },
  { key: 'Hold', value: 2 },
  { key: 'Completed on BD', value: 45 },
  { key: 'Completed on Call', value: 50 },
  { key: 'Completed on Call', value: 67 }
];

const BdFilesReport = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation(); 

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleEntriesSelect = (value) => {
    setEntriesPerPage(value);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BD Files Report</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.bdStatusContainer}>
          <Text style={styles.subHeader}>BD Status</Text>
          <View style={styles.topRow}>
            <View style={styles.dropdownContainer}>
              <TouchableOpacity onPress={handleDropdownToggle} style={styles.dropdown}>
                <Text style={styles.dropdownText}>{entriesPerPage}</Text>
                <Icon name="caret-down" size={14} color="#999" />
              </TouchableOpacity>
              <Text style={styles.dropdownLabel}>entries per page</Text>
              {isDropdownVisible && (
                <View style={styles.dropdownList}>
                  {[10, 20, 30, 40, 50].map((item) => (
                    <TouchableOpacity key={item} onPress={() => handleEntriesSelect(item)} style={styles.dropdownItem}>
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            <View style={styles.searchContainer}>
              <Icon name="search" size={17} color="#999" style={styles.searchIcon} />
              <TextInput
                style={styles.searchBox}
                placeholder="Search..."
                placeholderTextColor="#999"
              />
            </View>
          </View>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.box}>
                <Text style={styles.boxText}>{item.key}</Text>
                <View style={styles.circle}>
                  <Text style={styles.boxValue}>{item.value}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  scrollView: {
    flexGrow: 1,
  },
  bdStatusContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 0.2,
    elevation: 5,
    shadowColor: '#87CEEB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left'
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginRight: 5,
  },
  dropdownText: {
    fontSize: 16,
    marginRight: 5,
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#999',
  },
  dropdownList: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 35,
    flex: 1,
    marginLeft: 5
  },
  box: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#E4F1FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#87CEEB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  boxText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center'
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default BdFilesReport;
