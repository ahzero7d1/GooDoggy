import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';

export default function BulletinBoardScreen({navigation}) {

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
   
    const [data, setData]=React.useState([]);

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

    const data = [
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주.............................', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', },
        {writer: '야놀자', time: '19:35',title: 'Hi', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', },
    ]

    const cutContext = (context) =>{
        let cut = "";
        if(context.length>35){
            cut = context.substr(0,35) + '...';
        }
        else{
            cut = context+ '...';
        }
        return cut;

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
    
    <Image style={styles.bullTitle} source={require('../../assets/pics/bulletinBoard_screen/bulletinTitle.png')}/>
    <ScrollView style={styles.ScrollView}>
    <View style={styles.line}/>
    {data.map(({writer,time,title, context})=>(
        <Pressable onPress={()=>navigation.navigate('BulletinEdit')}>
        <View style={{flexDirection: "row"}}>
            <View style={{flex:1, flexDirection: "column"}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.context}>{cutContext(context)}</Text>
            </View>
            <Text style={styles.writer}>{time} | {writer}</Text>
        </View>
        <View style={styles.line}/>
        </Pressable>
    ))}
    </ScrollView>
    <Pressable onPress={()=>navigation.navigate('BulletinWrite')}>
        <Image style={styles.writeButton} source={require('../../assets/pics/bulletinBoard_screen/writeButton.png')}/>
    </Pressable>
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
    },
    bullTitle:{
        width: 350,
        height: 44,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    line:{
        borderWidth: 0.7,
        borderColor: '#C6C6C6',
        marginTop: 15,
    },
    title: {
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 7,
        fontWeight: 'bold',
        fontSize: 16,
    },
    context: {
        marginLeft: 30,
        fontSize: 14,
    },
    writer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 10,
        fontSize: 14,
    },
    writeButton: {
        width: 150,
        height: 50,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 50,
    }


})

BulletinBoardScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

