import Subject from "../screens/Subject";
import QcmTab from "../screens/tabs/QcmTab";
import {createBottomTabNavigator} from "react-navigation-tabs";


const SubjectNavigator = {
    QcmTab: QcmTab,
    Subject: Subject,
};

export default createBottomTabNavigator(SubjectNavigator);