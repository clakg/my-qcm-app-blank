import React, {Component} from 'react';
import { View, Text } from "react-native";

class Laundry extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('laundry').title
        }
    };

    render() {

        const laundry = this.props.navigation.getParam('laundry');

        return (
            <View>
                <Text style={{ padding: 10 }}>{laundry.title}</Text>
            </View>
        );
    }
}

export default Laundry;