import { createBottomTabNavigator } from "react-navigation-tabs";
import LaundryTab from "../screens/tabs/LaundryTab";
import SuggestTab from "../screens/tabs/SuggestTab";

const MyTabNavigator = {

    LaundryTab: LaundryTab,
    SuggestTab: SuggestTab,
};

export default createBottomTabNavigator(MyTabNavigator);