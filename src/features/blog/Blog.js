import React, { useState, useEffect } from 'react';
import { ViewBase, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { mainColor } from '../../utils/MainStyles';
import { Form } from '../../components/Form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlogForm } from './BlogForm';

export const Blog = () => {
    const [blog, setBlog] = useState([]);

    const combineBlogs = (data) => {
        setBlog([...blog, data]);
    }

    const storeBlogs = async () => {
        try {
            await AsyncStorage.setItem('blog', JSON.stringify(blog))
        } catch (e) {
            console.log(e)
        }
    }

    const loadBlogs = async () => {
        try {
            const blogList = await AsyncStorage.getItem('blog');
            if (blog && JSON.parse(blogList).length) {
                setBlog(JSON.parse(blogList));
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadBlogs();
    }, []);

    useEffect(() => {
        storeBlogs();
    }, [blog]);

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.blogContainer}>
                <View style={styles.title}>
                    <Text style={styles.text}>Create Blog Post</Text>
                </View>
                <BlogForm getData={(data) => combineBlogs(data)} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: mainColor,
        width: '100%',
        alignContent: 'center',
    },
    blogContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    title: {
        fontFamily: 'Didot, serif',
        marginTop: 50,
    },
    text: {
        fontSize: 30
    }
});
