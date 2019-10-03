import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import NewSubject from "../screens/NewSubject";
import SensorNavigator from "./SensorNavigator";


const AppNavigator = createDrawerNavigator(
    {
        Home: Home,
        NewSubject: NewSubject,
        Sensors: SensorNavigator

    },
    {
        initialRouteName: 'Home'
    }
);


export default createAppContainer(AppNavigator);