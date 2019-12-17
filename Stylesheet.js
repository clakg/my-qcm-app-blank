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
    },





    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    city_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
});

export default styles;