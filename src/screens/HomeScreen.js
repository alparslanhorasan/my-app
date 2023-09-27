//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.forText}>Home Screen</Text>
         </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    forText: {
        fontSize:50,
        color: 'yellow',
    },
});

//make this component available to the app
export default HomeScreen;