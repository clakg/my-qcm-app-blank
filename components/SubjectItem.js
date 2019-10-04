import React, {Component} from 'react';
import { View, Text, Button } from "react-native";

class SubjectItem extends Component {
    render() {

        const {title} = this.props.subject;

        let button = null;

        if (typeof this.props.onClick === 'function') {
            button = <Button onPress={() => this.props.onClick()} title='Afficher'/>;
        }

        return (
            <View>
                <Text style={{borderWidth : 1 ,backgroundColor: 'white', paddingVertical: 10, textAlign: 'center'}}>{title}</Text>
                {button}
            </View>
        );
    }
}

export default SubjectItem;