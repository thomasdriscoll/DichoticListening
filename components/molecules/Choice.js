import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import {SquareButton} from '../atoms/squareButton';

let words = require("../../words.json");

export function Choice({ navigation }){
    return (
        <View style={styles.container}>
            <Text> What did you hear?</Text>
            <SquareButton 
                title= {words.words[global.position].word1}
                navigation = {navigation}
                choice = "left"
                style = {styles.button}
            />
            <SquareButton 
                title= {words.words[global.position].word2}
                navigation = {navigation}
                choice = "right"
                style = {styles.button}
            />  
        </View>  
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    button: {
        marginBottom: 20,
    }
});