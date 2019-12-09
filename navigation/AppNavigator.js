import React from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewLaundry from "../screens/NewLaundry";
import SensorNavigator from "./SensorNavigator";

const AppNavigator = createDrawerNavigator(
    {

        Home: Home,
        Rechercher: SearchNavigator,
        Ajouter: NewLaundry,
        Image: SensorNavigator,
    },
    {
        initialRouteName: 'Home'
    }
);


export default createAppContainer(AppNavigator);