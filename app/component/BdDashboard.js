import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const BdDashboard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('10');
 // const navigation = useNavigation(); 


  const entries = ['10', '20', '30', '40', '50'];

  const renderEntryItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.entryItem} 
      onPress={() => {
        setSelectedValue(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.entryText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../Images/cms.png')}
        />
        <Text style={styles.appName}>Claim My Shares</Text>
        <View style={styles.headerRight}>
          <Icon name="notifications-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.username}>Michael Davis</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 15, height: 160}}>
        <View style={[styles.buttonsContainer, {marginLeft: 20}]}>
          <TouchableOpacity style={[styles.button, styles.searchButton]}
           onPress={() => navigation.navigate('BdSearch')}>
            <Text style={styles.buttonText}>Search</Text>
            <Icon name="search-outline" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={[styles.buttonsContainer, {marginLeft: 20}]}>
          <TouchableOpacity 
            style={[styles.button, styles.reportsButton]}
            onPress={() => navigation.navigate('BdFilesReport')}
          >
            <Text style={styles.buttonText}>Reports</Text>
            <Icon name="document-outline" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>Assigned Files</Text>
      </View>

      <TouchableOpacity 
        style={styles.entriesPerPageContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.entriesPerPageText}>{selectedValue}</Text>
        <Icon name="chevron-down-outline" size={20} color="#000" style={styles.icon} />
        <Text style={styles.entriesPerPageLabel}> entries per page</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            <Text style={[styles.columnHeader, styles.borderRight,]}>S.No</Text>
            <Text style={[styles.columnHeader, styles.borderRight]}>Assigned By</Text>
            <Text style={styles.columnHeader}>BD Status</Text>
          </View>
          {Array.from({ length: parseInt(selectedValue) }).map((_, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.borderRight]}>{index + 1}</Text>
              <Text style={[styles.tableCell, styles.borderRight]}>Kishor {index + 3}</Text>
              <Text style={styles.tableCell}>Pending</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalBackground} 
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList 
              data={entries}
              renderItem={renderEntryItem}
              keyExtractor={(item) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  logo: {
    width: 30,
    height: 30,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  icon: {
    marginRight: 5,
  },
  username: {
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    elevation: 0.12,
    width: '40%',
    borderWidth: 0.2,
    borderRadius: 5,
    shadowColor: 'lightblue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 110,
    borderRadius: 10,
    elevation: 3,
    margin: 10,
  },
  searchButton: {
    backgroundColor: '#FF8C00', // Orange color for Search button
  },
  reportsButton: {
    backgroundColor: '#1E90FF', // Blue color for Reports button
  },
  buttonText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  tableHeader: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    margin: 10,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  entriesPerPageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 10,
  },
  entriesPerPageText: {
    fontSize: 16,
  },
  entriesPerPageLabel: {
    fontSize: 12,
    color: '#777',
  },
  scrollView: {
    margin: 10,
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    elevation: 5,
    borderWidth: 0.2,
    borderColor: 'lightgray',
    margin: 10,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#162732',
    backgroundColor: '#162732',
    paddingVertical: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  columnHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color:'white',
    paddingHorizontal: 5, // Add padding for spacing
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5, // Add padding for spacing
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  entryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  entryText: {
    fontSize: 16,
  },
});

export default BdDashboard;
