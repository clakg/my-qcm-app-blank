import React, {Component} from 'react';
import { View } from "react-native";
import {StackActions, NavigationActions} from 'react-navigation';
import FormLaundry from "./FormLaundry";

class EditLaundry extends Component {

    static navigationOptions = ({ navigation }) => {
        const laundry = navigation.getParam('laundry');
        return {
            title: laundry.title
        }
    };

    render() {

        const laundry = this.props.navigation.getParam('laundry');

        return (
            <View>
                <FormLaundry laundry={laundry} onSave={() => {
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Search' })]
                    });
                    this.props.navigation.dispatch(resetAction);
                }}/>
            </View>
        );
    }
}

export default EditLaundry;