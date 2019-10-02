import React, {Component} from 'react';
import { View, Text } from "react-native";

class SubjectItem extends Component {
    render() {

        const {title} = this.props.subject;

        return (
            <View>
                <Text>{title}</Text>

            </View>
        );
    }
}

export default SubjectItem;