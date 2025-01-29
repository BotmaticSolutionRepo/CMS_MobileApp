import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Appearance, AppRegistry, useColorScheme, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { CircularProgress } from 'react-native-svg-circular-progress';
import { RadioButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Home = ({ route }) => {
//   const { UserName } = route;
const [UserName, setUserName] = useState(route);

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
  console.log('usernameeeeeeeee', UserName)
  const handleprofile = () => {
    navigation.navigate('Profile', { UserName: UserName });

  };
  return (
    <View style={styles.container}>
    
      <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
        {/* <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Company name"
            editable={false}
            placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'}

          />
          <Icon name="chevron-down" size={24} style={styles.searchIcon} />
        </View> */}

        <TouchableOpacity style={styles.fileProgressContainer}
          onPress={() => {
            navigation.navigate('FileProgress')
          }}
        >
          <Text style={styles.fileProgressText}>File Progress</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: '#007BFF' , fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton.Android
              color="#0077F5"
              status="checked"
            />
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: Appearance.getColorScheme() == 'dark' ? 'white' : 'black' }}>75% Completed</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <RadioButton.Android
              color="gray"
              status="checked"
            />
            <Text style={{ fontWeight: 'bold', fontSize: 12, color: Appearance.getColorScheme() == 'dark' ? 'white' : 'black' }}>25% Incompleted</Text>
          </View>
        </View >
        <View style={{ borderBottomWidth: 0.3,color:'gray' }}>
 
        </View>



        <View style={styles.reportContainer}>
          <View style={styles.rowContainer}>
            {/* First Box */}
            <View style={styles.reportBox}>
             
                <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
                <View 
                // style={styles.boxImageContainer}
                >
                  <Image
                    source={require('../../Images/cms.png')}
                    style={styles.boxImage}
                  />
                </View>
                <Icon name="bell" onPress={() => {
                navigation.navigate('SectionNotification')
              }} size={25} color="#FFCF23" style={{marginLeft:80,marginTop:5}} />

                </View>
                <TouchableOpacity onPress={() => {
                navigation.navigate('Documents')
              }}>
                <View style={styles.messageContainer}>
                  {/* <Icon name="envelope" size={20} color="black" style={styles.messageIcon} /> */}
                  {/* <Text style={styles.messageText}>5 messages</Text> */}
                </View>
                <Text style={{ marginBottom: 10, marginTop:30 , marginLeft: 20, fontSize: 16, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold' }}>Documents</Text>
                {/* <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.progressBar,{width:'51%'}]}>
                    <View style={[styles.progress, { width: '49%' }]}></View>
                  </View>

                  <Text style={{ height: 20, marginLeft: 20, marginRight: 10, marginTop: 0, fontSize: 15 ,color:'gray'}}>49%</Text>
                </View> */}
              </TouchableOpacity>
            </View>

            {/* Second Box */}

            <View style={styles.reportBox}>
             
             <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
             <View 
             // style={styles.boxImageContainer}
             >
               <Image
                 source={require('../../Images/cms.png')}
                 style={styles.boxImage}
               />
             </View>
             <Icon name="bell"  onPress={() => {
                navigation.navigate('SectionNotification')
              }} size={25} color="#FFCF23" style={{marginLeft:80,marginTop:5}} />

             </View>
             <TouchableOpacity onPress={() => {
             navigation.navigate('MyInvestment')
           }}>
             <View style={styles.messageContainer}>
               {/* <Icon name="envelope" size={20} color="black" style={styles.messageIcon} /> */}
               {/* <Text style={styles.messageText}>5 messages</Text> */}
             </View>
             <Text style={{ marginBottom: 10, marginTop:30 , marginLeft: 20, fontSize: 16, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold' }}>My Investment</Text>
             {/* <View style={{ flexDirection: 'row' }}>
               <View style={[styles.progressBar,{width:'51%'}]}>
                 <View style={[styles.progress, { width: '60%' }]}></View>
               </View>

               <Text style={{ height: 20, marginLeft: 20, marginRight: 10, marginTop: 0, fontSize: 15,color:'gray' }}>60%</Text>
             </View> */}
           </TouchableOpacity>
         </View>
           
          </View>

          <View style={styles.rowContainer}>
            {/* First Box */}
            <View style={styles.reportBox}>
             
                <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
                <View 
                // style={styles.boxImageContainer}
                >
                  <Image
                    source={require('../../Images/cms.png')}
                    style={styles.boxImage}
                  />
                </View>
                <Icon name="bell"  onPress={() => {
                navigation.navigate('SectionNotification')
              }}  size={25} color="#FFCF23" style={{marginLeft:80,marginTop:5}} />

                </View>
                <TouchableOpacity onPress={() => {
                navigation.navigate('WeeklyProgress')
              }}>
                <View style={styles.messageContainer}>
                  {/* <Icon name="envelope" size={20} color="black" style={styles.messageIcon} /> */}
                  {/* <Text style={styles.messageText}>5 messages</Text> */}
                </View>
                <Text style={{ marginBottom: 10, marginTop:30 , marginLeft: 20, fontSize: 16, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold' }}>Operational Team</Text>
                {/* <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.progressBar,{width:'51%'}]}>
                    <View style={[styles.progress, { width: '79%' }]}></View>
                  </View>

                  <Text style={{ height: 20, marginLeft: 20, marginRight: 10, marginTop: 0, fontSize: 15,color:'gray' }}>79%</Text>
                </View> */}
              </TouchableOpacity>
            </View>

            {/* Second Box */}

            <View style={styles.reportBox}>
             
             <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
             <View 
             // style={styles.boxImageContainer}
             >
               <Image
                 source={require('../../Images/cms.png')}
                 style={styles.boxImage}
               />
             </View>
             <Icon name="bell"  onPress={() => {
                navigation.navigate('SectionNotification')
              }}  size={25} color="#FFCF23" style={{marginLeft:80,marginTop:5}} />

             </View>
             <TouchableOpacity onPress={() => {
             navigation.navigate('ClosedFiles')
           }}>
             <View style={styles.messageContainer}>
               {/* <Icon name="envelope" size={20} color="black" style={styles.messageIcon} /> */}
               {/* <Text style={styles.messageText}>5 messages</Text> */}
             </View>
             <Text style={{ marginBottom: 10, marginTop:30 , marginLeft: 20, fontSize: 16, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold' }}>Closed Files</Text>
             {/* <View style={{ flexDirection: 'row' }}>
               <View style={[styles.progressBar,{width:'51%'}]}>
                 <View style={[styles.progress, { width: '87%' }]}></View>
               </View>

               <Text style={{ height: 20, marginLeft: 20, marginRight: 10, marginTop: 0, fontSize: 15 ,color:'gray'}}>87%</Text>
             </View> */}
           </TouchableOpacity>
         </View>
           
          </View>
          
         
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%',
    paddingHorizontal: 0,
    paddingTop: Platform.OS == 'ios' ? 50 : 10,
    marginBottom:20,
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
    marginTop: 0,
    marginBottom: 20, padding: 5,
    borderColor:'gray',
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
    marginTop:10,marginBottom:10,
  },
  reportBox: {
    width: '48%',
    height: '100%',
    backgroundColor: Appearance.getColorScheme() == 'dark' ? '#383636' : '#E4F1FF',
    //backgroundColor: '#E4F1FF',
    borderRadius: 10,
    elevation: 5, // for Android
    shadowColor:  Appearance.getColorScheme() == 'dark' ? '#4bbbf2':'#000', // for iOS
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.67,
    shadowRadius: 3.84,
    marginBottom: 10,
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
    marginTop: 5,
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

export default Home;
