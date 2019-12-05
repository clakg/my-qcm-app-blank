import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LaundryNavigator from "./LaundryNavigator";
import MyTabNavigator from "./MyTabNavigator";



const AppNavigator = createStackNavigator(
    {

        Laundry: MyTabNavigator,
        LaundryNavigator: LaundryNavigator
    },
    {
        initialRouteName: 'Laundry'
    }
);


export default createAppContainer(AppNavigator);