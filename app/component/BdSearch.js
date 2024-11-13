import React, { useState, useEffect,useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert ,Appearance} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import Modal from 'react-native-modal';

var Environment = require('../../environment.js');

const BdSearch = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filtertext, setfiltertext] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('10');
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [isEntriesDropdownVisible, setEntriesDropdownVisible] = useState(false);
  const [multiplesearchmodal, setmultiplesearchmodal] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [serchtxt, setserchtxt] = useState('');
  const [singlesrchfilter, setsinglesrchfilter] = useState('');
  const [singlesrchfiltererr, setsinglesrchfiltererr] = useState('');
  const [singlesrchtxt, setsinglesrchtxt] = useState('');
  const [singlesrchtxterr, setsinglesrchtxterr] = useState('');


  const [multiplesrcfilter, setmultiplesrcfilter] = useState('');
  const [multiplesrctxt, setmultiplesrctxt] = useState('');

  const [filterarr, setfilterarr] = useState([
    {value: "File_ID", label: "File_ID"},
    {value: "File_No", label: "File_No"},
    {value: "Company_Name", label: "Company_Name"},
    {value: "Investor_First_Name", label: "Investor_First_Name"},
    {value: "Investor_Middle_Name", label: "Investor_Middle_Name"},
    {value: "Investor_Last_Name", label: "Investor_Last_Name"},
    {value: "Investor_Full_Name", label: "Investor_Full_Name"},
    {value: "Father_First_Name", label: "Father_First_Name"},
    {value: "Father_Middle_Name", label: "Father_Middle_Name"},
    {value: "Father_Last_Name", label: "Father_Last_Name"},
    {value: "Father_Full_Name", label: "Father_Full_Name"},
    {value: "Address", label: "Address"},
    {value: "Country", label: "Country"},
    {value: "State", label: "State"},
    {value: "District", label: "District"},
    {value: "PinCode", label: "PinCode"},
    {value: "Full_Address_Consolidation", label: "Full Address Consolidation"},
    {value: "Folio_Number", label: "Folio_Number"},
    {value: "Dp_id", label: "Dp_id"},
    {value: "Unclaimed_shares", label: "Unclaimed_shares"},
    {value: "Praposed_Date_of_Transfer", label: "Praposed_Date_of_Transfer"},
    {value: "Pan_Card", label: "Pan_Card"},
    {value: "Date_of_Birth", label: "Date_of_Birth"},
    {value: "Aadhar_number", label: "Aadhar_number"},
    {value: "Nominee_Name", label: "Nominee_Name"},
    {value: "JointHolderName", label: "JointHolderName"},
    {value: "Market_Value", label: "Market_Value"},
    {value: "RTA_Status", label: "RTA_Status"},
    {value: "No_Of_Share", label: "No_Of_Share"},
    {value: "IEPF", label: "IEPF"},
    {value: "Physical", label: "Physical"},
    {value: "Tel_InSuspense", label: "Tel_InSuspense"},
    {value: "Tel_VerificationStatus", label: "Tel_VerificationStatus"},
    {value: "Tele_Comment", label: "Tele_Comment"},
    {value: "Refrence_Number", label: "Refrence_Number"},
    {value: "Letter_Tracking_Number", label: "Letter_Tracking_Number"},
    {value: "Letter_Status", label: "Letter_Status"},
    {value: "Variable_Status", label: "Variable_Status"},
    {value: "Latter_Comment", label: "Latter Comment"},
    {value: "Assign_To_BD", label: "Assign_To_BD"},
    {value: "BD_Case_Study", label: "BD_Case_Study"},
    {value: "BD_Case_Type", label: "BD_Case_Type"},
    {value: "BD_Status", label: "BD_Status"},
    {value: "BD_Confidence_Level", label: "BD_Confidence_Level"},
    {value: "BD_Comment", label: "BD_Comment"},
    {value: "Ops_CertificateNumber", label: "Ops_CertificateNumber"},
    {value: "Ops_DistinctiveNumber", label: "Ops_DistinctiveNumber"},
    {value: "Ops_WorkStatus", label: "Ops_WorkStatus"},
    {value: "Ops_CaseType", label: "Ops_CaseType"},
    {value: "Ops_Stages", label: "Ops_Stages"},
    {value: "Ops_DividendCredited", label: "Ops_DividendCredited"},
    {value: "Ops_SharesCredited", label: "Ops_SharesCredited"},
    {value: "Ops_InvoiceIssued", label: "Ops_InvoiceIssued"},
    {value: "Ops_PaymentReceived", label: "Ops_PaymentReceived"},
    {value: "Ops_Comment", label: "Ops_Comment"},


    // {value: "Adv_Advance_Status", label: "Adv_Advance_Status"},
    // {value: "Adv_Index_Number", label: "Adv_Index_Number"},
    // {value: "Adv_New_Address", label: "Adv_New_Address"},
    // {value: "Assign_To_Ops", label: "Assign_To_Ops"},
    // {value: "BD_Status_Value", label: "BD_Status_Value"},
    // {value: "BD_Templete_View", label: "BD_Templete_View"},
    // {value: "Consolidated_Address", label: "Consolidated_Address"},
    // {value: "ContactDetails", label: "ContactDetails"},
    // {value: "Curier_Status", label: "Curier_Status"},
    // {value: "Date_of_Transfer", label: "Date_of_Transfer"},
    // {value: "Fees", label: "Fees"},
    // {value: "Investment_Type", label: "Investment_Type"},
    // {value: "KYC_Compliance", label:"KYC_Compliance"},
    // {value: "Ops_DividendCreditedOn", label: "Ops_DividendCreditedOn"},
    // {value: "Ops_InvoiceIssuedOn", label: "Ops_InvoiceIssuedOn"},
    // {value: "Ops_PaymentReceivedOn", label: "Ops_PaymentReceivedOn"},
    // {value: "Ops_SharesCreditedOn", label: "Ops_SharesCreditedOn"},
    // {value: "Region", label: "Region"},
    // {value: "Remarks", label: "Remarks"},
    // {value: "Serial_Number", label: "Serial_Number"},
    // {value: "Sheet_No", label: "Sheet_No"},
    // {value: "Suspense", label: "Suspense"},
    // {value: "TeamMember_Assigned", label: "TeamMember_Assigned"},
    // {value: "TeamMember_Assigned_ID", label: "TeamMember_Assigned_ID"},
    // {value: "Team_Assigned", label: "Team_Assigned"},
    // {value: "Team_Assigned_ID", label: "Team_Assigned_ID"},
    // {value: "Tel_Joint_Holder_Name", label: "Tel_Joint_Holder_Name"},
    // {value: "Tel_No_Of_Certificate", label: "Tel_No_Of_Certificate"},
    // {value: "Tel_Nominee_Name", label: "Tel_Nominee_Name"},
    // {value: "TraceLetter_Comment", label: "TraceLetter_Comment"},
    // {value: "User_ID", label: "User_ID"},
    // {value: "Village_Name", label: "Village_Name"},
    // {value: "dataDropdown", label: "dataDropdown"},
    // {value: "ec", label: "ec"}
]
);

