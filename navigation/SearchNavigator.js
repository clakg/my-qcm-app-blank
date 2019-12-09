import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";
import LaundryScreen from "../screens/Laundry";
import EditLaundry from "../screens/EditLaundry";

const SearchNavigator = {
    Search: SearchScreen,
    Laundry: LaundryScreen,
    EditLaundry: EditLaundry
};

export default createStackNavigator(SearchNavigator);