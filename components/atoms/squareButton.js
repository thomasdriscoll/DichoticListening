import React, { Component } from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';


export class SquareButton extends Component{
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        global.position++;
        console.log(global.position);
        if(global.position === 9){
            this.props.navigation.navigate('Result');
        }
        this.props.navigation.navigate('Sound');
    }

    render(){
        return(
            <Button
                title = {this.props.title}
                onPress = {this.onPress}
            />
            
        );
    }    
}
