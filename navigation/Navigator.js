import { createStackNavigator , createBottomTabNavigator} from "react-navigation";
import Search from "../screens/Search";
import Laundry from "../screens/Laundry";
import FormLaundry from "../screens/FormLaundry";

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigatorOptions: {
            title: 'Rechercher'
        }
    },
    Laundry: {
        screen: Laundry
    }
})

const LaundryTabNavigator = createBottomTabNavigator ({
    Search: {
        screen: SearchStackNavigator
    },
    FormLaundry: {
        screen: FormLaundry
    }

})

export default LaundryTabNavigator