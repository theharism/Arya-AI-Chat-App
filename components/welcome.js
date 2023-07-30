import { View, Text, SafeAreaView, Image, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', justifyItems: 'center', }}>
            <View style={{ alignItems: 'center', marginTop: 203 }}>
                <View style={{ marginBottom: 203 }}>
                    <Image source={require('../assets/Mokx.png')} style={{ width: 172, height: 172 }} />
                </View>
                <TouchableOpacity style={{
                    width: 295,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent', // Set the background color to transparent

                }}
                    onPress={() => navigation.navigate('discover')}
                >
                    <Text style={{ width: 295, height: 25, alignItems: 'center', textAlign: 'center', }}>Back to Vedas 🕉️</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Welcome