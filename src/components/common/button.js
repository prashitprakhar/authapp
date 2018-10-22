import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({children, onPressEvent}) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPressEvent}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle : {
        alignSelf : 'center',
        color : '#000000',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10
    },
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        borderColor : '#000000',
        backgroundColor : '#ffffff',
        borderRadius : 5,
        borderWidth : 1,
        marginLeft : 5,
        marginRight : 5
    }
}
//borderColor : '#007aff',
export { Button };