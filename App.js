import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Button, Dimensions, useWindowDimensions, Touchable, TouchableOpacity } from 'react-native';
import { Profile } from './src/features/profile/Profile';
import { Feed } from './src/features/feed/Feed';
import { Blog } from './src/features/blog/Blog';
import 'react-native-gesture-handler';
import { CustomButton } from './src/components/CustomButton';
import Icon from 'react-native-ico-material-design';

const App = () => {
  const [page, setPage] = useState(<Feed></Feed>);
  const [count, setCount] = useState(0);
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles().main}>
      {page}
      <View style={styles(windowHeight).navContainer}>
        <View style={styles().navBar}>
          <TouchableOpacity onPress={() => setPage(<Feed windowWidth={windowWidth} windowHeight={windowHeight} ></Feed>)}>
            <Icon height="60" width="100" name="add-comment-button" background="circle" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage(<Blog></Blog>)}>
            <Icon height="60" width="100" name="add-button-inside-black-circle" background="circle" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage(<Profile></Profile>)}>
            <Icon height="60" width="100" name="framed-portrait" background="circle" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = (height) => StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    height: height / 10,
    backgroundColor: '#02B5CA',
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    bottom: -5,
    justifyContent: 'space-evenly',
    borderRadius: 0,
  },
  iconBehave: {
    padding: 14,
  }
});
