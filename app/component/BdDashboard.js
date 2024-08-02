import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,SafeAreaView, TextInput, Image,Alert, Modal, FlatList, Appearance, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultStyle } from '../styles/base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';

var Environment = require('../../environment.js');

const BdDashboard = ({ route }) => {
  const { UserName } = route.params;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [ProfilemodalVisible, setProfilemodalVisible] = useState(false);
  const [isSpinnerVisible, setisSpinnerVisible] = useState(true);
  const [selectedValue, setSelectedValue] = useState('10');
  const [AssignFiles, setAssignFiles] = useState([]);
  const [notification, setNotification] = useState([]);
  const [bdStatusCounts, setBdStatusCounts] = useState([]);
  const [assignedBySearchQuery, setAssignedBySearchQuery] = useState('');
  const [File, setFile] = useState(null);
  const [Userpfrofile, setUserpfrofile] = useState('');



  const fetchDashboardData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      let imgggg = await AsyncStorage.getItem('ProfilePath');
      console.log("ruttiiiii",imgggg);
      if (imgggg!="null") {
        let rutik = Environment.BASE_URL+imgggg;
        console.log("satiiiii____",rutik);
        setUserpfrofile(rutik);
      }

      fetch(Environment.BASE_URL + "/GetDashboardDetails", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token
        }),
      })
        .then(response => response.json())
        .then(async (data) => {
          // Handle the response from the login API
          console.log('GetDashboardDetails............:', data);
          console.log('GetDashboardDetailssssssssssssssssssssssssssss............:', data.result.bdStatusCounts);

          if (!data.isException) {
            setAssignFiles(data.result.AssignedFiles);
            setNotification(data.result.notifications)
            setBdStatusCounts(data.result.bdStatusCounts)
            setisSpinnerVisible(false);
          }
        })
        .catch(error => {
          console.error('Error during login:', error);
        });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

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

  const filteredAssignFiles = AssignFiles.filter(item =>
    item.updated_by.toLowerCase().includes(assignedBySearchQuery.toLowerCase())
  );

  const chooseFile = async () => {
    console.log("rutikkkkkkkk")
    try {
      let result = await launchImageLibrary({saveToPhotos: true, maxWidth:1280, maxHeight:800, quality:0.8});
    console.log("launchImageLibrary_result================",result?.assets);

    if(result.assets) {
      let obj = result.assets[0];
      let {fileName: fileName,fileSize: size,type,uri} = obj;
      let fileObj = [{fileName,size,type,uri}];
      setFile(obj);
    }

      setProfilemodalVisible(false);
      console.log('File selected:', File);
      if (File) {
        ChangeProfile();
      }

    } catch (err) {
     
        console.error('Error choosing file:', err);
      
    }
  };

  const RemoveProfile = async () => {
    
    // if (!file) {
    //   console.error('No file selected.');
    //   return;
    // }

    // if (!documentType) {
    //   console.error('No document type selected.');
    //   return;
    // }
    setisSpinnerVisible(true);
    const token = await AsyncStorage.getItem('token');

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify({
        token:token,
      }),
    };
    // console.log("datasendtoRemoveProfile______",body);

    await fetch(Environment.BASE_URL + '/RemoveProfile', requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(
          'RemoveProfileResponse==================================------',
          result,
        );
//        setFile(null);
     //   setdocumentType("")
        if (result.isException) {
          Alert.alert(result.result);
        } else {
          Alert.alert(
            (('Success')),
            (`${result.result}`),
            // [
            //   // { text: (t('Cancel')), style: 'cancel' },
            //   { text: (('OK')), onPress : () => {
            //      setisSpinnerVisible(true);
            //     fetchFileData();} 
            //   },
            // ],
            // { cancelable: false }
          );
          await AsyncStorage.setItem('ProfilePath',"null");
          setUserpfrofile('');
          fetchDashboardData();
        }
       
      });


  };

  const ChangeProfile = async () => {
    // if (!file) {
    //   console.error('No file selected.');
    //   return;
    // }

    // if (!documentType) {
    //   console.error('No document type selected.');
    //   return;
    // }
    // setisSpinnerVisible(true);
    console.log("datasendtoChangeProfile______");

    let body = new FormData();
    body.append('Img', {
      name: File.fileName,
      type: `image/jpeg`,
      uri: File.uri,
    });
    // body.append(
    //   'jq data',
    //   JSON.stringify({
    //     Document_Description: "",
    //     FileID: Fileiddd,
    //     Document_Type: documentType
    //   }));
    const requestOptions = {
      method: 'POST',
      headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'multipart/form-data',
      },
      body: body,
    };
    console.log("datasendtoChangeProfile______",body);

    await fetch(Environment.BASE_URL + '/ChangeProfile', requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(
          'ChangeProfileResponse==================================------',
          result,
        );
//        setFile(null);
     //   setdocumentType("")
        if (result.isException) {
          Alert.alert(result.result);
        } else {
          Alert.alert(
            (('Success')),
            (`${result.result}`),
            // [
            //   // { text: (t('Cancel')), style: 'cancel' },
            //   { text: (('OK')), onPress : () => {
            //      setisSpinnerVisible(true);
            //     fetchFileData();} 
            //   },
            // ],
            // { cancelable: false }
          );
        }
       
      });


  };

  const LogOut = () => {
    setProfilemodalVisible(false);
    navigation.navigate('Login');

  };

  const handleprofile = () => {
    navigation.navigate('PersonalInformation');

  };


  return (
    <SafeAreaView style={styles.container}>
        <Spinner
        visible={isSpinnerVisible}
        textContent={('Loading')}
        textStyle={styles.spinnerTextStyle}
        color="#EF6A32"
      // customIndicator={<Image style={styles.logoImage} source={require('../../app/Images/Group111.png')} />}
      />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../Images/cms.png')}
        />
        <Text style={styles.appName}>Claim My Shares</Text>
        <View style={styles.headerRight}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="notifications" size={28} color="#ffffff" style={styles.icon} onPress={() => navigation.navigate('Notification', { notification: notification })} />
           <View style={{backgroundColor: 'red', borderRadius: 7,  width: 15, height: 15, marginRight: 10, justifyContent: 'center', alignItems: 'center', marginLeft: -18, marginTop: -5 }}>
            <Text style={{ color: "white",fontSize: 9, }}>{notification.length}</Text>

           </View>

          </View>
          <Text style={styles.username}>{UserName}</Text>
          <TouchableOpacity style={{marginLeft:10}} onPress={() => setProfilemodalVisible(true)}  >
           { Userpfrofile ? 
           <Image
             // source={require('../Images/cms.png')}
             source={ Userpfrofile ? { uri: Userpfrofile }:require('../Images/cms.png')}
             style={styles.profileImage}
           />:
           <Icon name="person-circle-outline" size={30} color="#000"
           style={{marginLeft:5,}}
         />
           
          }
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15, height: 160 }}>
       
        <TouchableOpacity 
           onPress={() => navigation.navigate('BdSearch')}
        style={[styles.buttonsContainer, { marginLeft: 20 }]}>
          <TouchableOpacity style={[styles.button, styles.searchButton]}
            onPress={() => navigation.navigate('BdSearch')}>
            <Text style={styles.buttonText}>All Files</Text>
            <Icon name="search-outline" size={50} color="#fff" />
          </TouchableOpacity>
          <View style={{height:30,width:80,borderRadius:7,marginTop:10,justifyContent:'center',backgroundColor:'lightblue' , flexDirection:'row'}}>
            <Text style={{marginLeft:5,marginTop:5,fontSize:15}}>Search</Text>
            <Icon name="arrow-forward-outline" size={13} style={{marginTop:7}} color="#000" />

          </View>
        </TouchableOpacity>
        

        <TouchableOpacity 
         onPress={() => navigation.navigate('BdFilesReport', { bdStatusCounts: bdStatusCounts })}
        style={[styles.buttonsContainer, { marginLeft: 20 }]} 
        >
          <TouchableOpacity
            style={[styles.button, styles.reportsButton]}
            onPress={() => navigation.navigate('BdFilesReport', { bdStatusCounts: bdStatusCounts })}
          >
            <Text style={styles.buttonText}>Reports</Text>
            <Icon name="document-outline" size={50} color="#fff" />
          </TouchableOpacity>
          <View style={{height:30,width:80,borderRadius:7,marginTop:10,justifyContent:'center',backgroundColor:'lightblue' , flexDirection:'row'}}>
            <Text style={{marginLeft:5,marginTop:5,fontSize:15}}>Reports</Text>
            <Icon name="arrow-forward-outline" size={13} style={{marginTop:7}} color="#000" />

          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Assigned Files</Text>
      </View>
      <View style={{ width: '90%', flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.entriesPerPageContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.entriesPerPageText}>{selectedValue}</Text>
          <Icon name="chevron-down-outline" size={20} color="#000" style={styles.icon} />
        </TouchableOpacity>
        {/* <Text style={styles.entriesPerPageLabel}> entries per page</Text> */}
        <TextInput
          style={styles.inputBox}
          placeholder="Search "
          placeholderTextColor="#000000"
          value={assignedBySearchQuery}
          onChangeText={(text) => setAssignedBySearchQuery(text)}
          
        />
         <Icon name="search-outline" size={20} color="#000000" style={{marginLeft:-25,marginTop:25}}/>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            <Text style={[styles.columnHeader, styles.borderRight]}>S.No</Text>
            <Text style={[styles.columnHeader, styles.borderRight]}>Assigned By</Text>
            <Text style={styles.columnHeader}>BD Status</Text>
          </View>
          {filteredAssignFiles.map((item, index) => (
            <TouchableOpacity key={index}  onPress={() => navigation.navigate('AddFile', { fileId: item.File_ID,})} style={styles.tableRow}>

              <Text style={[styles.tableCell, styles.borderRight]}>{index + 1}</Text>
              <Text style={[styles.tableCell, styles.borderRight]}>{item.updated_by}</Text>
              <Text style={styles.tableCell}>{item.BD_Status_String}</Text>
            </TouchableOpacity>
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

      <Modal
        transparent={true}
        visible={ProfilemodalVisible}
        animationType="fade"
        onRequestClose={() => setProfilemodalVisible(false)}
      >
        <View style={[styles.modalBackground, { justifyContent: 'flex-start', alignItems: 'flex-end', padding: 10 , marginTop:Platform.OS=='ios'?43:0 }]}>
          <View style={{ backgroundColor: Appearance.getColorScheme()=='dark'?"gray":'white', height: 300, width: "70%", borderRadius: 10, padding: 10, justifyContent: 'flex-start', }}>
            <View style={{ alignItems: 'center' }}>
            {Userpfrofile ? 
              <Image
              source={ Userpfrofile ? { uri: Userpfrofile }:require('../Images/cms.png')}
              style={[styles.profileImageModal,{resizeMode:'contain'}]}
              />:
              <Icon name="person-circle-outline" size={50} color="#000"
              style={{marginLeft:10,marginTop:20,color:'gray'}}
            />
            }
              <Text style={{ fontWeight: 'bold', fontSize: 18 ,marginTop:5}}>{UserName}</Text>
            </View>
            <View style={{ marginTop: 20, borderBottomWidth: 1, borderColor: 'red', width: '100%', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ color: 'green', fontSize: 16, marginBottom: 5 }}>Business Developement</Text>
            </View>
            <View style={{ alignItems: 'flex-start' }}>
              <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, height: 30, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={chooseFile} style={{width:'100%',flexDirection:'row'}}>
                <Icon name="image-outline" size={20} color="#000"
                  style={styles.icon}
                />
                <Text style={{ marginLeft: 10 }}>
                  Change Profile Image
                </Text>

                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, height: 30, justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={RemoveProfile} style={{width:'100%',flexDirection:'row'}}>

                <Icon name="trash" size={20} color="#000"
                  style={styles.icon}
                />
                <Text style={{ marginLeft: 10 }}>
                  Remove Image
                </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, height: 30, justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={LogOut} style={{width:'100%',flexDirection:'row'}}>

                <Icon name="power-outline" size={20} color="#000"
                  style={styles.icon}
                />
                <Text style={{ marginLeft: 10 }}>
                  Log Out
                </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appearance.getColorScheme()=='dark'?"black":'#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor:Appearance.getColorScheme()=='dark'?"gray": '#162732',
  },
  logo: {
    width: 30,
    height: 30,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'white'
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
    fontSize: 14,color:'white'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor:'black'
  },
  profileImageModal: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonsContainer: {
    // flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    elevation: 0.12,
    width: '40%',
    borderWidth: 0.2,
    borderRadius: 5,
    paddingBottom:15,
    borderColor:Appearance.getColorScheme()=='dark'?'white':'black',
    shadowColor: Appearance.getColorScheme()=='dark'?"gray":'lightblue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 110,
    borderRadius: 10,
    elevation: 3,
    margin: 5,
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
    backgroundColor: Appearance.getColorScheme()=='dark'?"gray":'#fff',
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
    backgroundColor: Appearance.getColorScheme()=='dark'?"gray":'#fff',
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 10,
    width: '20%'
  },
  entriesPerPageText: {
    fontSize: 16,
  },
  entriesPerPageLabel: {
    fontSize: 15,
    color: '#777',
    marginTop: 20,
  },
  inputBox: {
    width: "45%",
    borderRadius: DefaultStyle.UNIT / 2,
    paddingHorizontal: DefaultStyle.PADDING / 2,
    fontSize: 13,
    marginVertical: DefaultStyle.MARGIN / 4,
    color: '#000000',
    backgroundColor: Appearance.getColorScheme()=='dark'?"gray":'#f5f5f5',
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 0.2,
    borderColor: '#ddd',
    elevation: 10,
    //borderColor:'lightblue',
    height: DefaultStyle.DEVICE_HEIGHT / 18,
  },
  scrollView: {
    margin: 10,
  },
  table: {
    backgroundColor:Appearance.getColorScheme()=='dark'?"gray": '#fff',
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
    color: 'white',
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
