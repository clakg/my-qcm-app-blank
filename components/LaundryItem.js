import React, {Component} from 'react';
import { View, Text, Button } from "react-native";

class LaundryItem extends Component {
    render() {
        console.log(this.props.laundry.title)

        /*const laundry = this.props.laundry*/

        let button = null;
        if (typeof this.props.onClick === 'function') {
            button = <Button onPress={() => this.props.onClick()} title='Afficher'/>;
        }

        return (
            <View>
                <Text style={{fontWeight: 'bold', color: '#808080' ,borderWidth : 0.1 ,backgroundColor: 'white', paddingVertical: 10, textAlign: 'center'}}>
                    {this.props.laundry.title}
                </Text>
                {button}
            </View>
        );
    }
}

export default LaundryItem;