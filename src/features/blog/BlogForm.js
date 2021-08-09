import React, { useState, useEffect } from 'react';
import { StyleSheet, ViewBase, View, Text, Button, TextInput } from 'react-native';

export const BlogForm = ({ getData }) => {
    const [titleText, setTitleText] = useState(null);
    const [detailsText, setDetailsText] = useState(null);

    const test = () => {
        getData([titleText, detailsText]);
    };
    

    return(
        <>
            <TextInput
                style={styles.title}
                placeholder="Title"
                onChangeText={setTitleText}
                value={titleText}
            />
            <TextInput
                style={styles.detials}
                placeholder="Details"
                onChangeText={setDetailsText}
                value={detailsText}
                multiline={true}
            />
            <View style={styles.button}>
                <Button title='Submit' onPress={() => test()} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        height: 30,
        width: 350,
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
    detials: {
        height: 100,
        width: 350,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        shadowColor: '#006084',
        borderBottomColor: '#006084',
        borderColor: '#006084',
        borderRadius: 15,
        margin: 2,
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    button: {
        width: 100,
        paddingTop: 5,
    }
});