import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';

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
    //         };
    //     });
    //     setState({
    //      ...state,
    //      writer: initData.writer});
    //     }

    // React.useEffect(()=>{
    //     getData();
    // },[])

    // const [title, setTitle]=React.useState("");
    // const [context, setContext]=React.useState("");

    const titleInput=React.useRef();
    const contextInput=React.useRef();
    
    const [title, setTitle]=React.useState("");
    const [context, setContext] = React.useState("");
    const [date, setDate]=React.useState(new Date());
 
    const [state, setState]=React.useState({
        writer:"",
        title:"",
        context:"",
        date: ""
    })

    const writer = "장하은";

    const handleChangeState=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit=()=>{
        if(state.title.length<1 || state.title.length>30){
            titleInput.current.focus();
            return;
        }
        if(state.context.length<5||state.context.length>100){
            contextInput.current.focus();
            return;
        }
        onCreate(writer,state.title, state.context)
        setState({
            writer:"",
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
                <TextInput ref={titleInput} value={title} style={styles.title} onPress={(e)=>setTitle(e.target.value)}
                    placeholder='제목 (30자 이내)'></TextInput>
                <View style={styles.line}/>
                <TextInput ref={contextInput} value={context} style={styles.context} onPress={(e)=>setContext(e.target.value)}
                    placeholder='내용을 입력하세요.. (100자 이내)'></TextInput>
                <Pressable onPress={()=>handleSubmit()}>
                    <Image style={styles.doneButton} source={require('../../assets/pics/bulletinWrite_screen/doneButton.png')}></Image> 
                </Pressable>
            </View>
            <Pressable onPress={()=>navigation.goBack()}>
                <Image style={styles.goBackButton} source={require('../../assets/pics/bulletinWrite_screen/goBackButton.png')}></Image> 
            </Pressable>
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

