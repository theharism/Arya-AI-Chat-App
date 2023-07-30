import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'


const Login = ({ navigation }) => {


    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [textu, onChangeText] = React.useState('');
    const [texta, onChangeTexta] = React.useState('');

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', width, marginTop: '10%', marginTop: 37, width, height }}>
            <View style={{ margin: '8%', marginTop: '40%' }} >
                <Text style={{ textAlign: 'center', color: '#800080', fontWeight: 900 }}>
                    Log in to Mokx
                </Text>
                <Text style={{ textAlign: 'center', marginTop: '5%', color: '#800080', fontWeight: 500 }}>
                    Welcome back! Sign in using your social account or email account to continue us
                </Text>
                <View style={{

                    display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25,

                }}>
                    <TouchableOpacity style={{
                    }}>

                        <Image source={require('../assets/Facebook.png')} style={{ borderWidth: 0.8, borderRadius: 50, borderColor: 'black' }} />

                    </TouchableOpacity>
                    <TouchableOpacity >

                        <Image source={require('../assets/google.png')} style={{ borderWidth: 0.8, borderRadius: 50, borderColor: 'black' }} />

                    </TouchableOpacity>
                    <TouchableOpacity >

                        <Image source={require('../assets/Apple.png')} style={{ borderWidth: 0.8, borderRadius: 50, borderColor: 'black' }} />

                    </TouchableOpacity>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '8%', justifyContent: 'center' }}>
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

            </View>
            {/* Next */}
            <View style={{ width, marginTop: '-5%' }}>
                <View style={{ margin: '8%' }} >
                    <Text style={{ color: '#800080', fontWeight: 900 }}>
                        Your Email:
                    </Text>
                    <TextInput
                        value={textu}
                        onChangeText={onChangeText}
                        style={{
                            height: 40,
                            margin: 12,
                            padding: 10,
                        }}
                        placeholder='_______________________________________________'
                    />
                    <Text style={{ color: '#800080', fontWeight: 900 }}>
                        Password:
                    </Text>
                    <TextInput
                        value={texta}
                        onChangeText={onChangeTexta}
                        style={{
                            height: 40,
                            margin: 12,
                            padding: 10,
                        }}
                        placeholder='_______________________________________________'
                    />
                </View>

            </View>
            {/* Next */}
            <View style={{ marginTop: height > 800 ? '13%' : '2%', display: 'flex', flexDirection: 'column', width }}>
                <TouchableOpacity style={{ backgroundColor: '#FFD720', width: '90%', height: '27%', borderRadius: 10, justifyContent: 'center', alignSelf: 'center' }}

                    onPress={() => navigation.navigate('chat')}

                >
                    <Text style={{
                        textAlign: 'center', fontWeight: 900, color: '#800080'
                    }} >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>

                    <Text style={{ textAlign: 'center', color: 'black', marginTop: '5%', color: '#FFD720', fontWeight: 900 }}

                        onPress={() => navigation.navigate('emptyscreen')}
                    >Forgot Password?</Text>
                </TouchableOpacity>

            </View>



        </SafeAreaView >

    )
}

export default Login
