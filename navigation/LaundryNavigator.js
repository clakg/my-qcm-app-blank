import Laundry from "../screens/Laundry";
import LaundryTab from "../screens/tabs/LaundryTab";
import {createBottomTabNavigator} from "react-navigation-tabs";


const LaundryNavigator = {
    LaundryTab: LaundryTab,
    Laundry: Laundry,
};

export default createBottomTabNavigator(LaundryNavigator);