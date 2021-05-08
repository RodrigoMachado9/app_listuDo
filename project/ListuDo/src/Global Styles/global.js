import {
    StyleSheet,
} from 'react-native';

    export const GlobalStyles = StyleSheet.create({

        container: {
            padding: 20,
        },

        title: {
            fontWeight: 'bold',
            fontSize: 25,
            marginBottom: 10
        },

        field: {

            borderWidth: 1,
            borderColor: '#dcdcdc',
            borderRadius: 6,
            padding: 10,
            fontSize: 15,
            marginBottom: 20    


        },

        button: {

            backgroundColor: "#00cc99",
            padding: 10,
            borderRadius: 6,
            justifyContent: 'center'

        },

        buttonText: {

            color: "#fdfdfd"

        },

        errorText: {
            margin:0,
            color: 'grey'

        },

        formLabel: {

            padding: 5,
            
        }

    });
