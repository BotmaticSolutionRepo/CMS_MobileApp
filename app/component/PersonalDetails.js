import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PersonalDetails = () => {
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
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../Images/cms.png')} />
                <Text style={styles.headerTitle}>Claim My Shares</Text>
                <IconButton icon="bell" size={20} color="white" />
                <View style={styles.userSection}>
                    <Icon name="person" size={30} color="white" />
                    <Text style={styles.headerUser}>Michaeldavis</Text>
                </View>
            </View>

            <View style={styles.detailsContainer}>
            <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>File Id</Text>
                    <TextInput
                        style={styles.detailsInput}
                        
                        //onChangeText={setFatherName}
                    />
                </View>
            <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>File Number</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
            <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Company Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                    <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Investor Last Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                    <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Investor Full Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Father First Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Father Last Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                </View>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Father Full Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={fatherName}
                        onChangeText={setFatherName}
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Address</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={address}
                        onChangeText={setAddress}
                        multiline
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Country</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={country}
                        onChangeText={setCountry}
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>State</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={state}
                        onChangeText={setState}
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>District</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={district}
                        onChangeText={setDistrict}
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Pin Code</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={pinCode}
                        onChangeText={setPinCode}
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Full Address Consolidation</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={fullAddress}
                        onChangeText={setFullAddress}
                        multiline
                    />
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Folio Number</Text>
                    <TextInput
                        style={styles.detailsInput}
                        value={folioNumber}
                        onChangeText={setFolioNumber}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>DP Id</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Unclaimed Sheres</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Proposed Data Of Trnsafer</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Pan Card</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Date Of Birth</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>AAdhar Number</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Nominee Name</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Market Value</Text>
                    <TextInput
                        style={styles.detailsInput}
                        // value={fatherName}
                        // onChangeText={setFatherName}
                    />
                </View>
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
    detailsRow: {
        marginBottom: 15,
    },
    detailsLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#162732',
        marginBottom: 5,
    },
    detailsInput: {
        borderWidth: 1,
        borderColor: '#78B7FB',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default PersonalDetails;
