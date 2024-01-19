import { StyleSheet, Text, View ,TouchableOpacity ,Appearance} from 'react-native'
import React ,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { DefaultStyle } from '../styles/base';
import { useNavigation } from '@react-navigation/native';


const ForgotPassword = () => {
    const navigation = useNavigation();

    const [mobno, setmobno] = useState('');
  const [sendlink, setsendlink] = useState('');

  const handlesendlink = () => {
    // Navigate to the 'Profile' screen
    navigation.navigate('Profile');
  };


  return (
   <View style={styles.container}>
     <View style={{width:"90%",marginLeft:20,}}>
      <Text style={styles.title}>Enter your email or mobile number and we’ll send a link on your email to reset your password. </Text>

      <View style={{marginTop:10}}> 
      <TextInput
        style={styles.inputbox}
        placeholder="Username or Email"
        placeholderTextColor='black'
        value={mobno}
        onChangeText={text => setmobno(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handlesendlink}>
        <Text style={styles.loginButtonText}>send link</Text>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row',marginTop:10,textAlign:'center',marginLeft:"20%"}}>
      <Text style={styles.buttonText}>  If you didn’t recieve link, </Text>
      <Text style={[styles.buttonText,{color:'blue'}]} onPress={()=>{ navigation.navigate('ChangePassword')}}>Resend</Text>
      </View>
      </View>
     </View>
   </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:Appearance.getColorScheme()=="dark" ?"black" :'#ffffff'
  },
 title:{
  marginLeft:10,marginTop:30,fontSize:15,color:'gray'
  // color:Appearance.getColorScheme()=="dark"?"gray":"black"
 },

  loginButton: {
    backgroundColor: '#007BFF',
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom:30,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',

  },
 
  inputbox: {
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding:10,
    marginTop:10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: Appearance.getColorScheme()=='dark'?null:'#cde5fe',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonText:{
    color:Appearance.getColorScheme()=="dark"?"white":"black",
    fontWeight:'bold',
    justifyContent:'center',
    
    },
})