import { createBottomTabNavigator } from "react-navigation-tabs";
import QcmTab from "../screens/tabs/QcmTab";
import SuggestTab from "../screens/tabs/SuggestTab";

const MyTabNavigator = {

    QcmTab: QcmTab,
    SuggestTab: SuggestTab
};

export default createBottomTabNavigator(MyTabNavigator);