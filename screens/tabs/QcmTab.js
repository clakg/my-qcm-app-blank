import React, {Component} from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import SubjectItem from "./../../components/SubjectItem";

class QcmTab extends Component {

    static navigationOptions = {
        title: 'QCM',
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
            subjects: [],
            title: '',
            questions: [
                {
                    title: '',
                    answers: [
                        {
                            answer: '',
                            isValidAnswer: true
                        }
                    ]

    }
            ],
            page:1
        };
    }

    componentDidMount() {
        this.fetchSubjects();
    }

    fetchSubjects() {
        console.log(process.env.API_URL + '/subjects?page=')
        fetch(process.env.API_URL + '/subjects?page=' + this.state.page) // charge la liste des sujets dans le state
            .then(response => response.json())
            .then(data => this.setState({ subjects: [...this.state.subjects, ...data.subjects] }))
    }

    render(){
        return (
            <View style={{ flex: 3, padding: 20, backgroundColor: '#BBD2E1' }}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight:'bold', margin:20 }}>QCM</Text>
                <FlatList data={this.state.subjects}
                          renderItem={ ({item}) => <SubjectItem subject={item}
                          onClick={ () => this.props.navigation.navigate('Subject', { subject: item })}/> }
                          keyExtractor={(item, index) => index.toString()}
                />
                <Button onPress={() => this.setState({page: this.state.page + 1}, () => this.fetchSubjects())} title='▽'/>
            </View>
        );
    }
}

export default QcmTab;