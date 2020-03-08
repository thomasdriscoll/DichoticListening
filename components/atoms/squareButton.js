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
        console.log(this.props.choice);
        if(this.props.choice == "left"){
            global.left++;
        }
        else{
            global.right++;
        }
        if(global.position === 9){
            global.position = 0;
            this.props.navigation.navigate('Result');
        }
        else{
            this.props.navigation.navigate('Sound');
        }
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
