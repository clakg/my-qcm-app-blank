import React, {Component} from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import TextInput from "../kitui/TextInput";
import SubjectItem from '../components/SubjectItem';

class Home extends Component {

    constructor(props){
        super(props);
            this.state = {
                subjects: [],
                title: '',
                /*questions: [
                    {
                        title: '',
                        answers: [
                            {
                                answer: '',
                                isValidAnswer: true
                            }
                        ]

        }
                ]*/
            };
    }

    componentDidMount() {
        this.fetchSubjects();
    }

    fetchSubjects() {
        console.log(process.env.API_URL)
        fetch(process.env.API_URL + '/subjects') // charge la liste des sujets dans le state
            .then(response => response.json())
            .then(subjects => this.setState({subjects: [...this.state.subjects, ...subjects]}))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
            });
    }

    addSubject(){
        const subject =  { title: this.state.title};
        this.setState({
            subjects: [...this.state.subjects, subject]
        });
    }

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text>Home</Text>
                <FlatList data={this.state.subjects}
                          renderItem={({item}) => <SubjectItem subject={item}/>}
                          keyExtractor={(item, index) => index.toString()}
                />
                <TextInput style={{ justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'lightgrey', padding: 10 }}
                           onChangeText={text => this.setState({ title: text })}
                           value={this.state.title}
                           placeholder='Titre du sujet'
                           keyboardType='default'
                />
                <Button onPress={() => this.addSubject()} title='Ajouter un Sujet'/>
            </View>
        );
    }
}

export default Home;