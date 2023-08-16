import * as React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen({navigation}) {
    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
      });

    const [count, setCount] = React.useState(0);
    const [isSelect, setIsSelect]=React.useState(true);
    const [spam, setSpam]=React.useState(0);
    const [sub, setSub]=React.useState(0);

    const start =()=>{
        setIsSelect(!isSelect);
        const timer = setInterval(()=>{
            setCount((prev)=>{
                const newCount = prev +1;
                if(newCount>99){
                    clearInterval(timer);
                    setIsSelect(true);
                    setSpam(27);
                    setSub(239);
                }
                return newCount;
            });
        },50);

        setCount(0);
        return()=>{
            clearInterval(timer);
        };
    };

    return(

    <View style={{flex: 1}}>
        <Pressable onPress={() => navigation.navigate('Home_Error_Page')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <Image
        style={styles.buttonContainer}
        source= {require('../../assets/pics/profile_icon.png')}
        />
        </Pressable>

        <Pressable  onPress={()=>isSelect?start():null}>
            <Image
            style = {{resizeMode: "contain", alignSelf: 'center', marginTop: 30, width: 350, height: 400}}
            source = {require('../../assets/pics/main_screen/main_circle.png')}
            ></Image>
            {isSelect?<Image style={styles.dog} source={require('../../assets/pics/main_screen/dog.png')}/>:<Image style={styles.dog}source={require('../../assets/pics/main_screen/runningDog.gif')}/>}
            
        </Pressable>
        
        <View>
            <Text style={styles.countText}>{count}%</Text>
        </View>
        <Image
        style = {{ resizeMode: "contain", alignSelf: 'center', marginTop: 40, height: 105, width: 360}}
        source = {require('../../assets/pics/main_screen/chart_image.png')}
        >
        </Image>
        

        <Text title="malicious_mail_counter" style={{fontSize: 29, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 85, top: 690}}>{`${spam}건`}</Text>
        <Text title="subscription_mail_counter" style={{fontSize: 29, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 255, top: 690}}>{`${sub}건`}</Text>
    </View>

    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 60,
        left: 360,
        width: 30
    },
    countText: {
        fontSize: 40,
        alignSelf: 'center',
        color: '#21802A',
        fontWeight: 'bold',
        marginTop: 30,
        height: 46,
    },
    dog: {
        width: 180,
        height: 180,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        top: 170
    }
})