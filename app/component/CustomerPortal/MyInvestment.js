import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Appearance, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const MyInvestment = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();
    return (
        <View style={[styles.container, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : '#fff' }]}>
            {/* Search Input */}
            {/* <View style={[styles.searchContainer, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#111' : '#eee', borderWidth: Appearance.getColorScheme() === 'dark' ? 1 : 0 }]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={Appearance.getColorScheme() === 'dark' ? "#616161" : 'gray'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialIcons name="search" size={20} color={Appearance.getColorScheme() === 'dark' ? '#FFF' : 'gray'} style={{fontWeight:'bold'}} />
      </View> */}

            <ScrollView style={{ maxHeight: '90%' }}>
                <View style={styles.taskBox}>
                    <TouchableOpacity 
                       onPress={() => {
                        navigation.navigate('InvestmentDetails')
                    }}
                    style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={[styles.title, { width: '90%', fontWeight: 'bold' }]}>
                            TATA Corporation Pvt Ltd
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />
                        {/* <View style={{ backgroundColor: '#0079FB', borderRadius: 10, width: '25%', height: '80%', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'white' }}>
                            Upload
                        </Text>
                    </View> */}
                    </TouchableOpacity>

                </View>
                <View style={styles.taskBox}>
                    <TouchableOpacity    onPress={() => {
                            navigation.navigate('InvestmentDetails')
                        }} style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={[styles.title, { width: '90%', fontWeight: 'bold' }]}>
                            Reliance Digital Pvt Ltd
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />
                        {/* <View style={{ backgroundColor: '#0079FB', borderRadius: 10, width: '25%', height: '80%', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'white' }}>
                            Upload
                        </Text>
                    </View> */}
                    </TouchableOpacity>

                </View>
                <View style={styles.taskBox}>
                    <TouchableOpacity    onPress={() => {
                            navigation.navigate('InvestmentDetails')
                        }} style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={[styles.title, { width: '90%', fontWeight: 'bold' }]}>
                            Adani Corporation Pvt Ltd
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />
                        {/* <View style={{ backgroundColor: '#0079FB', borderRadius: 10, width: '25%', height: '80%', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'white' }}>
                            Upload
                        </Text>
                    </View> */}
                    </TouchableOpacity>

                </View>
                <View style={styles.taskBox}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('InvestmentDetails')
                        }}
                        style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={[styles.title, { width: '90%', fontWeight: 'bold' }]}>
                            BSNL Corporation Pvt Ltd
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />
                        {/* <View style={{ backgroundColor: '#0079FB', borderRadius: 10, width: '25%', height: '80%', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'white' }}>
                            Upload
                        </Text>
                    </View> */}
                    </TouchableOpacity>

                </View>
       
                <View style={styles.taskBox}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('InvestmentDetails')
                        }}
                        style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={[styles.title, { width: '90%', fontWeight: 'bold' }]}>
                            BSNL Corporation Pvt Ltd
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={40} color="#0079FB" style={{ marginTop: -5, width: '10%' }} />
                        {/* <View style={{ backgroundColor: '#0079FB', borderRadius: 10, width: '25%', height: '80%', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'white' }}>
                            Upload
                        </Text>
                    </View> */}
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end',marginTop:10,marginRight:10 }}>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('AddInvestment')
                }}
                style={{height:50,width:50,borderRadius:50,backgroundColor:'#0079FB',justifyContent:'center',alignItems:'center',elevation:10,  shadowColor: '#4bbbf2',
                    shadowOffset: {
                        width: 1,
                        height: 2,
                    },
                    shadowOpacity: 0.90,
                    shadowRadius: 3.84,}}>
                <MaterialIcons name="add" size={40} color="white"  />

                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,

        ...Platform.select({
            ios: {
                shadowColor: 'lightblue',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: Appearance.getColorScheme() === 'dark' ? '0' : '1',
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        color: Appearance.getColorScheme() === 'dark' ? '#FFF' : '#000', // Change text color based on appearance mode
    },
    searchIcon: {
        marginLeft: 10,
        fontWeight: 'bold'
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

export default MyInvestment;
