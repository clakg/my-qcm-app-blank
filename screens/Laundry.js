import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
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
            <View style={styles.main_container}>

                <Image
                    style={styles.image}
                    source={{uri: process.env.API_URL + '/images/' + laundry.topImage.filename }}
                />

                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{laundry.title}</Text>
                        <Text style={styles.city_text}>{laundry.city}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{laundry.address}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.description_text}>Créée le : {laundry.createdAt} </Text>
                    </View>
                </View>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        initialLaundry: state.initialLaundry

    };
};

export default connect(mapStateToProps)(Laundry);