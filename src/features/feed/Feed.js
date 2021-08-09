import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { mainColor } from '../../utils/MainStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Feed = () => {
    const [feedList, setFeedList] = useState(null);
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;

    const loadBlogs = async () => {
        try {
            const blogList = await AsyncStorage.getItem('blog');
            if (JSON.parse(blogList).length) {
                setFeedList(JSON.parse(blogList));
            }
        } catch (e) {
            console.log(e);
        }
    }
    console.log(windowHeight)

    useEffect(() => {
        loadBlogs();
        
    }, []);

    return (
        <View style={styles(windowHeight).blogContainer}>
            <View style={styles().title}>
                <Text style={styles().titleText}>Bloggy Feed</Text>
            </View>
            <FlatList
                data={feedList}
                renderItem={
                    ({item}) =>
                            <View style={styles().list}>
                                <Text style={styles().blogTitle}>{item[0]}</Text>
                                <Text style={styles().blogDetails}>{item[1]}</Text>
                            </View>
                    } 
                    keyExtractor={(item, index) => index.toString()}/>
        </View>
    );
}

const styles = (windowHeight) => StyleSheet.create({
    blogContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: mainColor,
        width: '100%',
        alignContent: 'center',
        bottom: windowHeight / 10,
        marginTop: 50,
    },
    title: {
        fontFamily: 'Didot, serif',
        marginTop: 50,
    },
    titleText: {
        fontSize: 30,
    },
    list: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 350,
        shadowColor: '#FFFFFF',
        borderRadius: 15,
        alignItems: 'center'
    },
    blogTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    blogDetails: {

    }
});

