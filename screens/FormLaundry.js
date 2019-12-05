import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";

class FormSubject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.subject ? this.props.subject.title : ''
        };
    }

    saveSubject() {
        const method = this.props.subject ? 'PUT' : 'POST';
        let url = process.env.API_URL + '/subjects';
        if (this.props.subject) {
            url += '/' + this.props.subject._id;
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
                <TextInput value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder={'Nom du sujet'}/>
                <Button onPress={() => this.saveSubject()} title='Enregistrer'/>
            </View>
        );
    }
}

export default FormSubject;