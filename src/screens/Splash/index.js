import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            navigation.replace('Login'); // Replace with your next screen
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [navigation]);
    return (
        <View style={styles.container}>
             <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88E5EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150, // Adjust based on your logo size
        resizeMode: 'contain',
    },
});

export default Splash;