import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";
import {saveLaundry} from "../Store/actions/actionLaundry";
import {connect} from "react-redux";
import styles from "../Stylesheet";

class FormLaundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.laundry ? this.props.laundry.title : '',
            address: this.props.laundry ? this.props.laundry.address : '',
            city: this.props.laundry ? this.props.laundry.city : '',
            topImage: this.props.laundry ? this.props.laundry.topImage: '',
        };
    }

    render() {
        return (
            <View>
                <TextInput style={styles.textInputArea} value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder={'Nom de la laverie'}/>
                <TextInput style={styles.textInputArea} value={this.state.address} onChangeText={text => this.setState({ address: text })} placeholder={'Address'}/>
                <TextInput style={styles.textInputArea} value={this.state.city} onChangeText={text => this.setState({ city: text })} placeholder={'Ville'}/>
                <TextInput style={styles.textInputArea} value={this.state.topImage} onChangeText={text => this.setState({ topImage: text })} placeholder={'image de la devanture'}/>
                <Button onPress={() => this.props.saveLaundry({ title: this.state.title, address: this.state.address, city: this.state.city, topImage: this.state.topImage, })} title='Enregistrer'/>
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