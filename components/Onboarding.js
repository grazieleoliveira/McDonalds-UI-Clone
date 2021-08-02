import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

import slides from '../slides'
import OnboardingItem from '../components/OnboardingItem'

export default Onboarding = () => {

    return (
        <View style={styles.container}>
            <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item}/>} horizontal showsHorizontalScrollIndicator pagingEnabled bounces={false}/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 0.425,
        justifyContent: "center",
        alignItems: "center",
    }
})