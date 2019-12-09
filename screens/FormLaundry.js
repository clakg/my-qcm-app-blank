import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";

class FormLaundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.laundry ? this.props.laundry.title : ''
        };
    }

    saveLaundry() {
        const method = this.props.laundry ? 'PUT' : 'POST';
        let url = process.env.API_URL + '/laundries';
        if (this.props.laundry) {
            url += '/' + this.props.laundry._id;
        }
        fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title })
        })
            .then(response => response.json())
            .then(data => {
                if (typeof this.props.onSave === 'function') {
                    this.props.onSave(data);
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder={'Nom de la laverie'}/>
                <Button onPress={() => this.saveLaundry()} title='Enregistrer'/>
            </View>
        );
    }
}

export default FormLaundry;