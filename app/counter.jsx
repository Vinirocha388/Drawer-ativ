import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import { useState } from 'react'; 
import CustomHeader from '../components/CustomHeader';


export default function Counter () {

    const [counter, setCounter] = useState(0);

    const sum = () => {
        setCounter(counter + 1);
    }
    const subtract = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <CustomHeader />
        <View style={styles.container}>

            <Text style={styles.title}>Contador</Text>
            <Text style={styles.subtitle}>Aqui esta o contador:</Text>

            <View style={styles.counterContent}>
                <Pressable id="btn" onPress={subtract} style={styles.subtract}>Subtrair</Pressable>
                <Text id="num" style={styles.num}>{counter}</Text>
                    <Pressable id="btn" onPress={sum} style={styles.sum}>Somar</Pressable>
            </View>

        <View style={styles.reset}>
            <Pressable id="btn" onPress={reset} style={styles.reset}>Resetar</Pressable>
            </View>    
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },
    counterContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20,
    },
    sum: {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#fff',
    },
    subtract: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    reset: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5,
        alignSelf: 'center', // Centraliza o botão de reset horizontalmente
    },
    num: {
        color: '#fff',
        marginHorizontal: 20,
        fontSize: 24,
        textAlign: 'center', // Centraliza o texto do número
    },
});