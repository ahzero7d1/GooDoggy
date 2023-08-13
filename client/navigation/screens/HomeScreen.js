import * as React from 'react';
import {View, Text, Button, Image, Icon, Pressable, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen({navigation}) {
    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
      });
    return(

    <View style={{flex: 1}}>
        <Pressable onPress={() => navigation.navigate('Account_Page')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <Image
        style={styles.buttonContainer}
        source= {require('../../assets/pics/profile_icon.png')}
        />
        </Pressable>

        {/* <Text
            onPress={() => alert('This is the "Home" screen.')}
            style={{fontSize: 26, fontWeight: 'bold'}}
        >
            Home Screen
        </Text> */}


        <Image
        style = {{alignSelf: 'center', marginTop: 40}}
        source = {require('../../assets/pics/main_screen/main_screen_image.png')}
        ></Image>

        <Image
        style = {{alignSelf: 'center', marginTop: 50, resizeMode: true}}
        source = {require('../../assets/pics/main_screen/chart_image.png')}
        >
        </Image>

        <Text title="malicious_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 75, top: 700}}>{`14 건`}</Text>
        <Text title="subscription_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 253, top: 700}}>{`100 건`}</Text>
    </View>

    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 60,
        left: 360,
        width: 30
    }
})