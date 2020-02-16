import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

export function Sound({ navigation }){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Insert sound image */}
            <Button 
                title="Play"
                onPress= {() => {
                    Alert.alert('Simple button pressed');
                }}
                // Insert "play" image here
            /> 
            <Button 
                title="Next"
                onPress = {() => {
                    if(true){
                        navigation.navigate('Choice')
                    }
                }}
            />           
        </View>
    );
}