import React, { useState } from "react"
import { Text, View, TextInput, Button, TouchableOpacity} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState("Digite o valor do peso e da altura")
    const [imc, setImc] = useState(null)
    const [buttonMsg, setButtonMsg] = useState("Calcular")

    function calcularImc() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validator() {
        if (height != null && weight != null) {
            calcularImc()
            setHeight(null)
            setWeight(null)
            setButtonMsg("Calcular novamente")
            setMessage("O seu IMC é igual à")
            return
        }

        setImc(null)
        setButtonMsg("Calcular")
        setMessage("Digite o valor do peso e da altura")
    }

    return(
        <View style={styles.formContainer}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura (M)</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight} value={height} style={styles.formInput}/>
                <Text style={styles.formLabel2}>Peso (KG)</Text>
                <TextInput placeholder="Ex: 75.7" keyboardType="numeric" onChangeText={setWeight} value={weight} style={styles.formInput}/>
                
                <TouchableOpacity onPress={() => validator()} style={styles.formButton}>
                    <Text style={styles.formButtonText}>{buttonMsg}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.resultContainer}>
                <ResultImc messageResultImc={message} resultImc={imc}/>
            </View>
        </View>
    );
}
