import * as React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function HomeErrorScreen({navigation}) {
    return(

    <View style={{flex: 1}}>
        <Pressable onPress={() => navigation.navigate('GooDoggy')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <Image
        style={styles.buttonContainer}
        source= {require('../../assets/pics/profile_icon.png')}
        />
        </Pressable>

        <Pressable  onPress={()=> navigation.navigate('홈')}>
            <Image
            style = {{resizeMode: "contain", alignSelf: 'center', marginTop: 0, width: 350, height: 400}}
            source = {require('../../assets/pics/main_screen/main_circle.png')}
            ></Image>
            <Image style={styles.dog} source={require('../../assets/pics/main_error_screen/error_dog.png')}></Image>
        </Pressable>

        <View>
            <Text style={styles.countText}>Error!</Text>
            <Text style={styles.countText1}>새로고침 해주세요.</Text>
        </View>

        <Image
        style = {{ resizeMode: "contain", alignSelf: 'center', marginTop: 30, height: 105, width: 360}}
        source = {require('../../assets/pics/main_screen/chart_image.png')}
        >
        </Image>
        

        <Text title="malicious_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 90, top: 725}}>{`- 건`}</Text>
        <Text title="subscription_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 260, top: 725}}>{`- 건`}</Text>
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
    countText1: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#21802A',
        marginTop: 30,
        height: 46,
    },
    dog: {
        resizeMode: 'fill',
        width: 180,
        height: 180,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        top: 150
    }
})

HomeErrorScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };