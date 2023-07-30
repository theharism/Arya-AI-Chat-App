import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', margin: 100 }}>
            <Text style={{ fontWeight: 700, color: '#800080', width: '150%' }}>This Page is Empty as was not included in Figma File !!</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({})