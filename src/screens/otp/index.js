import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from 'react-native';
import { styles } from './styles';
import OTPTextInput from 'react-native-otp-textinput';
import { colors } from '../../common/theme';
import LinearGradient from 'react-native-linear-gradient';

const OTPScreen = ({ navigation, route }) => {
    const { token } = route.params || {};
    const [timer, setTimer] = useState('00');
    const otpInput = useRef(null);

    const resetOTPInput = () => {
        otpInput?.current?.setValue('');
    };

    const startTimer = (duration) => {
        let secondsRemaining = duration;
        const interval = setInterval(() => {
            if (secondsRemaining <= 0) {
                clearInterval(interval);
            } else {
                const minutes = Math.floor(secondsRemaining / 60);
                const seconds = secondsRemaining % 60;
                setTimer(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
                secondsRemaining -= 1;
            }
        }, 1000);
    };

    const signinHandler = async (otpOutPut) => {
        console.log('OTP Output:', otpOutPut);
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `Bearer ${token}`);

        const raw = JSON.stringify({ otp: otpOutPut });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };
        try {
            const response = await fetch(
                'http://147.79.71.252:3000/mobileAPI/otp-verify',
                requestOptions
            );
            const result = await response.json();
            console.log(result);
            if (result.message == "OTP verified successfully") {
                navigation.navigate('landingPage', {
                    data: result.oneData
                })
            }
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        startTimer(30);
        resetOTPInput();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <LinearGradient
                colors={[colors.primaryColor, colors.orangeColor]}
                style={styles.gradient}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.heading}>Enter OTP</Text>
                    <OTPTextInput
                        ref={otpInput}
                        inputCount={6}
                        tintColor={colors.primaryColor}
                        textInputStyle={styles.textInput}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            const otpOutPut = otpInput?.current?.state?.otpText
                                ?.toString()
                                .replace(/,/g, '');
                            if (otpOutPut) {
                                signinHandler(otpOutPut);
                            } else {
                                alert('Please enter the OTP');
                            }
                        }}
                    >
                        <Text style={styles.buttonText}>LogIn</Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.timer}>{`Resend OTP in ${timer}`}</Text> */}
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};
export default OTPScreen;