const [filters, setFilters] = useState([]);





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
  
  const handlesinglesearch = async()=>{
    console.log("rutikkkkkkk",singlesrchfilter,singlesrchtxt);
    let errror = 0 ;
     if (singlesrchtxt == "") {
      setsinglesrchtxterr("Required")
      errror=errror+1;
     } else {
      setsinglesrchtxterr("");
     }
     if (singlesrchfilter == "") {
      setsinglesrchfiltererr("Required")
      errror=errror+1;
     } else {
      setsinglesrchfiltererr("");
     }
     if (errror>0) {
      return false
     }

     await fetch(Environment.BASE_URL +'/SingleSearch',{
         method:'POST',
         headers:{
          'Content-Type':'application/json'
         } ,
         body:JSON.stringify({
           search:singlesrchtxt,
           searchtext:singlesrchfilter
         }),
    }).then(response=>response.json())
    .then(async(result)=>{
      console.log("singlesearchresult_______",result);
      if (!result.isException) {
        setDashboardData(result.result)
      }
    });
  }
  

const addFilter = () => {
  setFilters([...filters, { DropdownId: '', TextId: '' }]);
};

const updateFilter = (index, value) => {
  const newFilters = [...filters];
  newFilters[index].DropdownId = value;
  setFilters(newFilters);
  console.log(filters);
};

const updateSearchText = (index, text) => {
  const newFilters = [...filters];
  newFilters[index].TextId = text;
  setFilters(newFilters);
};

const handlemultiplesearch = async()=>{
  console.log("rutik bhau ky challay_____",filters)
  if (filters.length == 0) {
    alert("please select a filter and fill the information ");
    return false;
  }
  await fetch(Environment.BASE_URL+'/MultipleSearch',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(filters),
  }).then(response=>response.json())
    .then(async(result)=>{
      console.log("multiplesearchresponse_________",result);
      if (!result.isException) {
        setDashboardData(result.result);
        setmultiplesearchmodal(false);
      }
    } )
}
 
