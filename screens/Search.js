import React, {Component} from 'react';
import { View, Text, FlatList, Button } from "react-native";
import TextInput from "../kitui/TextInput";
import LaundryItem from "../components/LaundryItem";
import styles from "../Stylesheet";

class Search extends Component {

    static navigationOptions = {
        title: 'Rechercher une laverie'
    };

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            page: 1,
            count: 0,
            limit: 1,
            laundries: []
        }
    }

    searchChangeText(text) {
        this.setState({ search: text, page: 1 }, () => this.fetchLaundries());
    }

    searchChangePage(change) {
        this.setState({ page: this.state.page + change }, () => this.fetchLaundries());
    }

    fetchLaundries() {
        fetch(process.env.API_URL + '/laundries?search=' + this.state.search + '&page=' + this.state.page)
            .then(response => response.json())
            .then(data => this.setState({ laundries: data.laundries, count: data.count, limit: data.limit }))
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightpink' }}>
                <TextInput value={this.state.search}
                           onChangeText={text => this.searchChangeText(text)}
                           placeholder='Entrez une Ville'
                           style={styles.textInputArea}/>

                <View style={{ flex: 8, backgroundColor: 'lightblue' }}>
                    <FlatList data={this.state.laundries}
                              renderItem={({item}) => <LaundryItem laundry={item}
                                                                   onClick={() => this.props.navigation.navigate('Laundry', { laundry: item })}/>}
                              keyExtractor={(item, index) => index.toString()}/>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'lightgrey', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Button onPress={() => this.searchChangePage(-1)} title='<<' disabled={this.state.page === 1}/>
                    <Button onPress={() => this.searchChangePage(1)} title='>>' disabled={(this.state.page * this.state.limit) >= this.state.count}/>
                </View>
            </View>
        );
    }
}

export default Search;