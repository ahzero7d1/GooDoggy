import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function BullentinEdit({navigation, id, writer, time, context}) {
     //API 연결 
    // const dataID = useRef(0);
    // const [data, setData] = React.useState([]);

    // const getData=async()=>{
    //     const res = await fetch(/**/).then((res)=>res.json());
    //     const initData = res.slice(0,20).map((it)=>{
    //         return{
    //             id: dataID.current++,
    //             writer: it.writer,
    //             title: it.title,
    //             context: it.context,
    //             select: false,
    //         };
    //     });
    //     setData(initData);
    // }

    // React.useEffect(()=>{
    //     getData();
    // },[])
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
                <Text name="title"></Text>
                <View style={styles.line}/>
                <Text></Text>
                <Text name="context"></Text>
                {select?<Image onPress={()=>{}} source={require('../../assets/pics/bulletinEdit_screen/doneButton.png')}/>
                :<Image onPress={()=>{}} style={styles.editButton} source={require('../../assets/pics/bulletinEdit_screen/editButton.png')}></Image> 
}
                <Image onPress={()=>{}} style={styles.deleteButton} source={require('../../assets/pics/bulletinEdit_screen/deleteButton.png')}></Image> 
            </View>
            <Image onPress={()=>{}} style={styles.goBackButton} source={require('../../assets/pics/bulletinEdit_screen/goBackButton.png')}></Image> 

        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 60,
        left: 360,
        marginBottom: 10,
        width: 30
    },
    logoContainer: {
        left: 25,
        marginTop: 60,
        position: 'absolute'
    },
    boxContainer: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 350,
        height: 260,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        borderRadius: 20,
        marginBottom: 30
    },
    editButton:{
        width: 120,
        height: 40,
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
        height: 520,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 30,
    }
})

