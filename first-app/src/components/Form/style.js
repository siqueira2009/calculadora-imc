import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 40,
        paddingTop: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    form: {
        width: '100%',
        height: 'auto',
        paddingLeft: 50,
        paddingRight: 50,
    },

    formLabel: {
        width: '100%',
        fontSize: 18,
    },
    
    formLabel2: {
        width: '100%',
        fontSize: 18,
        marginTop: 30
    },

    formInput: {
        width: '100%',
        borderBottomColor: '#FF0043',
        borderBottomWidth: 1.5 ,
        marginTop: 10,
        marginBottom: 10,
        
    },

    formButtonText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },

    formButton: {
        width: '100%',
        height: 'auto',
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: '#FF0043',
        borderRadius: 10,
    },

    resultContainer: {
        width: '100%'
    },
});

export default styles