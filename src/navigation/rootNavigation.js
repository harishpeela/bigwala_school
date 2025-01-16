import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/logIn";
import DashBoard from "../screens/dash_board";
import Tracker from "../screens/tracking";
import StaffAttendence from "../screens/staff_attendence";
import WorkingStaff from "../screens/workingStaff";
import LeaveStaff from "../screens/on_leave_staff";
import StudentsAttendence from "../screens/student_attendence";
import LeaveLetters from "../screens/leave_letters";
import StaffLeaveLetters from "../screens/staff_leave_letters";
import OTPScreen from "../screens/otp";
import LandingPage from "../screens/userInfo";
import ApplicationContext from "../utils/context.api/context";
import { getAuthTokenDetails } from "../utils/preferences/local_storage";
import Profile from "../screens/profile";
import CallInfo from "../screens/call_info";
import HomeWork from "../screens/home_work";
import Fees from "../screens/fees";
import Attendence from "../screens/attendence";
import ReportCard from "../screens/report_card";
import AnnounceMnents from "../screens/announcements";
import Announcements from "../screens/announcements";
import NoticeBoard from "../screens/notice_board";
import Gallery from "../screens/gallery ";
import Videos from "../screens/videos";
import OnLineClass from "../screens/onlineclass";
import AddHomeWork from "../screens/add_home_work";
import TeachersList from "../screens/teachers_list";
import ClassRoomsList from "../screens/class_rooms_list";
import AddTeacher from "../screens/add_teachers";
import AddStudent from "../screens/add_student";
import TeacherDetails from "../screens/teacher_details";
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    const AuthStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="otpScreen" component={OTPScreen} options={{ headerShown: false }} />
            <Stack.Screen name="landingPage" component={LandingPage} options={{ headerShown: false }} />

        </Stack.Navigator>
    );

    const HomeStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="dashBoard" component={DashBoard} options={{ headerShown: false }} />
            <Stack.Screen name="tracker" component={Tracker} options={{ headerShown: false }} />
            <Stack.Screen name="staffAttendence" component={StaffAttendence} options={{ headerShown: false }} />
            <Stack.Screen name="workingStaff" component={WorkingStaff} options={{ headerShown: false }} />
            <Stack.Screen name="leaveStaff" component={LeaveStaff} options={{ headerShown: false }} />
            <Stack.Screen name="studentsAttendence" component={StudentsAttendence} options={{ headerShown: false }} />
            <Stack.Screen name="leaveLetters" component={LeaveLetters} options={{ headerShown: false }} />
            <Stack.Screen name="staffLeaveLetters" component={StaffLeaveLetters} options={{ headerShown: false }} />
            <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="callinfo" component={CallInfo} options={{ headerShown: false }} />
            <Stack.Screen name="homework" component={HomeWork} options={{ headerShown: false }} />
            <Stack.Screen name="fees" component={Fees} options={{ headerShown: false }} />
            <Stack.Screen name="attendence" component={Attendence} options={{ headerShown: false }} />
            <Stack.Screen name="reportCard" component={ReportCard} options={{ headerShown: false }} />
            <Stack.Screen name="announcements" component={Announcements} options={{ headerShown: false }} />
            <Stack.Screen name="noticeBoard" component={NoticeBoard} options={{ headerShown: false }} />
            <Stack.Screen name="gallery" component={Gallery} options={{ headerShown: false }} />
            <Stack.Screen name="videos" component={Videos} options={{ headerShown: false }} />
            <Stack.Screen name="onlineClass" component={OnLineClass} options={{ headerShown: false }} />
            <Stack.Screen name="addhomework" component={AddHomeWork} options={{ headerShown: false }} />
            <Stack.Screen name="teacherslist" component={TeachersList} options={{ headerShown: false }} />
            <Stack.Screen name="classroomslist" component={ClassRoomsList} options={{ headerShown: false }} />
            <Stack.Screen name="addteacher" component={AddTeacher} options={{ headerShown: false }} />
            <Stack.Screen name="addstudent" component={AddStudent} options={{ headerShown: false }} />
            <Stack.Screen name="teacherdetails" component={TeacherDetails} options={{ headerShown: false }} />

        </Stack.Navigator>

    );

    const [loginDetails, setLoginDetails] = useState(null);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        console.log('navigation');

        const getToken = async () => {
            let token = await getAuthTokenDetails();
            console.log('token::', token);
            setLoginDetails(token);
        };
        getToken();
        // return () => {
        //     setLoginDetails(null);
        // };
    }, []);
    console.log('logindetails======>>', loginDetails);

    return (
        <ApplicationContext.Provider value={{ loginDetails, setLoginDetails, userDetails, setUserDetails }}>
            <NavigationContainer>
                {!loginDetails || loginDetails.trim() === "" ? <AuthStack /> : <HomeStack />}
            </NavigationContainer>
        </ApplicationContext.Provider>
    );
};

export default RootNavigation;
