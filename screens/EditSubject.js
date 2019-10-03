import React, {Component} from 'react';
import { View } from "react-native";
import {StackActions, NavigationActions} from 'react-navigation';
import FormSubject from "./FormSubject";

class EditSubject extends Component {

    static navigationOptions = ({ navigation }) => {
        const subject = navigation.getParam('subject');
        return {
            title: subject.title
        }
    };

    render() {

        const subject = this.props.navigation.getParam('subject');

        return (
            <View>
                <FormSubject subject={subject} onSave={() => {
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

export default EditSubject;