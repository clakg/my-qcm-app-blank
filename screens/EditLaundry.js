import React, {Component} from 'react';
import { View } from "react-native";
import {StackActions, NavigationActions} from 'react-navigation';
import FormLaundry from "./FormLaundry";
import { connect } from 'react-redux'


class EditLaundry extends Component {

    static navigationOptions = ({ navigation }) => {
        const laundry = navigation.getParam('laundry');
        return {
            title: laundry.title,
            city: laundry.city,
            address: laundry.address,
        }
    };

    render() {

        const laundry = this.props.navigation.getParam('laundry');
        console.log(laundry)
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

export default connect()(EditLaundry);