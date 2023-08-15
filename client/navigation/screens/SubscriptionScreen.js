import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Button, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';

export default function SubscriptionScreen({navigation}) {
    return(
    <View style={{flex:1}}>
    <Pressable onPress={() => navigation.navigate('홈')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <Image
        style={styles.logoContainer}
        source= {require('../../assets/pics/GooDoggy_logo.png')}
        />
    </Pressable>
    <Pressable onPress={() => navigation.navigate('Account_Page')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <Image
        style={styles.buttonContainer}
        source= {require('../../assets/pics/profile_icon.png')}
        />
    </Pressable>
    {/* <Text
        onPress={() => navigation.navigate('GooDoggy')}
        style={{fontSize: 26, fontWeight: 'bold'}}
    >
    </Text> */}
        <ScrollView style={styles.ScrollView}>
            <Image
                style = {{resizeMode: 'contain', alignSelf: 'center', width: 400, height: 100, marginTop: 20}}
                source= {require('../../assets/pics/subscribe_screen/subscribe_text.png')}
            />
            <Pressable onPress={() => navigation.navigate('Red_Delete')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
                <Image
                style = {{resizeMode: "contain", alignSelf: 'center', width: 400, height: 200}}
                source= {require('../../assets/pics/subscribe_screen/red.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Red_Delete')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
                <Image
                style = {{resizeMode: 'contain', alignSelf: 'center', width: 400, height: 200}}
                source= {require('../../assets/pics/subscribe_screen/yellow.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Red_Delete')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
                <Image
                style = {{resizeMode: 'contain', alignSelf: 'center', width: 400, height: 200, marginBottom: 50}}
                source= {require('../../assets/pics/subscribe_screen/green.png')}
                />
            </Pressable>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 60,
        left: 360,
        width: 30
    },
    logoContainer: {
        left: 25,
        marginTop: 60,
        position: 'absolute'
    }
})