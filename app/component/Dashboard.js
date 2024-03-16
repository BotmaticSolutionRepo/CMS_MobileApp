import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,Image,Appearance, AppRegistry,useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircularProgress } from 'react-native-svg-circular-progress';
import { RadioButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// import App from '../../App';

// import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = () => {
  const navigation = useNavigation(); 
  const colorScheme = useColorScheme();
  const handleprofile = () =>{
    navigation.navigate('Profile');

  };
  return (
    <View style={styles.container}>
      {/* Header */}
     
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleprofile}>
          <Image
            source={require('../Images/cms.png')}
            style={styles.profileImage}
          /></TouchableOpacity>
          <View style={styles.profileText}>
            <Text style={styles.profileGreeting}>Hello,</Text>
            <Text style={styles.profileName}>Kishor!</Text>
          </View>
        </View>
        <Icon name="bell" size={24} color="#FFCF23" style={styles.notificationIcon} /> 
      </View>
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Company name"
          placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'}

        />
        <Icon name="chevron-down" size={24} color="black" style={styles.searchIcon} />
      </View>
      <Text style={styles.fileProgressText}>File Progress</Text>

      <View style={styles.fileProgressContainer}>
        {/* Circular Progress Bar */}
        <View style={styles.circularProgressBarContainer}>
          <CircularProgress
            size={150} // Decrease width of the circle
            width={10} // Decrease width of the progress line
            progressWidth = {58}
            percentage = {75}
            
            
          />
          <Text style={styles.circularProgressText}>75%</Text>
          <Text style={{ position:'absolute',top:74,fontSize: 13,color:Appearance.getColorScheme()=='dark'?'#FFFFFF':'black', fontWeight: 'bold', }}>Your Progress</Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'row'}}>
              <RadioButton.Android
                color="#0077F5"
                status="checked"
              />
              <Text style={{fontWeight:'bold',fontSize:12,color:Appearance.getColorScheme()=='dark'?'white':'black'}}>75% Completed</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:100}}>
              <RadioButton.Android
                color="white"
                status="checked"
              />
              <Text style={{fontWeight:'bold',fontSize:12,color:Appearance.getColorScheme()=='dark'?'white':'black'}}>25% Incompleted</Text>
            </View>
         </View > 
        <View style={{borderBottomWidth:0.3}}>

        </View>
       
      

      <View style={styles.reportContainer}>
        <View style={styles.rowContainer}>
          {/* First Box */}
          <View style={styles.reportBox}>
            <View style={styles.boxImageContainer}>
              <Image
                source={require('../Images/cms.png')}
                style={styles.boxImage}
              />
            </View>
            <Icon name="user" size={35} color="black" style={styles.boxIcon} />
            <View style={styles.messageContainer}>
              <Icon name="envelope" size={20} color="black" style={styles.messageIcon} />
              <Text style={styles.messageText}>5 messages</Text>
            </View>
            <Text style={{marginBottom:10,marginLeft:10,fontSize:16,color:Appearance.getColorScheme()=='dark'?'#FFFFFF':'black',fontWeight:'bold'}}>From You</Text>
            <View style={{flexDirection:'row'}}>
            <View style={styles.progressBar}>
              {/* Add progress bar with 70% */}
              <View style={[styles.progress, { width: '58%' }]}></View>
            </View>
            
            <Text style={ {height: 20, marginLeft: 20, marginRight: 10, marginTop: 25,fontSize:15}}>58%</Text>
            </View>
          </View>
          {/* Second Box */}
          <View style={styles.reportBox}>
            <View style={styles.boxImageContainer}>
              <Image
                source={require('../Images/cms.png')}
                style={styles.boxImage}
              />
            </View>
            <Icon name="user" size={35} color="black" style={styles.boxIcon} />
            <View style={styles.messageContainer}>
              <Icon name="envelope" size={20} color="black" style={styles.messageIcon} />
              <Text style={styles.messageText}>5 messages</Text>
            </View>
            <Text style={{marginBottom:10,marginLeft:10,fontSize:16,color:Appearance.getColorScheme()=='dark'?'#FFFFFF':'black',fontWeight:'bold'}}>From Legal</Text>
            <View style={{flexDirection:'row'}}>
            <View style={styles.progressBar}>
              {/* Add progress bar with 70% */}
              <View style={[styles.progress, { width: '58%' }]}></View>
            </View>
            
            <Text style={ {height: 20, marginLeft: 20, marginRight: 10, marginTop: 25,fontSize:15}}>58%</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowContainer}>
          {/* Third Box */}
          <View style={styles.reportBox}>
            <View style={styles.boxImageContainer}>
              <Image
                source={require('../Images/cms.png')}
                style={styles.boxImage}
              />
            </View>
            <Icon name="user" size={35} color="black" style={styles.boxIcon} />
            <View style={styles.messageContainer}>
              <Icon name="envelope" size={20} color="black" style={styles.messageIcon} />
              <Text style={styles.messageText}>5 messages</Text>
            </View>
            <Text style={{marginBottom:10,marginLeft:10,fontSize:16,color:Appearance.getColorScheme()=='dark'?'#FFFFFF':'black',fontWeight:'bold'}}>CMS Team</Text>
            <View style={{flexDirection:'row'}}>
            <View style={styles.progressBar}>
              {/* Add progress bar with 70% */}
              <View style={[styles.progress, { width: '58%' }]}></View>
            </View>
            
            <Text style={ {height: 20, marginLeft: 20, marginRight: 10, marginTop: 25,fontSize:15}}>58%</Text>
            </View>
          </View>
          {/* Fourth Box */}
          <View style={styles.reportBox}>
            <View style={styles.boxImageContainer}>
              <Image
                source={require('../Images/cms.png')}
                style={styles.boxImage}
              />
            </View>
            <Icon name="user" size={35} color="black" style={styles.boxIcon} />
            <View style={styles.messageContainer}>
              <Icon name="envelope" size={20} color="black" style={styles.messageIcon} />
              <Text style={styles.messageText}>5 messages</Text>
            </View>
            <Text style={{marginBottom:10,marginLeft:10,fontSize:16,color:Appearance.getColorScheme()=='dark'?'#FFFFFF':'black',fontWeight:'bold'}}>Company</Text>
           
            <View style={{flexDirection:'row'}}>
            <View style={styles.progressBar}>
              {/* Add progress bar with 70% */}
              <View style={[styles.progress, { width: '58%' }]}></View>
            </View>
            
            <Text style={ {height: 20, marginLeft: 20, marginRight: 10, marginTop: 25,fontSize:15}}>58%</Text>
            </View>
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
    paddingHorizontal: 20,
    paddingTop: Platform.OS=='ios'?50:10,
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
    color:Appearance.getColorScheme()=="dark"?'white':'black',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:Appearance.getColorScheme()=="dark"?'white':'black',
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
  },
  fileProgressContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  fileProgressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:Appearance.getColorScheme()=='dark'?'white':'black',
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
    backgroundColor:Appearance.getColorScheme()=='dark'?'#383636':'#E4F1FF',
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
    color:Appearance.getColorScheme()=='dark'?'#988C8C':'white',
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
    top:55,
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
