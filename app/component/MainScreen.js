// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Platform, Appearance } from 'react-native';
import { DefaultStyle } from '../styles/base';


const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../Images/cms.png')} />
            {/* <Text style={styles.title}>Botmatic</Text> */}
            <View style={{ marginTop: "50%" }}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.createaccount}
                    onPress={() => navigation.navigate('CreateAccount')}
                >
                    <Text style={styles.createaccounttext}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: '10%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Appearance.getColorScheme() == 'dark' ? 'black' : "white",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'orange',
    },
    buttonContainer: {

        width: DefaultStyle.DEVICE_WIDTH / 1.1,
        height: DefaultStyle.DEVICE_HEIGHT / 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        borderRadius: 5,
        shadowColor: Appearance.getColorScheme() == 'dark' ? null : '#cde5fe',
        shadowOffset: { width: -2, height: -2, },
        shadowOpacity: 1,
        shadowRadius: 10,

    },
    createaccount: {
        width: DefaultStyle.DEVICE_WIDTH / 1.1,
        height: DefaultStyle.DEVICE_HEIGHT / 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderWidth: 1,  // Set the border width
        borderColor: '#827979',  // Set the border color
        borderRadius: 5,
    },
    createaccounttext: {
        color: "#000000",
        fontWeight: 'bold', fontSize: 18,
        justifyContent: 'center',

    },
    logoImage: {
        height: DefaultStyle.DEVICE_HEIGHT / 2.5,
        width: DefaultStyle.DEVICE_WIDTH / 1.1,
    },
    button: {

        // width: DefaultStyle.DEVICE_WIDTH / 1.1,
        // height: DefaultStyle.DEVICE_HEIGHT / 15,
        // alignItems: 'center',
        // borderRadius: DefaultStyle.UNIT / 2,
        // // backgroundColor: '#ffffff',
        // justifyContent: 'center'

    },
    buttonText: {
        color: "#ffffff", fontSize: 18, fontFamily: 'inter',
        fontWeight: 'bold',
        justifyContent: 'center',

    },

});

export default MainScreen;
