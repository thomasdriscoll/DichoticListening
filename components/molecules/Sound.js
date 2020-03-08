import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import { Audio } from 'expo-av';

let playedFlag = false;

export class Sound extends React.Component{
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }

    componentDidMount(){
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false
        });
    }

    render(){
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
                            this.navigation.navigate('Choice')
                        }
                    }}
                    style = {styles.button}
                />           
            </View>
        );
    }
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
        switch(global.position){
            case 0:
                await soundObject.loadAsync(require('../../assets/sounds/DL_1.mp4'));
                break;
            case 1:
                await soundObject.loadAsync(require('../../assets/sounds/DL_2.mp4'));
                break;
            
            case 2:
                await soundObject.loadAsync(require('../../assets/sounds/DL_3.mp4'));
                break;
            case 3:
                await soundObject.loadAsync(require('../../assets/sounds/DL_4.mp4'));
                break;
            case 4:
                await soundObject.loadAsync(require('../../assets/sounds/DL_5.mp4'));
                break;
            case 5:
                await soundObject.loadAsync(require('../../assets/sounds/DL_6.mp4'));
                break;
            case 6:
                await soundObject.loadAsync(require('../../assets/sounds/DL_7.mp4'));
                break;
            case 7:
                await soundObject.loadAsync(require('../../assets/sounds/DL_8.mp4'));
                break;
            case 8:
                await soundObject.loadAsync(require('../../assets/sounds/DL_9.mp4'));
                break;
            default:
                break;
        }
        await soundObject.playAsync();
    }
    catch(err){
        console.log(err);
    }
}