import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  { id: '1', fileID: '37', fileNo: '474', companyName: 'Bajaj Holdings Investment Limited', country: 'INDIA' },
  { id: '2', fileID: '37', fileNo: '474', companyName: 'Federal Bank Limited', country: 'INDIA' },
];

const AddFile = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Select the team member', value: '' },
    { label: 'Member 1', value: 'member1' },
    { label: 'Member 2', value: 'member2' },
    { label: 'Member 3', value: 'member3' },
    { label: 'Member 4', value: 'member4' },
    { label: 'Member 5', value: 'member5' },
    { label: 'Member 6', value: 'member6' },
    { label: 'Member 7', value: 'member7' },
    { label: 'Member 8', value: 'member8' },
    { label: 'Member 9', value: 'member9' },
    { label: 'Member 10', value: 'member10' },
  ]);

  const [openEntries, setOpenEntries] = useState(false);
  const [valueEntries, setValueEntries] = useState('10');
  const [itemsEntries, setItemsEntries] = useState([
    { label: '10', value: '10' },
    { label: '25', value: '25' },
    { label: '50', value: '50' },
  ]);


  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.fileID}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.fileNo}</Text>
      <View style={styles.verticalDivider}></View>
      <Text style={styles.cell}>{item.companyName}</Text>
    </View>
  );

  const [isPersonalModalVisible, setPersonalModalVisible] = useState(false);
  const [isBDModalVisible, setBDModalVisible] = useState(false);
  const [isTeleModalVisible, setTeleModalVisible] = useState(false);
  const [isOPModalVisible, setOPModalVisible] = useState(false);



  const togglePersonalModal = () => {
    setPersonalModalVisible(!isPersonalModalVisible);
  };

  const toggleBDModal = () => {
    setBDModalVisible(!isBDModalVisible);
  };
  const toggleTeleModal = () => {
    setTeleModalVisible(!isTeleModalVisible);
  };
  const toggleOPModal = () => {
    setOPModalVisible(!isOPModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../Images/cms.png')}
        />
        <Text style={styles.headerTitle}>Claim My Shares</Text>
        <IconButton icon="bell" size={20} color="white" />
        <Text>
          <Icon name="person" size={30} color="white" />;
        </Text>
        <Text style={styles.headerUser}>Michaeldavis</Text>
      </View>

      <Text style={styles.sectionTitle}>ASSIGN FILE</Text>

      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Assign to Team Member</Text>
        <View style={styles.pickerContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={styles.picker}
          />
        </View>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Assign to Team Member</Text>
        <View style={styles.pickerContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={styles.picker}
          />
        </View>
      </Card>

      <TouchableOpacity style={{ backgroundColor: '#162732', paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', marginBottom: 10 }}>
        <Text style={styles.updateButtonText}>UPDATE DATA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.updateButton} onPress={togglePersonalModal}>
        <Text style={styles.updateButtonText}>Personal Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updateButton} onPress={toggleBDModal}>
        <Text style={styles.updateButtonText}>BD Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updateButton} onPress={toggleTeleModal }>
        <Text style={styles.updateButtonText}>Tele & Letter Team Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updateButton} onPress= {toggleOPModal}>
        <Text style={styles.updateButtonText}>Operational Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: '#162732', paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', marginBottom: 10, width: "50%", borderRadius: 10, marginLeft: 70 }}>
        <Text style={styles.updateButtonText}>UPDATE DATA</Text>
      </TouchableOpacity>

      <Card style={styles.card}>
        <Text style={[styles.cardTitle, { backgroundColor: "#162732",width:'100%', color: "white", marginBottom: 5, borderRadius: 10 }]}>KYC Documents</Text>
        <View style={styles.kycHeader}>
          <TouchableOpacity style={[styles.fileButton, { backgroundColor: "#007BFF", marginLeft: 70, width: '40%', height: '70%', marginTop: 10 }]} onPress={() => { }}>
            <Text style={styles.fileButtonText}>Choose file</Text>
            <Icon name="attach-file" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.updateButton, { backgroundColor: '#0FBE00' }]} onPress={() => { }}>
            <Text style={styles.updateButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.entries}>
          <TextInput style={styles.search} placeholder="Search..." />
          <DropDownPicker
            open={openEntries}
            value={valueEntries}
            items={itemsEntries}
            setOpen={setOpenEntries}
            setValue={setValueEntries}
            setItems={setItemsEntries}
            containerStyle={styles.pickerEntries}
          />
          <Text style={styles.entriesText}>entries per page</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>file id</Text>
              <View style={styles.verticalDivider}></View>
              <Text style={styles.headerCell}>Aadhar Card</Text>
              <View style={styles.verticalDivider}></View>
              <Text style={styles.headerCell}>Pan Card</Text>
            </View>
          )}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>srno</Text>
              <View style={styles.verticalDivider}></View>
              <Text style={styles.headerCell}>Doc</Text>
              <View style={styles.verticalDivider}></View>
              <Text style={styles.headerCell}>Descrition</Text>
              <View style={styles.verticalDivider}></View>
              <Text style={styles.headerCell}>Delete Doc</Text>
            </View>
          )}
        />
        <TouchableOpacity style={[styles.updateButton, { backgroundColor: '#007BFF', width: '40%' }]} onPress={() => { }}>
          <Text style={styles.updateButtonText}>Show More</Text>
        </TouchableOpacity>
      </Card>

      <Card style={styles.card}>
        <Text style={[styles.cardTitle, { backgroundColor: "#162732", width: '100%', color: "white", marginBottom: 5, borderRadius: 5 }]}>Comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Michaeldavis</Text>
          <Text>Files are completed from tele team by Parag</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Asad</Text>
          <Text>Files are completed from tele team by Asad</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Abhishek</Text>
          <Text>Files are completed from tele team by Abhishek</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Parag</Text>
          <Text>Files are completed from tele team by Parag</Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.commentUser}>Divesh</Text>
          <Text>Files are completed from tele team by Divesh</Text>
        </View>
      </Card>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isPersonalModalVisible}
        onRequestClose={togglePersonalModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Personal Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Employee ID:</Text>
              <TextInput style={styles.modalInput} placeholder="Enter Employee ID" 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Employee Name:</Text>
              <TextInput style={styles.modalInput} placeholder="Enter Employee Name"
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Email Address:</Text>
              <TextInput style={styles.modalInput} placeholder="Enter Email Address"
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Mobile Number:</Text>
              <TextInput style={styles.modalInput} placeholder="Enter Mobile Number"   placeholderTextColor="#FFFFFF"
 />
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={togglePersonalModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBDModalVisible}
        onRequestClose={toggleBDModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>BD Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Bd Case Study:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Case Type:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Status:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Confidence Level:</Text>
              <TextInput style={styles.modalInput}    placeholderTextColor="#FFFFFF"
 />
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={toggleBDModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isTeleModalVisible}
        onRequestClose={toggleTeleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tele&Letter Team Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>RTA_Status:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>No of Shares:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>BD Status:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>IEPF:</Text>
              <TextInput style={styles.modalInput}    placeholderTextColor="#FFFFFF"
 />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>Physical:</Text>
              <TextInput style={styles.modalInput}    placeholderTextColor="#FFFFFF"
 />
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={toggleTeleModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOPModalVisible}
        onRequestClose={toggleOPModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Operational Details</Text>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>OPS Cirtificate No:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>OPS Distinctive NO:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>OPS Status No:</Text>
              <TextInput style={styles.modalInput} 
                placeholderTextColor="#FFFFFF"

              />
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.modalLabel}>OPS Case No:</Text>
              <TextInput style={styles.modalInput}    placeholderTextColor="#FFFFFF"
 />
            </View>
           
            <TouchableOpacity style={styles.modalButton} onPress={toggleOPModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: 'white',
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
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  headerUser: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    padding: 10,
    marginVertical: 10,
    elevation: 5,
    borderWidth: 0.2,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
  },
  pickerContainer: {
    marginBottom: 10,
  },
  picker: {
    height: 40,
  },
  updateButton: {
    backgroundColor: '#78B7FB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  kycHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  fileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  fileButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  entries: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  pickerEntries: {
    height: 40,
    width: 80,
  },
  entriesText: {
    marginLeft: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#162732',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color:'white',
  },
  cell: {
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#162732',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  modalItem: {
    width: '100%',
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 5,
    color:'white'
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    color:'white',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#162732',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddFile;
