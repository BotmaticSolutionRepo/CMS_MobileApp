import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Appearance, AppRegistry, useColorScheme, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircularProgress } from 'react-native-svg-circular-progress';
import { RadioButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const FileProgress = ({ route }) => {
//   const { UserName } = route.params;
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
//   console.log('usernameeeeeeeee', UserName)
  const handleprofile = () => {
    navigation.navigate('Profile', { UserName: UserName });

  };
  return (
    <View style={styles.container}>
      

      <Text style={styles.fileProgressText}>File Progress</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Company name"
            editable={false}
            placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'}

          />
          <Icon name="chevron-down" size={24} style={styles.searchIcon} />
        </View> */}

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.fileProgressContainer}
        // onPress={() => {
        //   navigation.navigate('WeeklyProgressTwo')}}
        >
        <Text style={styles.fileProgressText}>TATA</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fileProgressContainer,{marginLeft:20}]}
        // onPress={() => {
        //   navigation.navigate('WeeklyProgressTwo')}}
        >
        <Text style={styles.fileProgressText}>Birla</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}
              donutColor="brown"

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.fileProgressContainer}
        // onPress={() => {
        //   navigation.navigate('WeeklyProgressTwo')}}
        >
        <Text style={styles.fileProgressText}>Airtel</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}
              donutColor="purple"

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fileProgressContainer,{marginLeft:20}]}
        // onPress={() => {
        //   navigation.navigate('WeeklyProgressTwo')}}
        >
        <Text style={styles.fileProgressText}>Jio</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}
              donutColor="orange"

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.fileProgressContainer}
        // onPress={() => {
        //   navigation.navigate('WeeklyProgressTwo')}}
        >
        <Text style={styles.fileProgressText}>Reliance</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}
              donutColor="red"

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fileProgressContainer,{marginLeft:20}]}
        // onPress={() => {
        //   navigation.navigate('WeeklyProgressTwo')}}
        >
        <Text style={styles.fileProgressText}>DELL</Text>
          {/* Circular Progress Bar */}
          <View style={styles.circularProgressBarContainer}>
            <CircularProgress
              size={150} // Decrease width of the circle
              width={10} // Decrease width of the progress line
              progressWidth={58}
              percentage={75}
            //   tintColor="green"
              donutColor="green"

            />
            <Text style={styles.circularProgressText}>75%</Text>
            <Text style={{ position: 'absolute', top: 74, fontSize: 13, color: Appearance.getColorScheme() == 'dark' ? '#FFFFFF' : 'black', fontWeight: 'bold', }}>Your Progress</Text>
          </View>
        </TouchableOpacity>
            </View>

            

       
        <View style={{ borderBottomWidth: 0.3 }}>

        </View>



      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS == 'ios' ? 50 : 10,
    backgroundColor: Appearance.getColorScheme() == "dark" ? "black" : '#ffffff'

  },
  header: {
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
    padding: 10,
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
    marginTop:20,
    marginBottom: 20,padding:5,
    borderWidth:0.5,borderRadius:10,
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
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 10,
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

export default FileProgress;
