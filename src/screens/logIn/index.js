import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { LOGO } from '../../constants/image_const';
import { colors } from '../../common/theme';
import { SignIn } from '../../utils/apis';
// import Snackbar from 'react-native-snackbar';
const LoginScreen = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const validateMobileNumber = (number) => {
        const regex = /^[6-9]\d{9}$/;
        return regex.test(number);
    };

    const TriggerOtp = async () => {
        if (!mobileNumber) {
            Alert.alert('Alert', 'Please enter  mobile number');
        } else if (mobileNumber.length != 10) {
            Alert.alert('Alert', 'Please enter a valid mobile number');
        } else {
            let payload = {
                phone: `+91${mobileNumber}`
            }
            let responce = await SignIn(payload);
            console.log('responce', responce.data);
            if (responce.status === 200) {
                navigation.navigate('otpScreen', { token: responce.data.token })
            }

        }

    };

    return (
        <LinearGradient colors={[colors.primaryColor, colors.orangeColor]} style={styles.gradient}>
            <View style={styles.container}>
                <Image source={LOGO} style={styles.logo} resizeMode='stretch' />
                <Text style={styles.welcome}> WELCOME...!!</Text>

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
                <TouchableOpacity style={styles.button} onPress={TriggerOtp}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};
export default LoginScreen;
