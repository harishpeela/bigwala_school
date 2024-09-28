import React from "react";
import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";
import ImageSlider from "../../helper_components/ImageSlider";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { ATTENDENCE, BUS, CALL, GALARY, HOME_WORK, NOTICE_BOARD, TEACHER, VIDEO, ZOOM } from "../../constants/image_const";
import { Image } from "react-native-elements";
const DashBoard = () => {
    const Data = [
        {
            "id": 1,
            "name": "Bus",
            "image": BUS,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 2,
            "name": "Attendence",
            "image": ATTENDENCE,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 3,
            "name": "Call",
            "image": CALL,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 4,
            "name": "Home work",
            "image": HOME_WORK,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 5,
            "name": "Notice Board",
            "image": NOTICE_BOARD,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 6,
            "name": "Teacher",
            "image": TEACHER,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 7,
            "name": "Video",
            "image": VIDEO,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 8,
            "name": "GAllery",
            "image": GALARY,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },
        {
            "id": 9,
            "name": "Zoom",
            "image": ZOOM,
            "navigation": () => { Alert.alert('Hey', 'Welcome to Bigiwala School app') },
        },

    ]
    return (
        <View style={styles.gradient}>
            <View style={styles.ImageSlideCon}>
                <ImageSlider />
            </View>
            <LinearGradient colors={['#F94209', '#FF9E00']} style={styles.listContainer}>
                <FlatList data={Data}
                    numColumns={3}
                    keyExtractor={({ index, item }) => index}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
                        </View>
                    )} />
            </LinearGradient>
        </View>
    )
}
export default DashBoard;