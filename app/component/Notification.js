import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: "Kishor Patil ", timestamp: new Date(), description: "Hellowwwwwwwwfbjdhvcbnkfjbv ckhbfj vkhjbf dvckh fvb fvkv fdvbfkhvbfvuifhbviuf ", image: require('../Images/cms.png') },
    { id: 2, name: "Kishor Gaikwad", timestamp: new Date(), description: "Hellow Guys", image: require('../Images/cms.png') },
    { id: 3, name: "Rutik Gubge", timestamp: new Date(), description: "Hellow Guys", image: require('../Images/cms.png') },
    { id: 4, name: "Sankalp Chavan", timestamp: new Date(), description: "Hellow Guys", image: require('../Images/cms.png') },
    { id: 5, name: "Kishor Gaikwad", timestamp: new Date(), description: "Hellow Guys", image: require('../Images/cms.png') },
    // Add more sample notifications here
  ]);
  const navigation = useNavigation();

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}  >`;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem}>
            <View style={styles.notificationContent}>
              <Image source={item.image} style={styles.profileImage} />
              <View style={styles.notificationText}>
                <View style={styles.header}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timestamp}>{formatTime(item.timestamp)}{'>'}</Text>

                </View>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notificationItem: {
    marginBottom: 10,
    paddingBottom: 10,
   // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    width:'83%'
    //marginLeft: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    borderBottomWidth: 0.4,
    paddingBottom: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  timestamp: {
    fontSize: 12,
    fontWeight:'bold',
    color: 'gray',
    marginRight: 5,
    // marginLeft:90,
   alignContent:'flex-end',width:'17%'
    
  },
});

export default Notification;
