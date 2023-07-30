import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Discover = ({ navigation }) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#301949', marginTop: 37, width, height }}>
            <View>
                <Image source={require('../assets/cartoongirl.png')} style={{ width, height: height * 0.35 }} />
                {/* ai */}
                <View style={{ marginTop: '-2.3%', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'skyblue', width: 220, height: 25, borderRadius: 7, justifyContent: 'center',
                    }}>
                        <Text style={{
                            textAlign: 'center', fontWeight: 900,
                        }} >
                            Arya, Vedic AI Guide
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={{ margin: 9 }}>
                <Text style={{ marginTop: 18, fontSize: height > 800 ? 40 : 35, marginLeft: width * 0.020, color: 'white', fontWeight: 700 }}>
                    Discover the timeless wisdom of <Text style={{ color: '#FFD720' }}>
                        the Vedas
                    </Text>
                </Text>

                <Text style={{ color: 'white', margin: 18, }}>
                    Sign up and <Text style={{ color: '#FFD720' }}> journey through ancient knowledge with Arya 🌟</Text>
                </Text>
                <View style={{

                    display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15,

                }}>
                    <TouchableOpacity style={{
                    }}
                        onPress={() => navigation.navigate('emptyscreen')}
                    >

                        <Image source={require('../assets/Facebook.png')} style={{ borderWidth: 0.8, borderRadius: 50, borderColor: 'white' }} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('emptyscreen')}
                    >

                        <Image source={require('../assets/google.png')} style={{ borderWidth: 0.8, borderRadius: 50, borderColor: 'white' }} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('emptyscreen')}
                    >

                        <Image source={require('../assets/Apple.png')} style={{ borderWidth: 0.8, borderRadius: 50, borderColor: 'white' }} />

                    </TouchableOpacity>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5%', justifyContent: 'center' }}>
                    <Text style={{ color: '#CDD1D0' }}>
                        ____________________
                    </Text>
                    <Text style={{ color: '#CDD1D0', margin: '2%', }}>
                        OR
                    </Text>
                    <Text style={{ color: '#CDD1D0' }}>
                        _____________________
                    </Text>
                </View>

                <View style={{ marginTop: '3%', display: 'flex', flexDirection: 'column', }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFD720', width: '100%', height: '27%', borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}
                        onPress={() => navigation.navigate('signup')}

                    >
                        <Text style={{
                            textAlign: 'center', fontWeight: 900, color: '#800080'
                        }} >
                            Sign up with mail
                        </Text>
                    </TouchableOpacity>
                    {/* toucha opa may be distraction */}
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', marginTop: '3%', marginRight: '3%' }}>Existing Account?


                        </Text>
                        <TouchableOpacity style={{ marginTop: 10 }}
                            onPress={() => navigation.navigate('login')}

                        >

                            <Text style={{ color: '#FFD720', }}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </SafeAreaView >
    )
}

export default Discover

const styles = StyleSheet.create({})