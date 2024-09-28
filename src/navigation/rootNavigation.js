import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/logIn";
import DashBoard from "../screens/dash_board";
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="dashBoard" component={DashBoard} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;