import React from 'react';
import { View,Text } from 'react-native';
import styles from './HomeScreen.style';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                HomeScreen
            </Text>
        </View>
    );
};

export default HomeScreen;
