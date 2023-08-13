import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

export default function MaliciousScreen({navigation}) {
    return(
<View style={{flex: 1}}>
    <View>
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
    </View>
    <Text
        onPress={() => navigation.navigate('GooDoggy')}
        style={{fontSize: 26, fontWeight: 'bold'}}
    >
        Malicious Screen
    </Text>
</View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        left: 360,
        width: 30,
        marginTop: 60
    },
    logoContainer: {
        left: 25,
        marginTop: 60,
        position: 'absolute'
    }
})