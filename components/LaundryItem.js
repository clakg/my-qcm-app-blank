import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from "react-native";
import styles from "../Stylesheet";
import {Ionicons} from "@expo/vector-icons";

class LaundryItem extends Component {
    render() {

        /*const laundry = this.props.laundry*/

        let button = null;
        if (typeof this.props.onClick === 'function') {
            button = <TouchableOpacity onPress={() => this.props.onClick()}>
                        <Text>
                            <Ionicons name="ios-arrow-dropright" size={40} color="#888888" />
                        </Text>
                     </TouchableOpacity>
        }

        return (
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'orange', marginVertical: 4 }}>
                <View style={{ flex: 5 }}>
                    <Text style={styles.resultInputArea}>{this.props.laundry.title} </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {button}
                </View>
            </View>
        );
    }
}

export default LaundryItem;