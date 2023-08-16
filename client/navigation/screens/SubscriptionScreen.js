import * as React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


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
        <ScrollView style={styles.ScrollView}>
            <Image
                style = {{resizeMode: 'contain', alignSelf: 'center', width: 405, height: 50, marginTop: 50}}
                source= {require('../../assets/pics/subscribe_screen/subscribe_text.png')}
            />
            <Pressable onPress={() => navigation.navigate('Red_Delete')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
                <Image
                style = {{resizeMode: "contain", alignSelf: 'center', width: 365, height: 200}}
                source= {require('../../assets/pics/subscribe_screen/red.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Red_Delete')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
                <Image
                style = {{resizeMode: 'contain', alignSelf: 'center', width: 365, height: 200}}
                source= {require('../../assets/pics/subscribe_screen/yellow.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Red_Delete')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
                <Image
                style = {{resizeMode: 'contain', alignSelf: 'center', width: 365, height: 200, marginBottom: 50}}
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
    },
    ScrollView: {
        alignSelf: "center",
        resizeMode: "center",
        width: 365
    }
})