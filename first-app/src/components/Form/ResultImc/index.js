import {Text, View } from 'react-native';
import styles from './style'

export default function ResultImc(props) {
    return(
        <View>
            <Text style={styles.resultMessage}>{props.messageResultImc}</Text>
            <Text style={styles.resultNumber}>{props.resultImc}</Text>
        </View>
    );
}