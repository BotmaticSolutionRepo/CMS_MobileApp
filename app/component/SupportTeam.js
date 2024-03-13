import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const SupportTeam = () => {
   
    const navigation = useNavigation();

    const handlechat = ()=>{
        navigation.navigate('SupportChat');
    
      }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="headset-mic" size={100} color="#007BFF" />
        <Text style={styles.helpText}>How can we help you?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.supportIcon}onPress={handlechat}>
          <MaterialIcons name="headset-mic" size={30} color="black" style={{marginRight: 15 }} />
          <Text style={styles.supportText}>Contact live chat</Text>
          <MaterialIcons name="chevron-right" size={30} color="blue" style={{ marginLeft: 30 }} />
        </TouchableOpacity>
        <View style={styles.mailContainer}>
          <MaterialIcons name="email" size={60} color="#CC8529" style={{marginBottom:10,}}/>
          <Text style={styles.mailText}>Send us an email:</Text>
          <Text style={{fontSize:19,fontWeight:'bold'}}>botmatic@solution.in</Text>
        </View>
        <View style={styles.contactContainer}>
          <MaterialIcons name="phone" size={60} color="#04B800" style={{marginBottom:10}} />
          <Text style={styles.mailText}>Contact us on:</Text>
          <Text style={{fontSize:19,fontWeight:'bold'}}>+91930718158</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  helpText: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 20,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#fff', 
    marginTop:10,// Set background color to fix margin color issue
  },
  supportIcon: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 30,
    paddingVertical: 5, 
    paddingHorizontal: 35,
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#0044FF',
      shadowOffset: { width: 1, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 9,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  supportText: {
    marginLeft: 10,
    fontSize:25,
    color:'gray',
  },
  mailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:40,
  },
  mailText: {
    fontSize: 18,
    marginBottom: 5,
  },
  contactContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:50,
  },
});

export default SupportTeam;
