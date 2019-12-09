import { createBottomTabNavigator } from "react-navigation-tabs";
import ImageSelector from "../screens/sensors/ImageSelector";

const SensorNavigator = {
    ImageSelector: ImageSelector
};

export default createBottomTabNavigator(SensorNavigator);