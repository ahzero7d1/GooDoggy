import * as React from 'react';
import {View, Text, Button, Image, Icon, Pressable, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { Animated } from 'react-native';

export default function HomeScreen({navigation}) {
    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
      });

    const dogs = [
        require('../../assets/pics/main_screen/dog1.png'),
        require('../../assets/pics/main_screen/dog2.png'),
        require('../../assets/pics/main_screen/dog3.png'),
    ];

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
        style = {{resizeMode: "contain", alignSelf: 'center', marginTop: 10, width: 350, height: 498}}
        source = {require('../../assets/pics/main_screen/main_circle.png')}
        ></Image>


        {/* {dogs.map(img=> <Image source={dogs}/>)} */}
        
        {/* <ImageSequence 
            images={dogs}
            startFrameIndex={centerIndex}
            style={{width:50, height: 50, position: 'absolute'}}
            framesPerSecond={24}
        /> */}

        <Image
        style = {{ resizeMode: "contain", alignSelf: 'center', marginTop: 50, height: 110}}
        source = {require('../../assets/pics/main_screen/chart_image.png')}
        >
        </Image>
        

        <Text title="malicious_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 80, top: 710}}>{`14 건`}</Text>
        <Text title="subscription_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 253, top: 710}}>{`100 건`}</Text>
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