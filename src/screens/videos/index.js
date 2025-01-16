import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";
import { Video } from 'react-native-video';
const Videos = ({ navigation }) => {
    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Videos"} navigation={navigation} />
            <View style={styles.container}>
                <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                    style={styles.video}
                    controls={true} 
                    resizeMode="contain"
                    paused={false}
                />
            </View>
        </LinearGradient>
    )
}
export default Videos;