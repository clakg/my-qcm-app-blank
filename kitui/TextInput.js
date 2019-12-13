import React, {Component} from 'react';
import { TextInput as DefaultTextInput } from 'react-native';

class TextInput extends Component {
    render() {
        return (
            <DefaultTextInput style={{ backgroundColor: 'white' }} {...this.props}/>
        );
    }
}

export default TextInput;