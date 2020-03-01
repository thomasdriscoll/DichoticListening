import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import { Audio } from 'expo-av';

let playedFlag = false;

export function Sound({ navigation }){
    return(
        <View style={styles.container}>
            {/* Insert sound image */}
            <Button 
                title="Play"
                onPress= {() => {
                    playSound();
                    playedFlag = true;
                }}
                style={styles.button}
                // Insert "play" image here
            /> 
            <Button 
                title="Next"
                onPress = {() => {
                    if(playedFlag){
                        playedFlag = false;
                        navigation.navigate('Choice')
                    }
                }}
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