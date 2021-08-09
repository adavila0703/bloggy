import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';
import { Form } from '../../components/Form';
import { CustomButton } from '../../components/CustomButton';
import { ProfilePicture } from './ProfilePicture';
import { mainColor } from '../../utils/MainStyles';

export const Profile = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.scrollContents}>
                    <Text style={styles.title}>Edit Profile</Text>
                    <ProfilePicture />
                    <Form title="Name" />
                    <Form title="Age" />
                    <Form title="Ocupation" />
                    <Form title="Relationship Status" />
                    <Form title="Details" height={200} />
                    <CustomButton title='Save' size={100} onPress={() => setNumber(number + 1)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainColor,
        width: '100%',
        height: '100%',
        
    },
    scrollContents:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',

    }
});