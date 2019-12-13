import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from 'react-redux';
import Store from './Store/configureStore';

export default function App() {

    return (
        <Provider store={Store}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <AppNavigator/>
            </KeyboardAvoidingView>
        </Provider>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight
    },
});