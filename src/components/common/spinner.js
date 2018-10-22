import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({spinnerSize}) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={spinnerSize || 'large'}/>
        </View>
    );
};

const styles = {
    spinnerStyle : {
        flex: 1, //To fill the full screen
        justifyContent : 'center',
        alignItems : 'center'
    }
}

export { Spinner };