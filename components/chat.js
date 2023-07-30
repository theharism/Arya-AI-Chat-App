import { SafeAreaView, StyleSheet, Text, View, Dimensions, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const Chat = () => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [textu, onChangeText] = React.useState('');

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', width, marginTop: '-15%' }}>
            <KeyboardAvoidingView style={{ backgroundColor: '#ffffff' }}>
                <ScrollView style={{ width, marginTop: '10%', flex: .92, backgroundColor: '#F8F8FF', }}>
                    {/* <View style={{}}> */}
                    <View style={{
                        width, height: 80, flexDirection: 'row', backgroundColor: 'white', borderWidth: 0.09, borderColor: 'black', backgroundColor: '#ffffff'
                    }}>
                        <Image source={require('../assets/pp.png')} style={{ width: 44, height: 44, marginLeft: '13%', marginTop: '5%', }} />
                        <Text style={{ marginLeft: 10, fontWeight: 700, color: '#800080', marginTop: '5%', }} >Arya AI Profile <Text style={{ marginLeft: 10, fontWeight: 700, color: 'darkgrey' }} > {'\n'} Vedic AI Bot</Text> </Text>
                        <Text style={{
                            alignSelf: 'flex-start', color: '#FBBC04', marginLeft: 70, width, height, fontWeight: 900, marginTop: '5%',
                        }}>
                            A/क
                        </Text>
                    </View>

                    {/* chat screen */}
                    <View style={{ flex: .9, marginTop: '-5%', }}>
                        {/* Right */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width, height: 150 }}>
                            <Text style={{ color: '#800080', fontWeight: 700 }}>
                                Today
                            </Text>
                            <View style={{ backgroundColor: '#FBBC04', marginTop: '5%', alignSelf: 'flex-end', height: '22%', alignItems: 'center', justifyContent: 'center', borderTopStartRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 28, marginRight: 20, padding: '1%' }}>
                                <Text style={{ color: '#ffffff', fontWeight: 700, marginRight: '2%' }}>
                                    Hello! How are you?
                                </Text>

                            </View>
                            <Text style={{ alignSelf: 'flex-end', marginRight: 20, color: 'grey' }}>
                                08:25am
                            </Text>



                        </View>
                        {/* left */}
                        <View style={{ width, height: 150 }}>

                            <View style={{ marginTop: '-5%', backgroundColor: '#FBBC04', alignSelf: 'flex-start', height: '28%', alignItems: 'center', justifyContent: 'center', borderTopStartRadius: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 10, borderTopEndRadius: 10, marginLeft: 20, padding: '1%' }}>
                                <Text style={{ color: '#ffffff', fontWeight: 700, marginLeft: '2%' }}>
                                    Hello! Nazrul How are you?

                                </Text>

                            </View>
                            <Text style={{ alignSelf: 'flex-start', marginLeft: 20, color: 'grey' }}>
                                08:25am
                            </Text>



                        </View>
                        <Text style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '-10%' }}>
                            <Image source={require('../assets/warning.png')} />
                            Limitation: May struggle with complex queries.
                        </Text>
                    </View>

                    {/* </View > */}
                </ScrollView>

                {/* text sending */}

                <View style={{ width, flex: 0.1, backgroundColor: '#F8F8FF' }}>


                    <View
                        style={{
                            width: '90%',
                            borderRadius: 10,
                            height: '600%',
                            alignSelf: 'center',
                            position: 'relative',

                        }}
                    >
                        <TextInput
                            value={textu}
                            onChangeText={onChangeText}
                            style={{
                                width: '100%',
                                height: 58,
                                padding: 10,
                                fontSize: 16,
                                elevation: 8,
                                borderRadius: 100,
                                backgroundColor: '#F8F8FF'

                            }}
                            placeholder='Write your Message...'
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                position: 'absolute',
                                right: 10,
                                top: 10,
                            }}
                        >
                            <Image
                                source={require('../assets/send.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    margin: 5,
                                    borderRadius: 20,
                                    resizeMode: 'cover',
                                }}
                            />
                            <Image
                                source={require('../assets/microphone.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    margin: 5,
                                    borderRadius: 20,
                                    resizeMode: 'cover',
                                }}
                            />
                        </View>
                    </View>


                </View>

            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default Chat
