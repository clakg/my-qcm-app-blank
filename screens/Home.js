import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import LaundryItem from "../components/LaundryItem";
import {connect} from "react-redux";
import {loadLaundry} from "../Store/actions/actionLaundry";

class Home extends Component {

    static navigationOptions = {
        title: 'Accueil'
    };


    constructor(props){
        super(props);
        this.state = {
            laundries: [],
            title: '',
            page:1
        };
    }

    componentDidMount() {
        this.props.loadLaundry(1);
    }

    render(){
        return (
            <View style={{ flex: 3, padding: 20, backgroundColor: '#BBD2E1' }}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight:'bold', margin:20 }}>Liste des Laveries</Text>
                <FlatList data={this.props.laundries}
                          renderItem={ ({item}) => <LaundryItem laundry={item}
                                                                onClick={ () => this.props.navigation.navigate('Laundry', { laundry: item })}/> }
                          keyExtractor={(item, index) => index.toString()}
                />
                <Button onPress={() => this.setState({page: this.state.page + 1}, () => this.props.loadLaundry(this.state.page))} title='+'/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        laundries: state.laundries
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadLaundry: (page) => dispatch(loadLaundry(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);