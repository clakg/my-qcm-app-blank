import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";
import {saveLaundry} from "../Store/actions/actionLaundry";
import {connect} from "react-redux";

class FormLaundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.laundry ? this.props.laundry.title : '',
            city: this.props.laundry ? this.props.laundry.city : '',
        };
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder={'Nom de la laverie'}/>
                <TextInput value={this.state.city} onChangeText={text => this.setState({ city: text })} placeholder={'Ville'}/>
                <Button onPress={() => this.props.saveLaundry({ title: this.state.title, city: this.state.city })} title='Enregistrer'/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveLaundry: (laundry) => dispatch(saveLaundry(laundry))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLaundry);