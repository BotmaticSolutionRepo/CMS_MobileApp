import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Appearance,useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FAQ = () => {
    const navigation = useNavigation(); 
    const colorScheme = useColorScheme();
    const handlesend = (buttonName) => {
        // navigation.navigate('Profile');
        console.log('Button pressed:', buttonName);
      };
  return (
    <View style={styles.container}>
              <ScrollView showsVerticalScrollIndicator={false}>

      <Text style={styles.bigText}>
        We’re here to help you with
        anything and everything on
        claimmyshares
      </Text>
      <Text style={styles.smallText}>
        At claimmyshares we expect at a day’s start is you, better and happier than yesterday.
        We have got you covered share your concern or check our frequently asked questions listed below.
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search help"
            placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'}

          />
        </View>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>FAQ</Text>
        <TouchableOpacity>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
     
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>What is Viral Pitch??</Text>
        <TouchableOpacity>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>How to apply for a campaign?</Text>
        <TouchableOpacity>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>How to know status of a campaign?</Text>
        <TouchableOpacity>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>How to know status of a campaign?</Text>
        <TouchableOpacity>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>How to know status of a campaign?</Text>
        <TouchableOpacity>
          <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      
      {/* Add more FAQ items similarly */}
      <Text style={styles.stillStuckText}>Still stuck? Help us a mail away</Text>
      <TouchableOpacity style={styles.sendMessageButton} onPress={handlesend}>
        <Text style={styles.sendMessageButtonText}>Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:Appearance.getColorScheme()=='dark'?'black':'white',
  },
  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:Appearance.getColorScheme()=='dark'?'white':'black'
  },
  smallText: {
    fontSize: 14,
    marginBottom: 25,
    color:Appearance.getColorScheme()=='dark'?'white':'black',
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    marginBottom:10
     // Adjust padding to make it smaller
  },
  searchIcon: {
    marginLeft:5,
    color:Appearance.getColorScheme()=='dark'?'white':'black', // Adjust margin to make it smaller
  },
  searchInput: {
    flex: 1,
    fontSize: 14, // Adjust font size to make it smaller
    
    marginLeft:10,
    fontWeight:'bold',
    color:Appearance.getColorScheme()=='dark'?'white':'black',
    paddingVertical:5,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  faqText: {
    flex: 1,
    fontSize: 16,
    fontWeight:'bold',
    color:Appearance.getColorScheme()=='dark'?'white':'black',
    //color:"black",
  },
  plusButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
  },
  stillStuckText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    textAlign:'center',
    color:Appearance.getColorScheme()=='dark'?'white':'black',
    fontWeight:'bold',
  },
  sendMessageButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop:30,
    alignItems: 'center',
  },
  sendMessageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
