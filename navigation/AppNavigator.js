import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import NewSubject from "../screens/NewSubject";
import MyTabNavigator from "./MyTabNavigator";


const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        Tabs: MyTabNavigator,
        NewSubject: NewSubject,


    },
    {
        initialRouteName: 'Tabs'
    }
);


export default createAppContainer(AppNavigator);