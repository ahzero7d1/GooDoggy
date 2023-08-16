import * as React from 'react';
import {View, Image, Pressable, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';


export default function CarbonScreen({navigation}) {
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
    <ScrollView>
        <Image
        style = {{resizeMode: 'contain', alignSelf: 'center', width: 450, height: 450, marginTop: 40}}
        source = {require('../../assets/pics/carbon_screen/polarbear.png')}
        ></Image>
                <Image
        style = {{resizeMode: 'contain', alignSelf: 'center', width: 390, height: 350, marginTop: 20}}
        source = {require('../../assets/pics/carbon_screen/carbon_value.png')}
        ></Image>
                <Image
        style = {{resizeMode: 'contain', alignSelf: 'center', width: 390, height: 600}}
        source = {require('../../assets/pics/carbon_screen/carbon_education.png')}
        ></Image>
                <Image
        style = {{resizeMode: 'contain', alignSelf: 'center', marginBottom: 30, width: 390, height: 200}}
        source = {require('../../assets/pics/carbon_screen/goodoggy_history.png')}
        ></Image>
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

CarbonScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };