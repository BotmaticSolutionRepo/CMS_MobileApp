import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Upload = () => {
  const [cameraActive, setCameraActive] = useState(true);

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
      {/* Camera Preview Section */}
      {cameraActive && (
        <View style={styles.cameraPreview}>
          <Text style={styles.cameraText}>Camera is active</Text>
          {/* Replace this text with actual camera preview logic if needed */}
        </View>
      )}

    

      {/* Capture Button */}
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={openCamera} />
      </View>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
      
        <TouchableOpacity  onPress={openCamera}  style={styles.menuOption}>
          <Text style={styles.menuText}>Record</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.menuOption} onPress={openGallery}>
          <Text style={styles.menuText}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',width:'100%'
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
});

export default Upload;
