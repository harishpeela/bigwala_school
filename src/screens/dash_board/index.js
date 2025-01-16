import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import ImageSlider from "../../helper_components/ImageSlider";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { ADMIN, ANNOUNCEMENTS, ATTENDENCE, BUS, CALL, CLASSROOMS, DASHBOARDTEACHER, FEE, GALARY, HOME_WORK, NOTICE_BOARD, REPORT_CARD, STUDENT, STUDENT_HOMEWORK, TEACHER, TEACHERS, VIDEO, ZOOM } from "../../constants/image_const";
import { colors } from "../../common/theme";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ApplicationContext from "../../utils/context.api/context";
import { getUserDetails } from "../../utils/preferences/local_storage";

const DashBoard = ({ navigation, }) => {
    console.log('dashboard');

    useEffect(() => {
        const getDetails = async () => {
            let ROLE = 'teacher';
            setRole(ROLE);
            let detail = await getUserDetails();
            setDetails(detail);
            console.log('details', detail);
        }
        getDetails();
    }, []);


    const [details, setDetails] = useState();
    const { userDetails } = useContext(ApplicationContext);
    console.log('userDetails', userDetails);
    const [role, setRole] = useState();
    const RoleAdmin = [
        {
            "id": 1,
            "name": "Teachers",
            "image": TEACHERS,
            "navigation": () => { navigation.navigate('teacherslist') },
        },
        {
            "id": 2,
            "name": "Staff Attendence",
            "image": ATTENDENCE,
            "navigation": () => { navigation.navigate('staffAttendence') },
        },
        {
            "id": 3,
            "name": "Classes",
            "image": CLASSROOMS,
            "navigation": () => { navigation.navigate('classroomslist') },
        },
        {
            "id": 4,
            "name": "Home work",
            "image": HOME_WORK,
            "navigation": () => { navigation.navigate('homework') },
        },
        {
            "id": 5,
            "name": "Students",
            "image": HOME_WORK,
            "navigation": () => { navigation.navigate('addstudent') },
        },
        {
            "id": 6,
            "name": "Roles",
            "image": HOME_WORK,
            "navigation": () => { navigation.navigate('roles') },
        },
    ]


    const RoleTeacher = [
        {
            "id": 1,
            "name": "Tracking",
            "image": BUS,
            "navigation": () => { navigation.navigate('tracker') },
        },
        {
            "id": 2,
            "name": "Staff Attendence",
            "image": ATTENDENCE,
            "navigation": () => { navigation.navigate('staffAttendence') },
        },
        {
            "id": 3,
            "name": "Call",
            "image": CALL,
            "navigation": () => { navigation.navigate('callinfo') },
        },
        {
            "id": 4,
            "name": "Home work",
            "image": HOME_WORK,
            "navigation": () => { navigation.navigate('homework') },
        },
        {
            "id": 5,
            "name": "Notice Board",
            "image": NOTICE_BOARD,
            "navigation": () => { navigation.navigate('noticeBoard') },
        },
        {
            "id": 6,
            "name": "Student Attendence",
            "image": TEACHER,
            "navigation": () => { navigation.navigate('studentsAttendence') },
        },
        {
            "id": 7,
            "name": "Video",
            "image": VIDEO,
            "navigation": () => { navigation.navigate('videos') },
        },
        {
            "id": 8,
            "name": "Gallery",
            "image": GALARY,
            "navigation": () => { navigation.navigate('gallery') },
        },
        {
            "id": 9,
            "name": "Zoom",
            "image": ZOOM,
            "navigation": () => { navigation.navigate('onlineClass') },
        },

    ]

    const RoleStudent = [
        {
            "id": 1,
            "name": "Tracking",
            "image": BUS,
            "navigation": () => { navigation.navigate('tracker') },
        },
        {
            "id": 2,
            "name": "Attendence",
            "image": ATTENDENCE,
            "navigation": () => { navigation.navigate('attendence') },
        },
        {
            "id": 3,
            "name": "Home Work",
            "image": STUDENT_HOMEWORK,
            "navigation": () => { navigation.navigate('homework') },
        },
        {
            "id": 4,
            "name": "Fees",
            "image": FEE,
            "navigation": () => { navigation.navigate('fees') },
        },
        {
            "id": 5,
            "name": "Call",
            "image": CALL,
            "navigation": () => { navigation.navigate('callinfo') },
        },
        {
            "id": 6,
            "name": "Progress Card",
            "image": REPORT_CARD,
            "navigation": () => { navigation.navigate('reportCard') },
        },
        {
            "id": 7,
            "name": "Announcements",
            "image": ANNOUNCEMENTS,
            "navigation": () => { navigation.navigate('announcements') },
        },
        {
            "id": 8,
            "name": "Notice board",
            "image": NOTICE_BOARD,
            "navigation": () => { navigation.navigate('noticeBoard') },
        },

        {
            "id": 9,
            "name": "Gallery",
            "image": GALARY,
            "navigation": () => { navigation.navigate('gallery') },
        },
        {
            "id": 10,
            "name": "Video",
            "image": VIDEO,
            "navigation": () => { navigation.navigate('videos') },
        },
        {
            "id": 11,
            "name": "On line class",
            "image": ZOOM,
            "navigation": () => { navigation.navigate('onlineClass') },
        },

    ]
    return (
        details?.role === "teacher"
            ? (
                <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
                    <View style={styles.topView}>
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                            <FontAwesome name="user" size={30} color={'white'} />
                        </TouchableOpacity>
                        <Image source={DASHBOARDTEACHER} height={50} width={50} style={styles.img1} />
                    </View>
                    <View style={styles.ImageSlideCon}>
                        <ImageSlider />
                    </View>
                    <LinearGradient colors={['#F94209', '#FF9E00']} style={styles.listContainer}>
                        <FlatList data={RoleTeacher}
                            numColumns={3}
                            keyExtractor={({ index, item }) => index}
                            renderItem={({ item, index }) => (
                                <View style={styles.item}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => item.navigation()}>
                                        <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
                                        <Text style={{ marginTop: 5, fontSize: 12, color: colors.white, fontWeight: 'bold' }}>{item.name} </Text>
                                    </TouchableOpacity>
                                </View>
                            )} />
                    </LinearGradient>
                </LinearGradient>
            ) : details?.role === "student" ? (
                <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
                    <View style={styles.topView}>
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                            <FontAwesome name="user" size={30} color={'white'} />
                        </TouchableOpacity>
                        <Image source={STUDENT} height={50} width={50} style={styles.img1} />
                    </View>
                    <View style={styles.ImageSlideCon}>
                        <ImageSlider />
                    </View>
                    <LinearGradient colors={['#F94209', '#FF9E00']} style={styles.listContainer}>
                        <FlatList data={RoleStudent}
                            numColumns={3}
                            keyExtractor={({ index, item }) => index}
                            renderItem={({ item, index }) => (
                                <View style={styles.item}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => item.navigation()}>
                                        <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
                                        <Text style={{ marginTop: 5, fontSize: 12, color: colors.white, fontWeight: 'bold' }}>{item.name} </Text>
                                    </TouchableOpacity>
                                </View>
                            )} />
                    </LinearGradient>
                </LinearGradient>
            ) : <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <FontAwesome name="user" size={30} color={'white'} />
                    </TouchableOpacity>
                    <Image source={ADMIN} height={50} width={50} style={styles.img1} />
                </View>
                <View style={styles.ImageSlideCon}>
                    <ImageSlider />
                </View>
                <LinearGradient colors={['#F94209', '#FF9E00']} style={styles.listContainer}>
                    <FlatList data={RoleAdmin}
                        numColumns={3}
                        keyExtractor={({ index, item }) => index}
                        renderItem={({ item, index }) => (
                            <View style={styles.item}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => item.navigation()}>
                                    <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
                                    <Text style={{ marginTop: 5, fontSize: 12, color: colors.white, fontWeight: 'bold' }}>{item.name} </Text>
                                </TouchableOpacity>
                            </View>
                        )} />
                </LinearGradient>
            </LinearGradient>
    )
}
export default DashBoard;