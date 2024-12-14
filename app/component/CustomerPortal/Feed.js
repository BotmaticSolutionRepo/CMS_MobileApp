import React, { useState } from 'react';
import { FlatList, View, Text, Appearance, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Feed = () => {
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
    const [Upload, setUpload] = useState(false);
    const [File, setFile] = useState(null);

    const videoData = [
        {
            id: 1,
            title: 'Client Feedback',
            description: '🎇Learn about 🥳our successful🎊 support in helping a🎊 client claim their shares🎉. Our dedicated team ensured 🥳a seamless process🎇, resulting in a positive outcome🎉. Watch their testimonial to see how we strive 🥳to provide excellent service and achieve 🎊favorable results for our clients🥳. Our clients 🎉value the efforts of🎊 Claim My Shares for🎉 delivering quality work🥳.',
            videoUrl: 'dSqm9jif8mw', // Video ID only
        },
        {
            id: 2,
            title: 'Video 2',
            description: '🥳Discover how we assisted our client 🎊in successfully claiming their shares🎉. Our dedicated team ensured a 🥳smooth and efficient process🎇, resulting in a positive outcome for the🎉 client. Watch their testimonial to learn🎉 more about our commitment to delivering🥳 exceptional service and achieving 🥳favorable🎉 results for our🎇 clients🎊.',
            videoUrl: 'zKgCLgez6KY', // Video ID only
        },
        {
            id: 3,
            title: 'Video 3',
            description: 'This is another video.',
            videoUrl: 'K6__KQA9298', // Video ID only
        },
        {
            id: 4,
            title: 'Video 4',
            description: 'This is another video.',
            videoUrl: 'GLUbMlmdHAo', // Video ID only
        },
        {
            id: 5,
            title: 'Video 5',
            description: 'This is another video.',
            videoUrl: 'Hub3kuuZYN0', // Video ID only
        },
        {
            id: 6,
            title: 'Video 6',
            description: 'This is another video.',
            videoUrl: 'IiU9qA2r444', // Video ID only
        },
        {
            id: 7,
            title: 'Video 7',
            description: 'This is another video.',
            videoUrl: 'nrMW9kFW1h8', // Video ID only
        },
        {
            id: 8,
            title: 'Video 8',
            description: 'This is another video.',
            videoUrl: '84QAijiwjnw', // Video ID only
        },
        {
            id: 9,
            title: 'Video 9',
            description: 'This is another video.',
            videoUrl: 'bhK_ArsftX8', // Video ID only
        },
        {
            id: 10,
            title: 'Video 10',
            description: 'This is another video.',
            videoUrl: 'XJC3RQTu9Bo', // Video ID only
        },
    ];

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => setSelectedVideoIndex(index)}>
            <View style={styles.videoCard}>
                <YoutubePlayer
                    height={200}
                    play={selectedVideoIndex === index}
                    videoId={item.videoUrl}
                    onChangeState={(state) => {
                        if (state === 'ended') setSelectedVideoIndex(null);
                    }}
                />
                <Text style={styles.videoTitle}>{item.title}</Text>
                <Text style={styles.videoDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const chooseFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf], // Specify PDF type
          });
          setFile(res[0]);
          setModalVisible(false);
          console.log('File selected:', res[0]);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker
          } else {
            console.error('Error choosing file:', err);
          }
        }
      };

      const record = async () => {
        console.log("rutikkkkkkkk")
        try {
        //   let result = await launchImageLibrary({saveToPhotos: true, maxWidth:1280, maxHeight:800, quality:0.8});
        let result = await launchCamera({saveToPhotos: true, maxWidth:1280, maxHeight:800, quality:0.8});

        console.log("launchImageLibrary_result================",result?.assets);
    
        if(result.assets) {
          let obj = result.assets[0];
          let {fileName: fileName,fileSize: size,type,uri} = obj;
          let fileObj = [{fileName,size,type,uri}];
          await setFile(obj);
           // setisSpinnerVisible(true);
        console.log("Recordfile______",obj);
        }
    
        } catch (err) {
         
            console.error('Error choosing file:', err);
          
        }
      };
    

    const handleCloseModal = () => {
        setSelectedVideoIndex(null);
    };

    return (
        <View style={styles.container}>

            {/* <View style={styles.taskBox}>
                {Upload ?
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="bell" onPress={() => {
                            navigation.navigate('SectionNotification')
                        }} size={25} color="#FFCF23" style={{ marginLeft: 80, marginTop: 5 }} />

                        <Icon name="bell" onPress={() => {
                            navigation.navigate('SectionNotification')
                        }} size={25} color="#FFCF23" style={{ marginLeft: 80, marginTop: 5 }} />

                    </View> :
                    <View style={{ flexDirection: 'row' }}>
                        <View>

                            <Icon name="upload" onPress={chooseFile} size={50} color="#FFCF23" style={{ marginLeft: 80, marginTop: 5 }} />
                            <Text style={{ fontSize: 13,marginLeft: 80, color: "#FFCF23" }}>Upload</Text>

                        </View>
                        <View>

                            <Icon name="camera" onPress={record} size={50} color="#FFCF23" style={{ marginLeft: 80, marginTop: 5 }} />
                            <Text style={{ fontSize: 13,marginLeft: 85, color: "#FFCF23" }}>Record</Text>
                        </View>

                    </View>}
            </View> */}

            <FlatList
                data={videoData}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            {selectedVideoIndex !== null && (
                <Modal
                    visible={true}
                    transparent={false}
                    onRequestClose={handleCloseModal}
                    animationType="slide"
                >
                    <View style={styles.fullScreenModal}>
                        <YoutubePlayer
                            height={Dimensions.get('window').height}
                            width={Dimensions.get('window').width}
                            play={true}
                            videoId={videoData[selectedVideoIndex].videoUrl}
                            onChangeState={(state) => {
                                if (state === 'ended') handleCloseModal();
                            }}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 0,
        marginTop:5
    },
    videoCard: {
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    taskBox: {
        width: '100%',
        height: 'auto',
        backgroundColor: Appearance.getColorScheme() === 'dark' ? 'gray' : 'white',
        marginBottom: 15,
        marginTop:10,
        borderRadius: 8,
        paddingHorizontal: 10, justifyContent: 'space-around', padding: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        ...Platform.select({
            ios: {
                // iOS-specific styles for elevation effect
                shadowColor: '#4bbbf2',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                // Android-specific elevation
                elevation: 10,
                shadowColor: '#4bbbf2',
            },
        }),
    },
    videoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#333',
    },
    videoDescription: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    fullScreenModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        borderRadius: 50,
        zIndex: 1,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Feed;
