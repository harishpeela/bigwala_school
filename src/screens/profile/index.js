import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../common/theme";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ApplicationContext from "../../utils/context.api/context";
import LogOutModal from "../../common/components/LogOutModal";
import { clearAuthToken, getUserDetails, saveUserDetails } from "../../utils/preferences/local_storage";
import { getAuthTokenDetails, removeLoginSessionDetails, saveLoginSessionDetails } from "../../utils/preferences/local_storage";
import { Header } from "../../common/components/header";
const Profile = ({ navigation, route }) => {
    const { setLoginDetails } = useContext(ApplicationContext);
    const det = async () => {
        let details = await getUserDetails();
        console.log('details', details);
    }
    const [alertModel, setAlertmodal] = useState(false);

    useEffect(() => {
        det();
    }, []);

    const openModal = () => {
        setAlertmodal(true);
    };
    const closeModal = () => {
        setAlertmodal(false);
    };

    const handleLogout = async () => {
        console.log('handellogout');

        await setLoginDetails(null);
        await removeLoginSessionDetails(null, null);
        await clearAuthToken();
        await saveLoginSessionDetails(' ', ' ');
        await saveUserDetails(null);
        closeModal();
    };
    return (
        <LinearGradient
            colors={[colors.primaryColor, colors.orangeColor]}
            style={styles.gradient}>
            <Header navigation={navigation} title={'Profile'} />
            <View>
                <Text></Text>
            </View>
            <TouchableOpacity onPress={openModal} style={styles.logout}>
                <Text style={styles.logoutText}> Log out</Text>
            </TouchableOpacity>
            <LogOutModal
                visible={alertModel}
                onClose={closeModal}
                title="Confirm Logout"
                buttons={[
                    { text: 'Cancel', onPress: closeModal },
                    { text: 'Ok', onPress: handleLogout },
                ]}
            />
        </LinearGradient>
    );
};
export default Profile;