import React, {Component} from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import LaundryItem from "./../../components/LaundryItem";

class LaundryTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            laundries: [],
            title: '',
            page:1
        };
    }

    componentDidMount() {
        this.fetchLaundries();
    }

    fetchLaundries() {
        console.log(process.env.API_URL + '/laundries?page=')
        fetch(process.env.API_URL + '/laundries?page=' + this.state.page) // charge la liste des sujets dans le state
            .then(response => response.json())
            .then(data => this.setState({
                laundries: [...this.state.laundries, ...data.laundries]
            }))
    }

    render(){
        return (
            <View style={{ flex: 3, padding: 20, backgroundColor: '#BBD2E1' }}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight:'bold', margin:20 }}>LAVERIE</Text>
                <FlatList data={this.state.laundries} renderItem={ ({item}) => <LaundryItem laundry={item} onClick={ () => this.props.navigation.navigate('Laundry', { laundry: item })}/> } keyExtractor={(item, index) => index.toString()}
                />
                <Button onPress={() => this.setState({page: this.state.page + 1}, () => this.fetchLaundries())} title='⏬'/>
            </View>
        );
    }
}

export default LaundryTab;