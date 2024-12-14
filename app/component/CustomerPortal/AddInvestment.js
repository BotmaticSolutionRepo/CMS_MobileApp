import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddInvestment = () => {
    const navigation = useNavigation();
    const [fatherName, setFatherName] = useState('123');
    const [address, setAddress] = useState('Variath House Cheranelloor (East Kacheripadi) Cheranelloor P O Ernakulam Dist');
    const [country, setCountry] = useState('India');
    const [state, setState] = useState('Kerala');
    const [district, setDistrict] = useState('Ernakulam');
    const [pinCode, setPinCode] = useState('682034');
    const [fullAddress, setFullAddress] = useState('Variath House Cheranelloor (East Kacheripadi) Cheranelloor P O Ernakulam Dist Ernakulam Kerala 682034 India');
    const [folioNumber, setFolioNumber] = useState('');

    return (
        <ScrollView style={styles.container}>
        
        <View style={styles.faintLine} />

            <View style={styles.detailsContainer}>
            <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Share Holder Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        
                        //onChangeText={setFatherName}
                    />
                </View>
            <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Company Number</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>No of Shares</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Phone Number</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Address</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Reported BD Member</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                   <TouchableOpacity style={styles.updateButton} onPress={() => {
          navigation.navigate('Dashboard',{UserName:"Rutik"})}}>
          
          <Text style={styles.updateButtonText}>Submit</Text>
        </TouchableOpacity>
              
            
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#162732',
        padding: 10,
        justifyContent: 'space-between',
    },
    logo: {
        width: 30,
        height: 30,
    },
    headerTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerUser: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
    },
    detailsContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    faintLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 5,
    },
    detailsRow: {
        marginBottom: 15,
    },
    detailsLabel: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'gray',
        marginBottom: 5,
    },
    detailsInput: {
        borderWidth: 1,
        // borderColor: '#78B7FB',
        borderColor:'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    updateButton: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 20,
        width: '80%',
    },
    updateButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 100,
    },
});

export default AddInvestment;
