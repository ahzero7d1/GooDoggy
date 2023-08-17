import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-gesture-handler';

export default function BulletinWriteScreen({navigation, onCreate}) {
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

    const onCreate=(writer,title,context)=>{
        const created_date=new Date().getTime();
        const newItem={
          writer,
          title,
          context,
          created_date,
          id:dataID.current
        }
        dataID.current+=1;
        setData([newItem,...data]);
      };

    const writerInput=React.useRef();
    const contextInput=React.useRef();
    const [state, setState]=React.useState({
        title:"",
        context:"",
    })

    const handleChangeState=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit=()=>{
        if(state.title.length<1){
            writerInput.current.focus();
            return;
        }
        if(state.context.length<5){
            contextInput.current.focus();
            return;
        }
        onCreate(state.title, state.context)
        setState({
            title:"",
            context:"",
        })
    }

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
                <TextInput ref={titleInput} name="title" style={styles.title}>제목</TextInput>
                <View style={styles.line}/>
                <TextInput ref={contextInput} name="context" style={styles.context}>내용을 입력하세요..</TextInput>
                <Image onPress={()=>handleSubmit()} style={styles.doneButton} source={require('../../assets/pics/bulletinWrite_screen/doneButton.png')}></Image> 
            </View>
            <Image onPress={()=>{}} style={styles.goBackButton} source={require('../../assets/pics/bulletinWrite_screen/goBackButton.png')}></Image> 

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
        flexDirection: 'column',
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 350,
        height: 260,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        borderRadius: 20,
        marginBottom: 30
    },
    doneButton:{
        alignSelf: 'flex-end',
        width: 120,
        height: 40,
        marginRight: 20,
        // top: 200,
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
        color: '#929292',
        marginTop: 30,
        marginLeft: 30,
    },
    context: {
        fontSize: 14,
        marginTop: 20,
        marginLeft: 30,
        color: '#929292',

    },
})

