import React, {Component} from 'react';
import { View, Text } from "react-native";

class Subject extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('subject').title
        }
    };

    componentDidMount() {

    }

    render() {

        const subject = this.props.navigation.getParam('subject');


        return (
            <View>
                <Text style={{ padding: 10 }}>{subject.title}</Text>
            </View>
        );
    }
}

export default Subject;