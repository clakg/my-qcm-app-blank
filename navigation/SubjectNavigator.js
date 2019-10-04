import { createStackNavigator } from "react-navigation-stack";
import SubjectScreen from "../screens/Subject";
import QcmTab from "../screens/tabs/QcmTab";

const SubjectNavigator = {
    QcmTab: QcmTab,
    Subject: SubjectScreen
};

export default createStackNavigator(SubjectNavigator);