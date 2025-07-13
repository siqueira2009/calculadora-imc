import { StyleSheet } from 'react-native';
import ResultImc from '.';

const styles = StyleSheet.create({

    resultMessage: {
        textAlign: 'center',
        fontSize: 20,
    },

    resultNumber: {
        fontSize: 50,
        textAlign: 'center',
        color: '#FF0043',
        fontWeight: 'bold'
    },

    shareBtn: {
        backgroundColor: '#1877f2',
        width: '30%',
        marginBottom: 25,
        paddingTop: 3.5,
        paddingBottom: 3.5,
        borderRadius: 100
    },

    shareTxt: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },

    shareView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    resultClasse: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20
    },

    classe: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        color: '#FF0043'
    }
})

export default styles