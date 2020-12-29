import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gig = ({ title = "I am a default gig" }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default Gig

const styles = StyleSheet.create({})
