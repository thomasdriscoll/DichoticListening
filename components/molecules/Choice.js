import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import {SquareButton} from '../atoms/squareButton';

export function Choice({ navigation }){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SquareButton 
                title="Word1"
                navigation = {navigation}
            />
            <SquareButton 
                title="Word2"
                navigation = {navigation}
            />  
        </View>  
    );
}
