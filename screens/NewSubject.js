import React, {Component} from 'react';
import {View, TextInput, Button} from "react-native";

class NewSubject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    saveSubject() {
        fetch(process.env.API_URL + '/subjects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title })
        })
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

export default NewSubject;