import React, {Component} from 'react';
import { View, Text, FlatList, Button, Switch } from 'react-native';
import TextInput from "../kitui/TextInput";
import LaundryItem from "../components/LaundryItem";

class Home extends Component {

    static navigationOptions = {

        title: 'Accueil',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
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
        this.fetchLaundries();
    }

    fetchLaundries() {
        console.log(process.env.API_URL)
        fetch(process.env.API_URL + '/laundries?page=' + this.state.page) // charge la liste des sujets dans le state
            .then(response => response.json())
            .then(data => this.setState({ laundries: [...this.state.laundries, ...data.laundries] }))
    }

    render(){
        return (
            <View style={{ flex: 3, padding: 20, backgroundColor: '#BBD2E1' }}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight:'bold', margin:20 }}>Liste des Laveries</Text>
                <FlatList data={this.state.laundries}
                          renderItem={ ({item}) => <LaundryItem laundry={item}
                                                                onClick={ () => this.props.navigation.navigate('Laundry', { laundry: item })}/> }
                          keyExtractor={(item, index) => index.toString()}
                />
                <Button onPress={() => this.setState({page: this.state.page + 1}, () => this.fetchLaundries())} title='+️'/>
            </View>
        );
    }
}

export default Home;