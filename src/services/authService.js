import axios from 'axios';
import { API_BASE_URL } from '@env';

export const handleLoginRequest = async (username, password) => {
    try {
        console.log("Network Request", `${API_BASE_URL}auth/member-authentication`)
        const response = await axios.post(`${API_BASE_URL}auth/member-authentication`, {
            username,
            password,
        });
        console.log("Response", response.data)
        if (response.status === 200) {
            if (response.data.statusCode === "200") {
                return { success: true, data: response.data };
            } else {
                return { success: false, message: response.data.result.authkey || 'Invalid credentials' };
            }
        } else {
            return { success: false, message: response.data.message || 'Invalid credentials' };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Something went wrong. Please try again.' };
    }
};
