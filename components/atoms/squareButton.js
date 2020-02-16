import React, { Component } from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';


export class SquareButton extends Component{
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
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
