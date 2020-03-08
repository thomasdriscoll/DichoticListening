import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

export function Result({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Right Score: {global.right}</Text>
            <Text>Left Score: {global.left}</Text>
            <Button 
                title="Restart"
                onPress = {() => {
                    global.right = 0;
                    global.left = 0;
                    navigation.navigate('Sound');
                }}
            />
        </View>
    );
}