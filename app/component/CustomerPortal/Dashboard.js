import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Appearance, AppRegistry, useColorScheme, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from "./Home";

import { CircularProgress } from 'react-native-svg-circular-progress';
import { RadioButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Feed from './Feed';
import SupportTeam from './SupportTeam';
import PersonalDetails from '../PersonalDetails';
import Profile from '../Profile';
import Upload from './Upload';


const Dashboard = ({ route }) => {
  const { UserName } = route.params;
  const [Currentpage, setCurrentpage] = useState("home");
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  useEffect(() => {
    // fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(Environment.BASE_URL + '/GetDashboardDetails');
      const data = await response.json();
      setDashboardData(data);
      console.log('dashboarddata........', data);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };
  const handleprofile = () => {
    console.log('handleprofile_____', UserName)

    // navigation.navigate('Profile', { UserName:UserName });
    // navigation.navigate('Profile', { UserName }); 

    navigation.navigate('Profile', { UserName : "John Doe" });

    

  };


  return (
    <View style={styles.container}>
      {/* Header */}
{Currentpage != "user"?
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleprofile}>
            <Image
              source={require('/Users/apple/Desktop/dummy/ClaimMyShares/app/Images/cms.png')}
              style={styles.profileImage}
            /></TouchableOpacity>
          <View style={styles.profileText}>
            <Text style={styles.profileGreeting}>Hello,</Text>
            <Text style={styles.profileName}>{UserName}!</Text>
          </View>
        </View>

        <MaterialIcons name="notifications-active" size={30} color="#FFCF23" style={styles.notificationIcon}
          onPress={() => {
            navigation.navigate('Notification', {
              notification: [
                {
                  Notification_ID: '1',
                  Notification_Message: "File Completed...!",
                  Notification_Date_Time: '12-12-2024'

                },
                {
                  Notification_ID: '2',
                  Notification_Message: "Payment Pending ...!",
                  Notification_Date_Time: '12-12-2024'

                },
                {
                  Notification_ID: '3',
                  Notification_Message: "Complete Your KYC ...!",
                  Notification_Date_Time: '12-12-2024'

                },
                {
                  Notification_ID: '4',
                  Notification_Message: "Thank You Payment Done ...!",
                  Notification_Date_Time: '12-12-2024'

                },

              ]
            })
          }} />
      </View>:null}

      <View style={{ height: '85%', maxHeight: '86%',width:'100%' }} showsVerticalScrollIndicator={false}>
      {Currentpage == "home" ? (
 <Home UserName="John Doe" />
) : Currentpage == "feed" ?
<Feed/>: Currentpage == "upload" ?
<Upload/>:Currentpage == "support" ?
<SupportTeam/>:Currentpage == "user" ?
 <Profile  UserName={UserName} />
 :null}



      </View>
      <View style={{ height: '7%', flexDirection: 'row', justifyContent: 'space-between' ,position:'absolute',bottom:8,left:20,width:'100%',padding:5}}>
        <TouchableOpacity onPress={() => {
               setCurrentpage("home")
              }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Icon name="home" size={30} color={Currentpage == 'home' ? "#0079FB" : "gray"} style={styles.boxIcon} />
          <Text style={{ fontSize: 13, color: Currentpage == 'home' ? "#0079FB" : "gray" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
               setCurrentpage("feed")
              }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <MaterialIcons name="video-collection" size={30} color={Currentpage == 'feed' ? "#0079FB" : "gray"} style={styles.boxIcon} />
          <Text style={{ fontSize: 13, color: Currentpage == 'feed' ? "#0079FB" : "gray" }}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
               setCurrentpage("upload")
              }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <MaterialIcons name="add" size={35} color={Currentpage == 'upload' ? "#0079FB" : "gray"} style={[styles.boxIcon,{fontWeight:'bold'}]} />
          <Text style={{ fontSize: 13, color: Currentpage == 'upload' ? "#0079FB" : "gray" }}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
               setCurrentpage("support")
              }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <MaterialIcons name="headset-mic" size={30} color={Currentpage == 'support' ? "#0079FB" : "gray"} style={styles.boxIcon} />
          <Text style={{ fontSize: 13, color: Currentpage == 'support' ? "#0079FB" : "gray" }}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
               setCurrentpage("user")
              }} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Icon name="user" size={30} color={Currentpage == 'user' ? "#0079FB" : "gray"} style={styles.boxIcon} />
          <Text style={{ fontSize: 13, color: Currentpage == 'user' ? "#0079FB" : "gray" }}>Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%',
    paddingHorizontal: 20,
    paddingTop: Platform.OS == 'ios' ? 50 : 10,
    backgroundColor: Appearance.getColorScheme() == "dark" ? "black" : '#ffffff'

  },
  header: {
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileText: {
    marginLeft: 10,
  },
  profileGreeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Appearance.getColorScheme() == "dark" ? 'white' : 'black',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Appearance.getColorScheme() == "dark" ? 'white' : 'black',
  },
  notificationIcon: {
    padding: 0,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {
    padding: 10,
    color: Appearance.getColorScheme() == 'dark' ? 'white' : 'black',
  },
  fileProgressContainer: {
    marginTop: 20,
    marginBottom: 20, padding: 5,
    borderWidth: 0.5, borderRadius: 10,
    alignItems: 'center', // for Android
    shadowColor: 'gray', // for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fileProgressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Appearance.getColorScheme() == 'dark' ? 'white' : 'black',
    marginBottom: 10,
  },
  reportContainer: {
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reportBox: {
    width: '48%',
    height: 200,
    backgroundColor: Appearance.getColorScheme() == 'dark' ? '#383636' : '#E4F1FF',
    //backgroundColor: '#E4F1FF',
    borderRadius: 10,
    elevation: 5, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    position: 'relative',
  },
  boxImageContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  boxImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  boxIcon: {
    alignSelf: 'center',
    // marginLeft: 10,
    // marginVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  messageIcon: {
    marginLeft: 10,
    marginTop: 10,
  },
  messageText: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
    color: 'gray',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginLeft: 10,
    // marginRight: 30,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    height: '100%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000080',
    // marginLeft: 145,
    // marginBottom: 70,
  },
  circularProgressBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative', // Add relative positioning for absolute text
  },
  circularProgressText: {
    position: 'absolute',
    top: 55,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  completedText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

});

export default Dashboard;
