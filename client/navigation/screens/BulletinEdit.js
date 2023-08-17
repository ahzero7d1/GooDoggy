import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
// import { useContext, useEffect, useParams, useState } from 'react/cjs/react.production.min';
import { stateContext } from '../../App';

export default function BullentinEdit({navigation, route}) {
    
    const [data, setData] = React.useState([]);
    const dataList = React.useContext(stateContext);

    // React.useEffect(()=>{
    //     const update = dataList.map()
    //     setData(dataList);
    // })

    const [select, setSelect]= React.useState(false);
    
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
            
            <View style={styles.boxContainer}>
                <Text style={styles.title}>{route.params.title}</Text>
                <View style={styles.line}/>
                <Text style={styles.time}>{route.params.time} | {route.params.writer}</Text>
                <Text style={styles.context}>{route.params.context}</Text>
                {/* <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingRight: 15, paddingTop: 380}}>
                </View> */}
            </View>
            <Pressable onPress={()=> navigation.navigate('라운지')}>
                <Image style={styles.goBackButton} source={require('../../assets/pics/bulletinEdit_screen/goBackButton.png')}></Image> 
            </Pressable>

        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 60,
        left: 360,
        marginBottom: 10,
        width: 30,
        flexDirection: 'row'
    },
    logoContainer: {
        left: 25,
        marginTop: 60,
        position: 'absolute'
    },
    editButton:{
        width: 120,
        height: 40,
        marginRight: 5
    },
    deleteButton:{
        width: 120,
        height: 40,
    },
    goBackButton:{
        width: 120,
        height: 40,
        alignSelf: 'center',
    },
    boxContainer: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 350,
        height: 350,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 30,
    },
    line:{
        borderColor: 'black',
        borderWidth: 0.7,
        width: 310,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginTop: 30,
        marginLeft: 30,
        flexShrink: 1,
        right: 10,
        width: 300,
    },
    context: {
        fontSize: 16,
        marginTop: 20,
        marginLeft: 30,
        color: 'black',
        right: 10,
        height: 100,
        width: 310,
    },
    time: {
        fontSize: 16,
        marginTop: 5,
        alignSelf: 'flex-end',
        marginRight: 15,
    }
})

BulletinEdit.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

