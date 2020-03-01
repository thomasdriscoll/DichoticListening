import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import { Audio } from 'expo-av';

export function Sound({ navigation }){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Insert sound image */}
            <Button 
                title="Play"
                onPress= {() => {
                    playSound();
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

async function playSound(){
    const soundObject = new Audio.Sound();
    try{
        await soundObject.loadAsync(require('../../assets/sounds/DL_'+(global.position+1).toString()+'.mp4'));
        await soundObject.playAsync();
    }
    catch(err){
        console.log('Never works on the first try :/');
    }
}