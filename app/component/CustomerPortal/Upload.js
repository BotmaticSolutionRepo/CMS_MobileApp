import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert,Appearance } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Upload = () => {
  const [cameraActive, setCameraActive] = useState(false);

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'video',
        videoQuality: 'high',
        durationLimit: 15, // Limit video to 15 seconds
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Camera closed without capturing');
        } else if (response.errorMessage) {
          Alert.alert('Error:', response.errorMessage);
        } else {
          console.log('Video URI:', response.assets[0].uri);
          Alert.alert('Video recorded successfully');
        }
      }
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'video',
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Gallery closed without selecting');
        } else if (response.errorMessage) {
          Alert.alert('Error:', response.errorMessage);
        } else {
          console.log('Selected Video URI:', response.assets[0].uri);
          Alert.alert('Video selected successfully');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      
      <View style={{borderColor:'gray',padding:20,borderWidth:1,borderRadius:10}}>
      <View style={styles.taskBox}>
                <View style={{ flexDirection: 'row', marginTop: 5 ,justifyContent:'space-between'}}>
                    <Text style={[styles.title, { width: 'auto' }]}>
                      Write Testimonials
                    </Text>
                    {/* <Octicons name="file-directory" size={30} color="#0079FB" style={{ marginLeft: 0, width: '25%' }} /> */}
                    <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />

                </View>

            </View>

            <View style={styles.taskBox}>
                <View style={{ flexDirection: 'row', marginTop: 5,justifyContent:'space-between' }}>
                    <Text style={[styles.title, { width: '50%' }]}>
                       Create Video
                    </Text>
                    {/* <Octicons name="file-directory" size={30} color="#0079FB" style={{ marginLeft: 0, width: '25%' }} /> */}
                    <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />

                </View>

            </View>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width:'100%',
    marginTop:40

  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
   
  },
  cameraText: {
    color: '#fff',
    fontSize: 18,
  },
  topBar: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topText: {
    color: '#fff',
    fontSize: 16,
  },
  timerText: {
    color: '#fff',
    fontSize: 16,
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: '#FF0000',
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#fff',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 15,
  },
  menuOption: {
    flex: 1,
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
      fontSize: 18,
      justifyContent: 'center',
      fontWeight: 'bold',
      marginBottom: 10,
  },
  taskContainer: {
      marginTop: 10,

  },
  taskBox: {
      width: '100%',
      height: 50,
      backgroundColor: Appearance.getColorScheme() === 'dark' ? 'gray' : 'white',
      marginBottom: 15,
      borderRadius: 8,
      paddingHorizontal: 10, justifyContent: 'space-around', padding: 5,
      borderColor: 'gray',
      borderWidth: 0.5,
      ...Platform.select({
          ios: {
              // iOS-specific styles for elevation effect
              shadowColor: '#4bbbf2',
              shadowOffset: {
                  width: 1,
                  height: 2,
              },
              shadowOpacity: 0.90,
              shadowRadius: 3.84,
          },
          android: {
              // Android-specific elevation
              elevation: 10,
              shadowColor: '#4bbbf2',
          },
      }),
  },
  taskRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  taskText: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
  },
  taskTextInput: {
      width: 60,
      height: 35,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 10,
      paddingHorizontal: 5,
      fontSize: 12,
      marginTop: 10,
  },
});

export default Upload;
