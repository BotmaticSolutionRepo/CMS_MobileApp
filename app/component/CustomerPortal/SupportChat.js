import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, FlatList, Image, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SupportChat = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, message: "Hello, how can I assist you today?", sender: "support", timestamp: new Date() },
    { id: 2, message: "Hi, I need help with my account.", sender: "user", timestamp: new Date() },
    { id: 3, message: "Sure, what seems to be the problem?", sender: "support", timestamp: new Date() },
    // Add more sample messages here
  ]);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  const handleEdit = () => {
    // Add logic for handling edit action
  };

  // const handlerest = () => {
  //   navigation.navigate('SupportChat');
  // };

  const sendMessage = () => {
    if (message.trim() === '') return; // Don't send empty messages
    const newMessage = { id: chatMessages.length + 1, message: message, sender: "user", timestamp: new Date() };
    setChatMessages(prevMessages => [...prevMessages, newMessage]); // Append new message to the end
    setMessage('');
    // Add logic to send the message to the backend or support agent
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today </Text>
      <Text style={styles.heading}>a specialist joined the chat</Text>
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === "support" ? styles.supportMessageContainer : styles.userMessageContainer}>
            {item.sender === "user" && (
              <View style={styles.userMessageContent}>
                <View style={styles.messageContent}>
                  <Text style={styles.message}>{item.message}</Text>
                  <Text style={styles.timestamp}>{formatTime(item.timestamp)}</Text>
                </View>
                <Icon name="person-circle-outline" size={30} color="gray"
           style={{marginLeft:5,}}
         />
                {/* <Image source={require('../Images/cms.png')} style={styles.profileImage} /> */}
              </View>
            )}
            {item.sender === "support" && (
              <View style={styles.userMessageContent}>
                <Image source={require('/Users/apple/Desktop/dummy/ClaimMyShares/app/Images/cms.png')} style={styles.profileImage} />
                <View style={styles.supportMessageContent}>
                  <Text style={styles.supportMessage}>{item.message}</Text>
                  <Text style={styles.timestamp}>{formatTime(item.timestamp)}</Text>
                </View>
              </View>
            )}
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Send message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:Appearance.getColorScheme()=='dark'?"black":'white'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  supportMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  userMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  userMessageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  supportMessageContent: {
    backgroundColor: 'white', // Adjust background color for support messages
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    marginLeft: 10,
  },
  messageContent: {
    backgroundColor: 'lightblue', // Adjust background color for user messages
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    marginRight: 10,
  },
  message: {
    color: 'black', // Adjust text color for better visibility
  },
  supportMessage: {
    color: 'black', // Adjust text color for better visibility
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'gray',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#0078F9',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10, // Adjusted to move the image to the right side
  },
});

export default SupportChat;
