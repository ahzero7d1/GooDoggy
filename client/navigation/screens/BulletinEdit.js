import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import { useContext, useEffect, useParams } from 'react/cjs/react.production.min';
import { stateContext, dispatchContext } from '../../App';

export default function BullentinEdit({navigation, id, writer, time, context}) {
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

                {/* <View style={styles.boxContainer}>
                <TextInput ref={titleInput} value={title} style={styles.title} onPress={(e)=>setTitle(e.target.value)}
                    placeholder='제목 (30자 이내)'></TextInput>
                <View style={styles.line}/>
                <TextInput ref={contextInput} value={context} style={styles.context} onPress={(e)=>setContext(e.target.value)}
                    placeholder='내용을 입력하세요.. (100자 이내)'></TextInput>
                </View> */}

                

            <View style={styles.boxContainer}>
                <TextInput name="title"></TextInput>
                <View style={styles.line}/>
                <Text></Text>
                <Text name="context"></Text>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingRight: 15, paddingTop: 380}}>
                    {select?<Image onPress={()=>{}} source={require('../../assets/pics/bulletinEdit_screen/doneButton.png')}/>
                    :<Image onPress={()=>{}} style={styles.editButton} source={require('../../assets/pics/bulletinEdit_screen/editButton.png')}></Image> 
                    }<Image onPress={()=>{}} style={styles.deleteButton} source={require('../../assets/pics/bulletinEdit_screen/deleteButton.png')}></Image> 
                </View>
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
        height: 550,
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
        marginTop: 60,
        marginBottom: 5,
    },
})

