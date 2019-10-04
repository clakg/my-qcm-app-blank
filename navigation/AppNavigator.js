import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SubjectNavigator from "./SubjectNavigator";
import MyTabNavigator from "./MyTabNavigator";



const AppNavigator = createStackNavigator(
    {

        QCM: MyTabNavigator,
        SubjectNavigator: SubjectNavigator
    },
    {
        initialRouteName: 'QCM'
    }
);


export default createAppContainer(AppNavigator);