import React, {Component} from 'react';
import FormLaundry from "./FormLaundry";

class NewLaundry extends Component {

    render() {
        return (
            <FormLaundry onSave={(data) => this.props.navigation.navigate('Home')}/>
        );
    }

}

export default NewLaundry;