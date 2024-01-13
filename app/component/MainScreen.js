// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image ,TouchableOpacity,Platform,Appearance} from 'react-native';
import { DefaultStyle } from '../styles/base';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../Images/cms.png')} />
            {/* <Text style={styles.title}>Botmatic</Text> */}
            <View style={{ marginTop: "60%" }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CreateAccount')}
                    >
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor:Appearance.getColorScheme()=='dark'?'black':"white",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'orange',
    },
    buttonContainer: {
        marginTop: 30,
        width: DefaultStyle.DEVICE_WIDTH / 1.1,
        borderRadius: 5,
        elevation:15
        // shadowColor: '#00000',
        // shadowOffset: {width: -4, height: 4},
        // shadowOpacity: 1,
        // shadowRadius: 3,
    },
    logoImage: {
        height: DefaultStyle.DEVICE_HEIGHT / 2.5,
        width: DefaultStyle.DEVICE_WIDTH / 1.1,
    },
    button:{
       
            width: DefaultStyle.DEVICE_WIDTH / 1.1,
            height: DefaultStyle.DEVICE_HEIGHT / 15,
            alignItems: 'center',
            borderRadius: DefaultStyle.UNIT / 2,
            backgroundColor: '#EF6A32',
            justifyContent: 'center'
        
    },
    buttonText:{
        color:"white",
        fontWeight:'bold',
        
    },
    
});

export default MainScreen;
