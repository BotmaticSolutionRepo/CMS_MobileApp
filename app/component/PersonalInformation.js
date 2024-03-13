import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, Appearance } from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const PersonalInformation = () => {
    var color = Appearance.getColorScheme()=='dark'?"#FFFFFF":'#000000';

    const [email, setemail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = () => {

        navigation.navigate('PersonalInformation');

    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, borderRadius: 100,flexDirection:'row' }}>
                    <Image style={{ height: 93, width: 93, borderRadius: 93,zIndex:0 }} source={require('../Images/cms.png')} />
                    <View style={{height:32,width:32,borderRadius:32,backgroundColor:'green',marginTop:65,marginLeft:-20,zIndex:1000}}>
                    <Icon name="camera" size={18} color="white" style={{ position: 'absolute', right: 7,top:7}} />
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 50 }}>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.title}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            placeholderTextColor={color}
                            secureTextEntry
                            value={currentPassword}
                            onChangeText={text => setCurrentPassword(text)}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.title}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            placeholderTextColor={color}
                            secureTextEntry
                            value={currentPassword}
                            onChangeText={text => setCurrentPassword(text)}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Email</Text>
                   <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={color}
                        secureTextEntry
                        value={email}
                        onChangeText={text => setemail(text)}
                    />
                         <Icon name="envelope" size={20} color="green" style={styles.icon} />
                   </View>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}>
                        <Text style={styles.title}>Gender</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Gender"
                            placeholderTextColor={color}
                            secureTextEntry
                            value={email}
                            onChangeText={text => setemail(text)}
                        />
                    </View>
                    <View style={{ width: '60%', marginLeft: 40 }}>
                        <Text style={styles.title}>Phone</Text>
                       <View style={{flexDirection:'row'}}>

                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor={color}
                            secureTextEntry
                            value={email}
                            onChangeText={text => setemail(text)}
                        />
                        <Icon name="phone" size={20} color="green" style={styles.icon} />
                       </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Address</Text>
                   <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        placeholderTextColor={color}
                        secureTextEntry
                        value={email}
                        onChangeText={text => setemail(text)}
                    />
                  <Icon name="home" size={20} color="green" style={styles.icon} />
                   </View>
                </View>

            </View>
            <View style={{ marginTop: 40 }}>
                <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default PersonalInformation

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Appearance.getColorScheme() == 'dark' ? "#000000" : "#FFFFFF",
        padding: 20,
    },
    title: {
        fontSize: 15,
        color: '#A59D9D',
        marginBottom: 5,
        marginLeft: 10
    },
    icon: {
        position: 'absolute',
        right: 10,
        top:10
        // marginLeft:24,
      },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#007BFF',
        // width: '40%',
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

})