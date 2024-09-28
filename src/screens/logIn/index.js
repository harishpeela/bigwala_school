import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { LOGO } from '../../constants/image_const';

const LoginScreen = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const validateMobileNumber = (number) => {
        const regex = /^[6-9]\d{9}$/;  // Validates Indian mobile numbers (10 digits, starting from 6-9)
        return regex.test(number);
    };

    const handleSubmit = () => {
        // if (!validateMobileNumber(mobileNumber)) {
        //     Alert.alert("Invalid Mobile Number", "Please enter a valid 10-digit mobile number.");
        // } else if (password.length < 5) {
        //     Alert.alert("Invalid Password", "Please enter a minimum charecters of 5");
        // } else {
        navigation.navigate('dashBoard')
        // }
    };

    return (
        <LinearGradient colors={['#FF9E00', '#F94209']} style={styles.gradient}>
            <View style={styles.container}>
                <Image source={LOGO} style={styles.logo} resizeMode='stretch' />
                <View style={styles.inputContainer}>
                    <Icon name="phone" size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        placeholderTextColor="black"
                        keyboardType="numeric"
                        maxLength={10}
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};
export default LoginScreen;
