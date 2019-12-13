import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";
import NewLaundry from "../screens/NewLaundry";
import SensorNavigator from "./SensorNavigator";
import Icon from '@expo/vector-icons/Ionicons';

const AppNavigator = createDrawerNavigator(
    {

        Home: Home,
        Rechercher: SearchNavigator,
        Ajouter: NewLaundry,
        Image: SensorNavigator,
    },
    {
        initialRouteName: 'Rechercher'
    },

);



export default createAppContainer(AppNavigator);