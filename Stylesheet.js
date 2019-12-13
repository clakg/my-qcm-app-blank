import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    btnHeaderContainer: {
        flexDirection: 'row'
    },
    btnHeader: {
        marginRight: 10
    },
    btn: {
        padding: 10
    },
    btnDanger: {
        backgroundColor: '#dc3545',
    },
    btnDangerText: {
        color: '#fff'
    },
    btnWarning: {
        backgroundColor: '#000000',
    },
    btnWarningText: {
        color: '#fff'
    },
    textInputArea: {
        margin: 10,

        height: 50,
        borderColor: '#888888',
        borderWidth: 1,
        paddingLeft: 15
    },
    resultInputArea:{
        fontWeight: 'bold',
        margin: 10,
        color: '#888888' ,
        borderWidth : 0 ,
        backgroundColor: 'white',
        paddingVertical: 10,
        textAlign: 'center'
    }
});

export default styles;