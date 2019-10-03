import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../Stylesheet";

class Subject extends Component {

    static navigationOptions = ({ navigation }) => {
        const subject = navigation.getParam('subject');
        return {
            title: subject.title,
            headerTitleStyle: {
                textAlign: 'left'
            },
            headerRight: (
                <View style={styles.btnHeaderContainer}>
                    <TouchableOpacity style={[ styles.btn, styles.btnHeader, styles.btnDanger ]} onPress={() => {
                        fetch(process.env.API_URL + '/subjects/' + subject._id, { method: 'delete' })
                            .then(response => response.json())
                            .then(data => navigation.navigate('Search'))
                            .catch(err => console.log(err))
                        ;
                    }} >
                        <Text style={styles.btnDangerText}>Supprimer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.btn, styles.btnHeader, styles.btnWarning ]} onPress={() => navigation.navigate('EditSubject', { subject: subject })}>
                        <Text style={styles.btnWarningText}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    };

    render() {

        const subject = this.props.navigation.getParam('subject');

        return (
            <View>
                <Text>{subject.title}</Text>
            </View>
        );
    }
}

export default Subject;