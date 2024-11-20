import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MemberScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MemberScreen</Text>
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

export default MemberScreen;