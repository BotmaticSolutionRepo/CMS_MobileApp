import React, { useState, useEffect,useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert ,Appearance} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';

var Environment = require('../../environment.js');

const BdSearch = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filtertext, setfiltertext] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('10');
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [isEntriesDropdownVisible, setEntriesDropdownVisible] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [serchtxt, setserchtxt] = useState('');
  const [filterarr, setfilterarr] = useState([
    {key: "Aadhar_number", label: "Aadhar_number"},
    {key: "Address", label: "Address"},
    {key: "Adv_Advance_Status", label: "Adv_Advance_Status"},
    {key: "Adv_Index_Number", label: "Adv_Index_Number"},
    {key: "Adv_New_Address", label: "Adv_New_Address"},
    {key: "Assign_To_BD", label: "Assign_To_BD"},
    {key: "Assign_To_Ops", label: "Assign_To_Ops"},
    {key: "BD_Case_Study", label: "BD_Case_Study"},
    {key: "BD_Case_Type", label: "BD_Case_Type"},
    {key: "BD_Comment", label: "BD_Comment"},
    {key: "BD_Confidence_Level", label: "BD_Confidence_Level"},
    {key: "BD_Status", label: "BD_Status"},
    {key: "BD_Status_Value", label: "BD_Status_Value"},
    {key: "BD_Templete_View", label: "BD_Templete_View"},
    {key: "Company_Name", label: "Company_Name"},
    {key: "Consolidated_Address", label: "Consolidated_Address"},
    {key: "ContactDetails", label: "ContactDetails"},
    {key: "Country", label: "Country"},
    {key: "Curier_Status", label: "Curier_Status"},
    {key: "Date_of_Birth", label: "Date_of_Birth"},
    {key: "Date_of_Transfer", label: "Date_of_Transfer"},
    {key: "District", label: "District"},
    {key: "Dp_id", label: "Dp_id"},
    {key: "Father_First_Name", label: "Father_First_Name"},
    {key: "Father_Full_Name", label: "Father_Full_Name"},
    {key: "Father_Last_Name", label: "Father_Last_Name"},
    {key: "Father_Middle_Name", label: "Father_Middle_Name"},
    {key: "Fees", label: "Fees"},
    {key: "File_ID", label: "File_ID"},
    {key: "File_No", label: "File_No"},
    {key: "Folio_Number", label: "Folio_Number"},
    {key: "IEPF", label: "IEPF"},
    {key: "Investment_Type", label: "Investment_Type"},
    {key: "Investor_First_Name", label: "Investor_First_Name"},
    {key: "Investor_Full_Name", label: "Investor_Full_Name"},
    {key: "Investor_Last_Name", label: "Investor_Last_Name"},
    {key: "Investor_Middle_Name", label: "Investor_Middle_Name"},
    {key: "JointHolderName", label: "JointHolderName"},
    {key: "KYC_Compliance", label:"KYC_Compliance"},
    {key: "Letter_Status", label: "Letter_Status"},
    {key: "Letter_Tracking_Number", label: "Letter_Tracking_Number"},
    {key: "Market_Value", label: "Market_Value"},
    {key: "No_Of_Share", label: "No_Of_Share"},
    {key: "Nominee_Name", label: "Nominee_Name"},
    {key: "Ops_CaseType", label: "Ops_CaseType"},
    {key: "Ops_CertificateNumber", label: "Ops_CertificateNumber"},
    {key: "Ops_Comment", label: "Ops_Comment"},
    {key: "Ops_DistinctiveNumber", label: "Ops_DistinctiveNumber"},
    {key: "Ops_DividendCredited", label: "Ops_DividendCredited"},
    {key: "Ops_DividendCreditedOn", label: "Ops_DividendCreditedOn"},
    {key: "Ops_InvoiceIssued", label: "Ops_InvoiceIssued"},
    {key: "Ops_InvoiceIssuedOn", label: "Ops_InvoiceIssuedOn"},
    {key: "Ops_PaymentReceived", label: "Ops_PaymentReceived"},
    {key: "Ops_PaymentReceivedOn", label: "Ops_PaymentReceivedOn"},
    {key: "Ops_SharesCredited", label: "Ops_SharesCredited"},
    {key: "Ops_SharesCreditedOn", label: "Ops_SharesCreditedOn"},
    {key: "Ops_Stages", label: "Ops_Stages"},
    {key: "Ops_WorkStatus", label: "Ops_WorkStatus"},
    {key: "Pan_Card", label: "Pan_Card"},
    {key: "Physical", label: "Physical"},
    {key: "PinCode", label: "PinCode"},
    {key: "Praposed_Date_of_Transfer", label: "Praposed_Date_of_Transfer"},
    {key: "RTA_Status", label: "RTA_Status"},
    {key: "Refrence_Number", label: "Refrence_Number"},
    {key: "Region", label: "Region"},
    {key: "Remarks", label: "Remarks"},
    {key: "Serial_Number", label: "Serial_Number"},
    {key: "Sheet_No", label: "Sheet_No"},
    {key: "State", label: "State"},
    {key: "Suspense", label: "Suspense"},
    {key: "TeamMember_Assigned", label: "TeamMember_Assigned"},
    {key: "TeamMember_Assigned_ID", label: "TeamMember_Assigned_ID"},
    {key: "Team_Assigned", label: "Team_Assigned"},
    {key: "Team_Assigned_ID", label: "Team_Assigned_ID"},
    {key: "Tel_InSuspense", label: "Tel_InSuspense"},
    {key: "Tel_Joint_Holder_Name", label: "Tel_Joint_Holder_Name"},
    {key: "Tel_No_Of_Certificate", label: "Tel_No_Of_Certificate"},
    {key: "Tel_Nominee_Name", label: "Tel_Nominee_Name"},
    {key: "Tel_VerificationStatus", label: "Tel_VerificationStatus"},
    {key: "Tele_Comment", label: "Tele_Comment"},
    {key: "TraceLetter_Comment", label: "TraceLetter_Comment"},
    {key: "Unclaimed_shares", label: "Unclaimed_shares"},
    {key: "User_ID", label: "User_ID"},
    {key: "Variable_Status", label: "Variable_Status"},
    {key: "Village_Name", label: "Village_Name"},
    {key: "dataDropdown", label: "dataDropdown"},
    {key: "ec", label: "ec"}
]
);

 


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
  const search = useCallback(() => {
    if (serchtxt === "" && filtertext === "") {
      Alert.alert("Please select a filter and enter text to search");
    } else {
      const filtered = dashboardData.filter(item => item[serchtxt] === filtertext);
      console.log("rutiiiiikkkk____",filtered)

      // console.log("Filtered Data: ", filteredData);
      // Update state or handle filtered data as needed
    }
  }, [serchtxt, filtertext, dashboardData]);
  
  

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
      <View style={{ borderWidth: 0.2, marginTop: 4, borderRadius: 10, marginTop: 15, backgroundColor:  Appearance.getColorScheme()=='dark'?"gray":"#F5F5F5" }}>
        <View style={styles.filterRow}>
         
        <Dropdown
          style={{width:'100%',color:'gray',borderColor:'black',borderWidth:1,height:40,borderRadius:5,backgroundColor:'white',padding:5,marginRight:5,marginLeft:0}}
          placeholderStyle={{color:'gray'}}
          selectedTextStyle={{color:'gray'}}
          inputSearchStyle={{color:'gray'}}
          itemTextStyle={{color:'gray'}}
          // iconStyle={styles.iconStyle}
          data={filterarr}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={('Select')}
          searchPlaceholder="Search..."
          value={filtertext}
         
          onChange={item => {
            setfiltertext(item.label);
          }}
         
        />
          <TextInput
              style={{borderColor:'black',color:'gray',backgroundColor:'white',borderRadius:5,height:35,padding:3,width:"100%"}}
              placeholder="Enter Text"
              placeholderTextColor={"gray"}
              value={serchtxt}
              onChangeText={(text)=>{setserchtxt(text)}}
              // editable={false}
              pointerEvents="none"
            />
          {isFilterDropdownVisible && (
            <View style={styles.dropdownList}>
              {['Filter 1', 'Filter 2', 'Filter 3'].map((item) => (
                <TouchableOpacity key={item} onPress={() => handleFilterSelect(item)} style={styles.dropdownItem}>
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {/* <TextInput
            style={[styles.filterInput, { width: '50%', marginRight: 10 }]}
            placeholder="Enter..."
          /> */}
          <TouchableOpacity  onPress={search} style={[styles.searchButton,{marginLeft:10}]}>
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
          <Icon name="chevron-down" size={20} color= {Appearance.getColorScheme()=='dark'?"gray":"#000"} style={styles.icon} />
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
      <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>File ID</Text>
            <View style={styles.verticalDivider}></View>
            <Text style={styles.headerCell}>File no.</Text>
            <View style={styles.verticalDivider}></View>
            <Text style={styles.headerCell}>Company Name</Text>
            <View style={styles.verticalDivider}></View>
            <Text style={styles.headerCell}>Country</Text>
          </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // ListHeaderComponent={() => (
        //   // <View style={styles.tableHeader}>
        //   //   <Text style={styles.headerCell}>File ID</Text>
        //   //   <View style={styles.verticalDivider}></View>
        //   //   <Text style={styles.headerCell}>File no.</Text>
        //   //   <View style={styles.verticalDivider}></View>
        //   //   <Text style={styles.headerCell}>Company Name</Text>
        //   //   <View style={styles.verticalDivider}></View>
        //   //   <Text style={styles.headerCell}>Country</Text>
        //   // </View>
        // )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:  Appearance.getColorScheme()=='dark'?"black":'#fff',
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
    backgroundColor: Appearance.getColorScheme()=='dark'?"gray":"white"
  },
  searchInput: {
    flex: 1,
    backgroundColor: Appearance.getColorScheme()=='dark'?"gray": "#FFFFFF",
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
    color:Appearance.getColorScheme()=='dark'?'gray':'black',
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
    backgroundColor: Appearance.getColorScheme()=='dark'?"gray": 'white',
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
