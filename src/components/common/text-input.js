import React from 'react';
import { View, Text, TextInput } from 'react-native';

//const state = { text: '' }
const TextInputBar = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { labelStyle, textInputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle}
            />
        </View>

    )
}

const styles = {
    labelStyle: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 18,
        paddingLeft: 5,
        //paddingRight: 5,
        flex: 1
    },
    textInputStyle: {
        flex: 2,
        alignSelf: 'stretch',
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
//borderColor : '#007aff',
export { TextInputBar };