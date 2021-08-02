import React from 'react'

import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'

export default OnboardingItem = ({item}) => {

    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        flex: 1,
        justifyContent: 'center',

    }
})
