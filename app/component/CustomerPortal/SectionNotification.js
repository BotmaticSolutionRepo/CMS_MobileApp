import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SectionNotification = () => {
    // const [notifications, setNotifications] = useState(route.params.notification);
    const navigation = useNavigation();
    const [notifications, setNotifications] = useState(   [
        {
            Notification_ID:1,
            Notification_Message: "Your Pan card upload is still pending.",
            Notification_Date_Time: "13th-Dec-2024"
        },
        {
            Notification_ID:2,
            Notification_Message: "Your Pan card upload is still pending.",
            Notification_Date_Time: "13th-Dec-2024"
        },
        {
            Notification_ID:3,
            Notification_Message: "Your Aadhaar card verification is incomplete. Kindly upload your Aadhaar card at the earliest to avoid any delays",
            Notification_Date_Time: "18th-Dec-2024"
        },
        {
            Notification_ID:4,
            Notification_Message: "Your Aadhaar card verification is incomplete. Kindly upload your Aadhaar card at the earliest to avoid any delays",
            Notification_Date_Time: "11th-Dec-2024"
        },
        {
            Notification_ID:5,
            Notification_Message: "Your Pan card upload is still pending.",
            Notification_Date_Time: "13th-Dec-2024"
        }
    ]);


  

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.Notification_ID.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.notificationItem}>
                        <View style={styles.notificationContent}>
                            <Image source={require('../../Images/cms.png')} style={styles.profileImage} />
                            <View style={styles.notificationText}>
                                <Text style={styles.description}>{item.Notification_Message}</Text>
                                <Text style={styles.timestamp}>{item.Notification_Date_Time}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Appearance.getColorScheme() === 'dark' ? 'black' : 'white',
    },
    notificationItem: {
        width: '100%',
        height: 'auto',
        // backgroundColor: Appearance.getColorScheme() === 'dark' ? 'gray' : 'white',
        backgroundColor: '#E4F1FF',
        marginBottom: 15,
        borderRadius: 8,
        paddingHorizontal: 10, justifyContent: 'space-around', padding: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        ...Platform.select({
            ios: {
                // iOS-specific styles for elevation effect
                shadowColor: '#f7ba6f',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.50,
                shadowRadius: 3.84,
            },
            android: {
                // Android-specific elevation
                elevation: 10,
                shadowColor: '#f7ba6f',
                shadowOpacity: 0.50,
            },
        }),
    },
    notificationContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    notificationText: {
        marginLeft: 10,
        flex: 1,
    },
    description: {
        fontSize: 14,
        color: '#555',
        fontWeight: 'bold',
        paddingBottom: 3,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'right',
        marginTop:10
    },
});

export default SectionNotification;
