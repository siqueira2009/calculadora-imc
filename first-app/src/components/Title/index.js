import { Text, View } from 'react-native';
import styles from './style'

export default function Title() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calcular IMC</Text>
        </View>
    );
}