import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';

export const Form = ({ title, width, height, getData, button, buttonStyle, buttonWidth }) => {
    const [text, setText] = useState(null);

    const onPress = () => {
        getData(text);
    }

    return (
        <>
            <SafeAreaView>
                <TextInput
                    style={styles(width, height).text}
                    placeholder={title}
                    onChangeText={setText}
                    value={text}
                />
            </SafeAreaView>
            <View style={[styles(undefined, undefined, buttonWidth).button, buttonStyle]}>
                {button ? <Button title='Submit' onPress={onPress} /> : <></>}
            </View>
        </>
    );
}

const styles = (width, height, buttonWidth) => StyleSheet.create({
    text: {
        height: height ? height : 30,
        width: width ? width : 350,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        shadowColor: '#006084',
        borderBottomColor: '#006084',
        borderColor: '#006084',
        borderRadius: 15,
        margin: 2,
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        width: buttonWidth ? buttonWidth : 100,
    }
});