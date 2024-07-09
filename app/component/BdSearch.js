import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', fileID: '37', fileNo: '474', companyName: 'Bajaj Holdings Investment Limited', country: 'INDIA' },
  { id: '2', fileID: '37', fileNo: '474', companyName: 'Federal Bank Limited', country: 'INDIA' },
];

const BdSearch = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('10');
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [isEntriesDropdownVisible, setEntriesDropdownVisible] = useState(false);

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

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.fileID}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.fileNo}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.companyName}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.country}</Text>
    </View>
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
          <TextInput style={[styles.filterInput,{width:'50%',marginRight:10}]} placeholder="Enter..." />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
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
        <TextInput style={styles.searchInput} placeholder="Search..." />
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationText}>PREV</Text>
        </TouchableOpacity>
        <Text style={[styles.paginationText, { borderWidth: 0.2, backgroundColor: 'lightblue' }]}>1</Text>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationText}>NEXT</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
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
  time: {
    textAlign: 'right',
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    width:"40%",
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
