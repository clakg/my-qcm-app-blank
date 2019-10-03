import { createBottomTabNavigator } from "react-navigation-tabs";
import Location from "../screens/sensors/Location";
import MyImagePicker from "../screens/sensors/MyImagePicker";

const SensorNavigator = {

    Location: Location,
    MyImagePicker: MyImagePicker
};

export default createBottomTabNavigator(SensorNavigator);