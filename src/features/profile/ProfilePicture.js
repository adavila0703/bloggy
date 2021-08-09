import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const ProfilePicture = () => {
    return(
        <>
           <Image style={styles.tinyLogo} source={{ uri: 'https://avatars.githubusercontent.com/u/36370758?v=4' }}></Image> 
        </>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 60,
    }
});