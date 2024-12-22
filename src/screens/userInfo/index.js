import React, { useEffect, useContext } from "react";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Image } from "react-native-elements";
import { USER } from "../../constants/image_const";
import ApplicationContext from "../../utils/context.api/context";
import { saveUserDetails, saveLoginSessionDetails } from "../../utils/preferences/local_storage";

const LandingPage = ({ navigation, route }) => {
    const { data = [] } = route.params || {};
    const { setUserDetails, setLoginDetails } = useContext(ApplicationContext);

    const LogInDetails = async (data) => {
        try {
            let result = data;
            if (result) {
                await saveLoginSessionDetails('Bearer', data.token);
                await saveUserDetails(data);

                setUserDetails(data);
                setLoginDetails(data.token);
            } else {
                Alert.alert('Error', 'Invalid login credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Error', 'Failed to save login details');
        }
    }

    // useEffect(() => {
    //     return () => {
    //         setUserDetails(null);
    //         setLoginDetails(null);
    //     };
    // }, []);

    return (
        <LinearGradient
            colors={[colors.primaryColor, colors.orangeColor]}
            style={styles.gradient}>
            <View style={{ marginTop: '100%' }}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} onPress={() => LogInDetails(item)}>
                            <Image source={USER} style={styles.img} />
                            <Text style={styles.name}>{item.role} </Text>
                            <Text style={styles.name}>
                                {item.teacher ? (item.teacher.first_name + ' ' + item.teacher.last_name)
                                    : item.student ? (item.student.first_name + ' ' + item.student.last_name)
                                        : ''}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </LinearGradient>
    );
};

export default LandingPage;
