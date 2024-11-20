import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator,
    Image
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleLoginRequest } from '../../services/authService';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const userState = await AsyncStorage.getItem('userLoggedIn');
            if (userState === 'true') {
                navigation.replace('MainHome'); // Navigate to MainHome directly
            }
        };
        checkLoginStatus();
    }, []);

    const handleLogin = async () => {
        console.log("Hello", username + " " + password)
        if (!username || !password) {
            Alert.alert('Error', 'Please enter both username and password.');
            return;
        }
        setLoading(true);
        const response = await handleLoginRequest(username, password);
        if (response.success) {
            await AsyncStorage.setItem('userLoggedIn', 'true');
            await AsyncStorage.setItem('userData', JSON.stringify(response.data));
            navigation.replace('MainHome');
        } else {
            Alert.alert('Login Failed', response.message);
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            {/* Top 40% with green background */}
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/img/logo.png')} // Replace with your logo path
                    style={styles.logo}
                />
            </View>

            {/* Bottom 60% with form */}
            <View style={styles.bottomSection}>
                <Text style={styles.loginText}>Login</Text>

                {/* Username Input */}
                <View style={styles.inputContainer}>
                    {/* Custom Image Icon */}
                    <Image
                        source={require('../../assets/icons/login/ic_username.png')} // Replace with your image path
                        style={styles.icon}
                    />
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholderTextColor="#7F7F7F"
                    />
                </View>

                {/* Username Input */}
                <View style={styles.inputContainer}>
                    {/* Custom Image Icon */}
                    <Image
                        source={require('../../assets/icons/login/ic_password.png')} // Replace with your image path
                        style={styles.icon}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#7F7F7F"
                    />
                </View>

                {/* Forgot Password Button */}
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Login</Text>
                    )}
                </TouchableOpacity>

                {/* Register Button */}
                <TouchableOpacity style={styles.register}>
                    <Text style={styles.registerText}>
                        Don't have an account? <Text style={styles.registerLink}>Register</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        flex: 3, // 40% of the screen
        backgroundColor: '#88E5EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100, // Adjust logo size
        resizeMode: 'contain',
    },
    bottomSection: {
        flex: 7, // 60% of the screen
        backgroundColor: '#fff',
        padding: 20,
    },
    loginText: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 20,
        fontWeight: 700,
        color: '#02448A',
        fontFamily: 'Inter-VariableFont_opsz,wght',
        textAlign: 'left',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 50,
        marginVertical: 10,
    },
    icon: {
        width: 24, // Adjust the width of the custom image
        height: 24, // Adjust the height of the custom image
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },


    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 20,
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#02448A',
        fontFamily: 'Inter-VariableFont_opsz,wght',
        fontWeight: 400,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#02448A', // background
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        fontFamily: 'Inter-VariableFont_opsz,wght',
        fontWeight: 400,
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    register: {
        alignItems: 'center',
    },
    registerText: {
        color: '#7F7F7F',
        fontFamily: 'Inter-VariableFont_opsz,wght',
        fontSize: 14,
    },
    registerLink: {
        color: '#02448A',
        fontFamily: 'Inter-VariableFont_opsz,wght',
        fontWeight: 400,
    },
});


export default Login;