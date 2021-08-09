import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const CustomButton = ({ title, onPress, size, style }) => {
    return(
        <View style={[style, styles(size).button]}>
            <Button title={title} onPress={onPress} />
        </View>
    );
}

const styles = (size) => StyleSheet.create({
    button: {
        width: size,
    },
    test: {
        width: 1000
    }
});