import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OtherDetails = () => {
    const navigation = useNavigation();
    const [marketValue, setMarketValue] = useState('13');
    const [jointHolderName, setJointHolderName] = useState('43');
    const [rtaDetails, setRtaDetails] = useState('3456');
    const [letterDetails, setLetterDetails] = useState('Antonyalbinva');
    const [bdDetails, setBdDetails] = useState('Antonyalbinva');
    const [operationDetails, setOperationDetails] = useState('Antonyalbinva');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../Images/cms.png')} />
                <Text style={styles.headerTitle}>Claim My Shares</Text>
                <View style={styles.notificationSection}>
                    <Ionicons name="notifications" size={25} color="white" />
                    <View style={styles.notificationBadge}>
                        <Text style={styles.notificationCount}>1</Text>
                    </View>
                </View>
                <View style={styles.userSection}>
                    <Ionicons name="person" size={30} color="white" />
                    <Text style={styles.headerUser}>Michaeldavis</Text>
                </View>
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Market Value</Text>
                    <View style={styles.detailsInputRow}>
                        <TextInput
                            style={styles.detailsInput}
                            value={marketValue}
                            onChangeText={setMarketValue}
                        />
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Joint Holder Name</Text>
                    <View style={styles.detailsInputRow}>
                        <TextInput
                            style={styles.detailsInput}
                            value={jointHolderName}
                            onChangeText={setJointHolderName}
                        />
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>RTA Details</Text>
                    <View style={styles.detailsInputRow}>
                        <TextInput
                            style={styles.detailsInput}
                            value={rtaDetails}
                            onChangeText={setRtaDetails}
                        />
                        <TouchableOpacity style={styles.iconContainer}>
                            <Ionicons name="add-circle" size={25} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Letter Details</Text>
                    <View style={styles.detailsInputRow}>
                        <TextInput
                            style={styles.detailsInput}
                            value={letterDetails}
                            onChangeText={setLetterDetails}
                        />
                        <TouchableOpacity style={styles.iconContainer}>
                            <Ionicons name="add-circle" size={25} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>BD Details</Text>
                    <View style={styles.detailsInputRow}>
                        <TextInput
                            style={styles.detailsInput}
                            value={bdDetails}
                            onChangeText={setBdDetails}
                        />
                        <TouchableOpacity style={styles.iconContainer}>
                            <Ionicons name="add-circle" size={25} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <Text style={styles.detailsLabel}>Operation Details</Text>
                    <View style={styles.detailsInputRow}>
                        <TextInput
                            style={styles.detailsInput}
                            value={operationDetails}
                            onChangeText={setOperationDetails}
                        />
                        <TouchableOpacity style={styles.iconContainer}>
                            <Ionicons name="add-circle" size={25} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
    notificationSection: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationCount: {
        color: 'white',
        fontSize: 10,
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
    detailsInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    detailsInput: {
        borderWidth: 1,
        borderColor: '#78B7FB',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
        paddingRight: 35, // Add padding to the right to avoid text overlap with icon
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12.5 }],
    },
});

export default OtherDetails;
