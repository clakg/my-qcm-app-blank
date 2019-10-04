import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import SubjectNavigator from "./SubjectNavigator";
import NewSubject from "../screens/NewSubject";
import MyTabNavigator from "./MyTabNavigator";



const AppNavigator = createDrawerNavigator(
    {

        QCM: MyTabNavigator,
        NewSubject: NewSubject,
        SubjectNavigator: SubjectNavigator


    },
    {
        initialRouteName: 'QCM'
    }
);


export default createAppContainer(AppNavigator);