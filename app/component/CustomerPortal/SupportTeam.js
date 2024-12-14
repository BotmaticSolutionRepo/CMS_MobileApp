import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Appearance } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SupportTeam = () => {
    const navigation = useNavigation();

    const handleChat = () => {
        navigation.navigate('SupportChat');
    }

    return (
        <View style={[styles.container, { backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : '#fff' }]}>
      <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
      <View style={styles.iconContainer}>
                <MaterialIcons name="headset-mic" size={100} color={Appearance.getColorScheme() === 'dark' ? '#fff' : '#007BFF'} />
                <Text style={[styles.helpText, { color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000' }]}>How can we help you?</Text>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={[styles.supportIcon, { backgroundColor: Appearance.getColorScheme() === 'dark' ? 'gray' : '#fff' }]} onPress={handleChat}>
                    <MaterialIcons name="headset-mic" size={30} color={Appearance.getColorScheme() === 'dark' ? '#fff' : '#000'} style={{ marginRight: 15 }} />
                    <Text style={[styles.supportText, { color: Appearance.getColorScheme() === 'dark' ? '#fff' : 'gray' }]}>Contact live chat</Text>
                    <MaterialIcons name="chevron-right" size={30} color={Appearance.getColorScheme() === 'dark' ? '#fff' : 'blue'} style={{ marginLeft: 30 }} />
                </TouchableOpacity>
                <View style={styles.mailContainer}>
                    <MaterialIcons name="email" size={60} color={Appearance.getColorScheme() === 'dark' ? '#CC8529' : 'orange'} style={{ marginBottom: 10 }} />
                    <Text style={[styles.mailText, { color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000' }]}>Send us an email:</Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000' }}>basweshwar.g@botmaticsolution.in</Text>
                </View>
                <View style={styles.contactContainer}>
                    <MaterialIcons name="phone" size={60} color={Appearance.getColorScheme() === 'dark' ? '#04B800' : 'green'} style={{ marginBottom: 10 }} />
                    <Text style={[styles.mailText, { color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000' }]}>Contact us on:</Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000' }}>+918530617353</Text>
                </View>
            </View>

         </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    helpText: {
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 20,
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    supportIcon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
        marginTop: 30,
        paddingVertical: 5,
        paddingHorizontal: 35,
        padding: 20,
        borderRadius: 5,
        ...Platform.select({
            ios: {
                shadowColor: '#0044FF',
                shadowOffset: { width: 1, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 9,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    supportText: {
        marginLeft: 10,
        fontSize: 25,
    },
    mailContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 40,
    },
    mailText: {
        fontSize: 18,
        marginBottom: 5,
    },
    contactContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50,
    },
});

export default SupportTeam;
