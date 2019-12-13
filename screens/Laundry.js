import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from '../Stylesheet';
import {Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux'

class Laundry extends Component {

    static navigationOptions = ({ navigation }) => {
        const laundry = navigation.getParam('laundry');
        return {
            title: laundry.title,
            headerRight: (
                <View style={styles.btnHeaderContainer}>
                    <TouchableOpacity style={[ styles.btn, styles.btnHeader ]} onPress={() => {
                        fetch(process.env.API_URL + '/laundries/' + laundry._id, { method: 'delete' })
                            .then(response => response.json())
                            .then(data => navigation.navigate('Search'))
                            .catch(err => (err))
                        ;
                    }} >
                        <Text><Ionicons name="ios-trash" size={28} color="black" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.btn, styles.btnHeader ]}
                                      onPress={() => navigation.navigate('EditLaundry', { laundry: laundry })}>
                        <Text><Ionicons name="md-create" size={28} color="black" /></Text>
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
                <Text style={{ padding: 10 }}>{laundry.city}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialLaundry: state.initialLaundry
    };
};


export default connect(mapStateToProps)(Laundry);