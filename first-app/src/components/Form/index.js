import React, { useState } from "react"
import { Text, View, TextInput, Button, TouchableOpacity, Pressable, Keyboard} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState("Digite o valor do peso e da altura")
    const [imc, setImc] = useState(null)
    const [buttonMsg, setButtonMsg] = useState("Calcular")

    function calcularImc() {
        let heightFormat = height.replace(',','.')
        let weightFormat = weight.replace(',','.')
        return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))
    }

    function validator() {
        if (height != null && weight != null) {
            calcularImc()
            setHeight(null)
            setWeight(null)
            setButtonMsg("Calcular novamente")
            setMessage("O seu IMC é igual à")
            Keyboard.dismiss()
            return
        }

        setImc(null)
        setButtonMsg("Calcular")
        setMessage("Digite o valor do peso e da altura")
    }

    return(
        <Pressable style={styles.formContainer} onPress={Keyboard.dismiss}>
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
        </Pressable>
    );
}
