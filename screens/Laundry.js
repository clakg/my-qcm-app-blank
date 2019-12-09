import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../Stylesheet";

class Laundry extends Component {

    static navigationOptions = ({ navigation }) => {
        const laundry = navigation.getParam('laundry');
        return {
            title: laundry.title,
                headerTitleStyle: {
                textAlign: 'left'
            },
            headerRight: (
                <View style={styles.btnHeaderContainer}>
                    <TouchableOpacity style={[ styles.btn, styles.btnHeader, styles.btnDanger ]} onPress={() => {
                        fetch(process.env.API_URL + '/laundries/' + laundry._id, { method: 'delete' })
                            .then(response => response.json())
                            .then(data => navigation.navigate('Search'))
                            .catch(err => console.log(err))
                        ;
                    }} >
                        <Text style={styles.btnDangerText}>Supprimer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.btn, styles.btnHeader, styles.btnWarning ]} onPress={() => navigation.navigate('EditLaundry', { laundry: laundry })}>
                        <Text style={styles.btnWarningText}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            )
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