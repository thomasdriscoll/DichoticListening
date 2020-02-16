import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import {SquareButton} from '../atoms/squareButton';

let words = require("../../words.json");

export function Choice({ navigation }){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> What did you hear?</Text>
            <SquareButton 
                title= {words.words[global.position].word1}
                navigation = {navigation}
            />
            <SquareButton 
                title= {words.words[global.position].word2}
                navigation = {navigation}
            />  
        </View>  
    );
}
