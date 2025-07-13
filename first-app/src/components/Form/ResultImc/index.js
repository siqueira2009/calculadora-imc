import React, { useState } from "react"
import {Text, View, TouchableOpacity, Share} from 'react-native';
import styles from './style'

export default function ResultImc(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: 'Meu IMC é: ' + props.resultImc,
        })
    }

    let classe = ""

    if (props.resultImc < 18.5) {
        classe = "Abaixo do peso ideal"
    } else if (props.resultImc < 24.9) {
        classe = "Peso ideal"
    } else if (props.resultImc < 29.9) {
        classe = "Excesso de peso"
    } else if (props.resultImc < 34.9) {
        classe = "Obesidade grau I"
    } else if (props.resultImc < 39.9) {
        classe = "Obesidade grau II"
    } else {
        classe = "Obesidade grau III"
    }

    return(
        <View>
            <View style={styles.shareView}>
                {props.resultImc != null 
                    ?
                    <TouchableOpacity style={styles.shareBtn} onPress={onShare}>
                        <Text style={styles.shareTxt}>Compartilhar</Text>
                    </TouchableOpacity>
                    :
                    <View/>
                }
            </View>
            
            <Text style={styles.resultMessage}>{props.messageResultImc}</Text>
            <Text style={styles.resultNumber}>{props.resultImc}</Text> 

            {props.resultImc != null 
                ?
                <View>
                    <Text style={styles.resultClasse}>A sua classe é</Text>
                    <Text style={styles.classe}>{classe}</Text>
                </View>
                :
                <View/>
            }
        </View>
    );
}