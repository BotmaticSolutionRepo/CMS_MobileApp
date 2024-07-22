import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

var Environment = require('../../environment.js');

const BdSearch = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('10');
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [isEntriesDropdownVisible, setEntriesDropdownVisible] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      fetch(Environment.BASE_URL + "/GetFiles", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('GetFilesDetails:', data);
        if (!data.isException) {
          setDashboardData(data.result);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const handleFilterDropdownToggle = () => {
    setFilterDropdownVisible(!isFilterDropdownVisible);
  };

  const handleEntriesDropdownToggle = () => {
    setEntriesDropdownVisible(!isEntriesDropdownVisible);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterDropdownVisible(false);
  };

  const handleEntriesSelect = (entries) => {
    setEntriesPerPage(entries.toString());
    setEntriesDropdownVisible(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = dashboardData.filter(item => 
    item.Company_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item ,key}) => (
<TouchableOpacity onPress={() => navigation.navigate('AddFile', { fileId: item.File_ID, aadharCard: item.Aadhar_number, panCard: item.Pan_Card })}>

    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.File_ID}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.File_No}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.Company_Name}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.State}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 0.2, marginTop: 4, borderRadius: 10, marginTop: 15, backgroundColor: "#F5F5F5" }}>
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.inputContainer} onPress={handleFilterDropdownToggle}>
            <TextInput
              style={styles.filterInput}
              placeholder="Select Filter"
              value={selectedFilter}
              editable={false}
              pointerEvents="none"
            />
            <Icon name="chevron-down" size={20} color="#000" style={styles.icon} />
          </TouchableOpacity>
          {isFilterDropdownVisible && (
            <View style={styles.dropdownList}>
              {['Filter 1', 'Filter 2', 'Filter 3'].map((item) => (
                <TouchableOpacity key={item} onPress={() => handleFilterSelect(item)} style={styles.dropdownItem}>
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <TextInput
            style={[styles.filterInput, { width: '50%', marginRight: 10 }]}
            placeholder="Enter..."
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Multiple Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paginationRow}>
        <TouchableOpacity style={styles.inputContainer} onPress={handleEntriesDropdownToggle}>
          <TextInput
            style={styles.entriesInput}
            placeholder="10"
            value={entriesPerPage}
            editable={false}
            pointerEvents="none"
          />
          <Icon name="chevron-down" size={20} color="#000" style={styles.icon} />
        </TouchableOpacity>
        {isEntriesDropdownVisible && (
          <View style={styles.dropdownList}>
            {[10, 20, 30, 40, 50].map((item) => (
              <TouchableOpacity key={item} onPress={() => handleEntriesSelect(item)} style={styles.dropdownItem}>
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TextInput
          style={styles.searchInput}
          placeholder="Com_name"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationText}>PREV</Text>
        </TouchableOpacity>
        <Text style={[styles.paginationText, { borderWidth: 0.2, backgroundColor: 'lightblue' }]}>1</Text>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationText}>NEXT</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>File ID</Text>
            <View style={styles.verticalDivider}></View>
            <Text style={styles.headerCell}>File no.</Text>
            <View style={styles.verticalDivider}></View>
            <Text style={styles.headerCell}>Company Name</Text>
            <View style={styles.verticalDivider}></View>
            <Text style={styles.headerCell}>Country</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: "40%",
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    padding: 5,
  },
  filterInput: {
    flex: 1,
    padding: 5,
  },
  searchButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    zIndex:0
  },
  button: {
    flex: 1,
    backgroundColor: '#142631',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginVertical: 40,
  },
  entriesInput: {
    height: 40,
    width: 50,
    marginRight: 5,
    padding: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: '#ccc',
    borderWidth: 1,
    elevation: 5,
    shadowColor: "#C8E2FF",
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
  },
  paginationButton: {
    padding: 10,
    borderWidth: 0.1,
    borderRadius: 1,
    backgroundColor: "gray",
  },
  paginationText: {
    marginHorizontal: 5,
    borderRadius: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#162732',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  icon: {
    marginLeft: 5,
  },
  dropdownList: {
    position: 'absolute',
    top: 40,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default BdSearch;