const handledelete = async()=>{
  setFilters([]);
}
const handleclearall = async()=>{
  
  await fetchDashboardData();

}

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

    <View style={styles.tableRow} key={key}>
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
          style={{color:'gray',width:'50%',borderColor:'black',borderWidth:1,height:40,borderRadius:5,backgroundColor:'white',padding:5,marginRight:5,marginLeft:0}}
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
          value={singlesrchfilter}
         
          onChange={item => {
           setsinglesrchfilter(item.value);
          }}
         
        />
        {/* {singlesrchfiltererr ?
      <Text style={styles.errorText} onPress={() => navigation.navigate('Forgot Password')}>
        {singlesrchfiltererr}
      </Text>:null
      } */}
          <TextInput
              style={{borderColor:'black',width:'45%',color:'gray',backgroundColor:'white',borderRadius:5,height:35,padding:3,}}
              placeholder="Enter Text"
              placeholderTextColor={"gray"}
              value={singlesrchtxt}
              onChangeText={(text)=>{setsinglesrchtxt(text)}}
              // editable={false}
              pointerEvents="none"
            />
         {/* {singlesrchtxterr ?
      <Text style={styles.errorText} onPress={() => navigation.navigate('Forgot Password')}>
        {singlesrchtxterr}
      </Text>:null
      } */}
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
        <TouchableOpacity  onPress={handlesinglesearch} style={[styles.searchButtonText,{flexDirection:'row',paddingTop:7}]}>
            <Text style={{fontWeight:'bold',color:'white',fontSize:17}}>Search</Text>
            <Icon name="search" size={20} color="#000"
              style={{marginLeft:10,marginTop:3,color:'white'}}
            />
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} onPress={()=>{setmultiplesearchmodal(true)}} >
      <Text style={styles.buttonText}>Multiple Search</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleclearall} style={styles.button}>
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.paginationRow}>
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
      </View> */}
      <View style ={{height:40,marginBottom:10}}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Company Name"
          value={searchQuery}
          onChangeText={handleSearch}
        />
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
         <Modal
        isVisible={multiplesearchmodal}
        onBackdropPress={() => setmultiplesearchmodal(false)}
        onBackButtonPress={() => setmultiplesearchmodal(false)}
        onSwipeComplete={() => setmultiplesearchmodal(false)}
        backdropOpacity={0.5}
      >
        <View style={{ height: 'auto', width: "150%", position: 'absolute', top: 50 }}>
          <View style={{ backgroundColor: Appearance.getColorScheme() === 'dark' ? "gray" : 'white', height: 'auto', width: "70%", borderRadius: 10, padding: 10, justifyContent: 'flex-start' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '50%',flexDirection:'row', height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                onPress={addFilter}
              >
                 <Text style={{fontWeight:'bold',color:'white',fontSize:17}}>Select Filter</Text>
                 <Icon name="plus" size={20} color="#000"
              style={{marginLeft:10,marginTop:3,color:'white'}}
            />
              </TouchableOpacity>
              {filters.map((filter, index) => (
                <View key={index} style={{ width: '100%', flexDirection: 'row', marginTop: 5 }}>
                  <Dropdown
                    style={{ width: '50%', color: 'gray', borderColor: 'black', borderWidth: 1, height: 40, borderRadius: 5, backgroundColor: 'white', padding: 5, marginRight: 5 }}
                    placeholderStyle={{ color: 'gray' }}
                    selectedTextStyle={{ color: 'gray' }}
                    inputSearchStyle={{ color: 'gray' }}
                    itemTextStyle={{ color: 'gray' }}
                    data={filterarr}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select"
                    searchPlaceholder="Search..."
                    value={filter.filter}
                    // key={`dropdown-${index}`}
                    onChange={(item) =>{ updateFilter(index, item.value)}}
                    
                  />
                  <View style={{ width: '50%' }}>
                    <TextInput
                      style={{ borderColor: 'black', borderWidth: 1, color: 'gray', backgroundColor: 'white', borderRadius: 5, height: 40, padding: 3, width: "100%" }}
                      placeholder="Enter Text"
                      placeholderTextColor={"gray"}
                      value={filter.searchText}
                      onChangeText={text => updateSearchText(index, text)}
                    />
                  </View>
                </View>
              ))}
              <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
              <TouchableOpacity
              onPress={handlemultiplesearch}
                style={{ width: '40%',flexDirection:'row', height: 40, backgroundColor: 'green', marginTop: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              >
               <Text style={{fontWeight:'bold',color:'white',fontSize:17}}>  Search</Text>
               <Icon name="search" size={20} color="#000"
              style={{marginLeft:10,marginTop:3,color:'white'}}
            />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={handledelete}
                style={{ width: '40%',flexDirection:'row', height: 40, backgroundColor: 'red', marginTop: 10,marginLeft:10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              >
                <Text style={{fontWeight:'bold',color:'white',fontSize:17}}> Delete</Text>
                <Icon name="trash" size={20} color="#000"
              style={{marginLeft:10,marginTop:3,color:'white'}}
            />
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    width: "100%",
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
    backgroundColor: '#162732',height:40,
    width:"50%",borderRadius:5,justifyContent:'center',textAlign:'center'
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
  errorText: {
    width: '90%',
    paddingHorizontal: 5,
    marginTop:5,
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
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
