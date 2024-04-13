import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Image, Appearance, Modal, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

const PersonalInformation = () => {
    const navigation = useNavigation();
    var color = Appearance.getColorScheme() == 'dark' ? "#FFFFFF" : '#000000';

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessages, setErrorMessages] = useState({
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        address: ''
    });

    const [modalVisible, setModalVisible] = useState(false);

    const handleChangePassword = () => {
        navigation.navigate('PersonalInformation');
    };

    const handleSave = async () => {
        let errors = {};

        // Validation
        if (!firstName) {
            errors.firstName = 'Required';
        }
        if (!lastName) {
            errors.lastName = 'Required';
        }
        if (!email) {
            errors.email = 'Required';
        }
        if (!gender) {
            errors.gender = 'Required';
        }
        if (!phoneNumber) {
            errors.phoneNumber = 'Required';
        }
        if (!address) {
            errors.address = 'Required';
        }

        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        try {
            // Make API call to save personal information
            const response = await fetch('PersonalInformation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    firstName,
                    lastName,
                    gender,
                    phoneNumber,
                    address,
                }),
            });
            const data = await response.json();

            // Handle response
            if (response.ok) {
                // If all fields are filled and API call succeeds, navigate
                Alert.alert(
                    'Success',
                    'Personal information saved successfully',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('Profile');
                            }
                        }
                    ]
                );
            } else {
                // If API call fails, show error message
                Alert.alert(
                    'Error',
                    'Failed to save personal information. Please try again later.'
                );
            }
        } catch (error) {
            console.error('Error saving personal information:', error);
            Alert.alert(
                'Error',
                'Failed to save personal information.Regarding API'
            );
        }
    };
    // Function to handle camera selection
    const handleCamera = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 0.8,
                maxWidth: 1280,
                maxHeight: 800,
            };
            const response = await launchCamera(options);
            if (!response.didCancel) {
                // Handle the selected image from camera
                // Update state or perform any other actions
            }
        } catch (error) {
            console.log('Error launching camera: ', error);
        }
        setModalVisible(false); // Close the modal after selection
    };

    // Function to handle gallery selection
    const handleGallery = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 0.8,
                maxWidth: 1280,
                maxHeight: 800,
            };
            const response = await launchImageLibrary(options);
            if (!response.didCancel) {
                // Handle the selected image from gallery
                // Update state or perform any other actions
            }
        } catch (error) {
            console.log('Error launching image library: ', error);
        }
        setModalVisible(false); // Close the modal after selection
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, borderRadius: 100, flexDirection: 'row' }}>
                    <Image style={{ height: 93, width: 93, borderRadius: 93, zIndex: 0 }} source={require('../Images/cms.png')} />
                    <View style={{ height: 32, width: 32, borderRadius: 32, backgroundColor: 'green', marginTop: 65, marginLeft: -20, zIndex: 1000 }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Icon name="camera" size={18} color="white" style={{ position: 'absolute', right: 7, top: 7 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.title}>First Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            placeholderTextColor='#A59D9D'
                            value={firstName}
                            onChangeText={text => setFirstName(text)}
                        />
                        {errorMessages.firstName && <Text style={{ color: 'red' }}>{errorMessages.firstName}</Text>}
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.title}>Last Name<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            placeholderTextColor='#A59D9D'
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                        />
                        {errorMessages.lastName && <Text style={{ color: 'red' }}>{errorMessages.lastName}</Text>}
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Email<Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor='#A59D9D'
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <Icon name="envelope" size={20} color="green" style={styles.icon} />
                    </View>
                    {errorMessages.email && <Text style={{ color: 'red' }}>{errorMessages.email}</Text>}
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}>
                        <Text style={styles.title}>Gender<Text style={{ color: 'red' }}>*</Text></Text>
                        <Picker
                    selectedValue={gender}
                    mode='dropdown'
                    enabled={true}
                    prompt="Select Gender"
                    style={{ height: 30, width:150,borderBottomWidth:1 }}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
                        {errorMessages.gender && <Text style={{ color: 'red' }}>{errorMessages.gender}</Text>}
                    </View>
                    <View style={{ width: '60%', marginLeft: 40 }}>
                        <Text style={styles.title}>Phone<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                placeholderTextColor='#A59D9D'
                                value={phoneNumber}
                                onChangeText={text => setPhoneNumber(text)}
                            />
                            <Icon name="phone" size={20} color="green" style={styles.icon} />
                        </View>
                        {errorMessages.phoneNumber && <Text style={{ color: 'red' }}>{errorMessages.phoneNumber}</Text>}
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Address<Text style={{ color: 'red' }}>*</Text></Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            placeholderTextColor='#A59D9D'
                            value={address}
                            onChangeText={text => setAddress(text)}
                        />
                        <Icon name="home" size={20} color="green" style={styles.icon} />
                    </View>
                    {errorMessages.address && <Text style={{ color: 'red' }}>{errorMessages.address}</Text>}
                </View>

            </View>
            <View style={{ marginTop: 40 }}>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

            </View>

            {/* Modal for selecting camera or gallery */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleCamera}>
                            <Text style={styles.modalItem}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleGallery}>
                            <Text style={styles.modalItem}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={{ color: 'blue' }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Appearance.getColorScheme() == 'dark' ? "#000000" : "#FFFFFF",
        padding: 20,
    },
    title: {
        fontSize: 15,
        color: Appearance.getColorScheme() == 'dark' ? 'white' : 'black',
        marginBottom: 5,
        marginLeft: 10
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 14
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 8,
        color: Appearance.getColorScheme() == 'dark' ? 'white' : 'black',
        marginBottom: 20,
        paddingLeft: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#007BFF',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    // Modal styles
    modalContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 10,
        elevation: 5,
    },
    modalItem: {
        fontSize: 22,
        marginBottom: 10,
        marginTop: 5,
        fontWeight: 'bold',
        color: 'lightblue',
        borderBottomWidth: 1,
    },
})

export default PersonalInformation;
