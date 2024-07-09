import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MultipleSearch = () => {
    const [criteria1, setCriteria1] = useState(null);
    const [text1, setText1] = useState('');
    const [criteria2, setCriteria2] = useState(null);
    const [text2, setText2] = useState('');

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const criteriaOptions = [...Array(10).keys()].map(i => ({ label: (i + 1).toString(), value: i + 1 }));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Multiple Search</Text>
            <View style={styles.searchRow}>
                <DropDownPicker
                    open={open1}
                    value={criteria1}
                    items={criteriaOptions}
                    setOpen={setOpen1}
                    setValue={setCriteria1}
                    setItems={() => {}}
                    placeholder="Select Criteria"
                    style={styles.dropdown}
                    containerStyle={styles.dropdownContainer}
                    dropDownContainerStyle={styles.dropdown}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Text..."
                    value={text1}
                    onChangeText={(text) => setText1(text)}
                />
                <TouchableOpacity style={[styles.iconButton,{backgroundColor:'green'}]}>
                    <Icon name="add" size={17} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchRow}>
                <DropDownPicker
                    open={open2}
                    value={criteria2}
                    items={criteriaOptions}
                    setOpen={setOpen2}
                    setValue={setCriteria2}
                    setItems={() => {}}
                    placeholder="Select Criteria"
                    style={styles.dropdown}
                    containerStyle={styles.dropdownContainer}
                    dropDownContainerStyle={styles.dropdown}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Text..."
                    value={text2}
                    onChangeText={(text) => setText2(text)}
                />
                <TouchableOpacity style={[styles.iconButton,{backgroundColor:'red'}]}>
                    <Icon name="remove" size={17} color="#fff" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: '#000',
        color: '#fff',
        padding: 10,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dropdownContainer: {
        width: 150,
        marginRight: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        height: 50,
    },
    input: {
        flex: 2,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    iconButton: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MultipleSearch;
