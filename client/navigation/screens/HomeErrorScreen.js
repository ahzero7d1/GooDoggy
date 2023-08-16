import * as React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

export default function HomeErrorScreen({navigation}) {
    return(

    <View style={{flex: 1}}>
        <Pressable onPress={() => navigation.navigate('Account_Page')} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <Image
        style={styles.buttonContainer}
        source= {require('../../assets/pics/profile_icon.png')}
        />
        </Pressable>

        <Image
        style = {{resizeMode: "contain", alignSelf: 'center', marginTop: 10, width: 350, height: 498}}
        source = {require('../../assets/pics/main_screen/main_screen_image.png')}
        ></Image>

        <Image
        style = {{ resizeMode: "contain", alignSelf: 'center', marginTop: 50, height: 110}}
        source = {require('../../assets/pics/main_screen/chart_image.png')}
        >
        </Image>

        <Text title="malicious_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 80, top: 710}}>{`- 건`}</Text>
        <Text title="subscription_mail_counter" style={{fontSize: 30, fontFamily: 'Inter-SemiBold', position: 'absolute', left: 253, top: 710}}>{`- 건`}</Text>
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

HomeErrorScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };