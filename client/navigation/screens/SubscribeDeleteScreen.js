import * as React from 'react';
import {View, Text, Animated, Pressable, Image, StyleSheet, SafeAreaView, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function SubscribeDeleteScreen({navigation}) {
    
    //API 연결 
    // const dataID = useRef(0);
    // const [data, setData] = React.useState([]);

    // const getData=async()=>{
    //     const res = await fetch(/**/).then((res)=>res.json());
    //     const initData = res.slice(0,20).map((it)=>{
    //         return{
    //             id: dataID.current++,
    //             sender: it.sender,
    //             context: it.context,
    //             select: false,
    //             danger: it.danger,
    //         };
    //     });
    //     setData(initData);
    // }

    // React.useEffect(()=>{
    //     getData();
    // },[])

    const subList = [
        {sender: '야놀자', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', danger: 'red'},
        {sender: '야놀자', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', danger: 'red'},
        {sender: '야놀자', context: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: '야놀자', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: 'Ali Express', context: '최대 80% 할인!! 알리 익스프레스 썸머 세일 오늘...', danger: 'red'},
        {sender: 'Ali Express', context: '최대 80% 할인!! 알리 익스프레스 썸머 세일 오늘...', danger: 'red'},
        {sender: 'Ali Express', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: 'Ali Express', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: 'Ali Express', context: '여름 가전제품 초특가!! 선풍기, 에어컨 여름 필수...', danger: 'red'},
        {sender: 'Ali Express', context: '여름 가전제품 초특가!! 선풍기, 에어컨 여름 필수...', danger: 'red'},
        {sender: 'Ali Express', context: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', danger: 'red'},
        {sender: 'Ali Express', context: '물놀이 필수품 특가 세일, 알리 익스프레스에서 만...', danger: 'red'},
        {sender: 'Ali Express', context: '물놀이 필수품 특가 세일, 알리 익스프레스에서 만...', danger: 'red'},
        {sender: '알라딘', context: '(광고) 김달님 에세이 <우리는 조금씩 자란...', danger: 'red'},
        {sender: '알라딘', context: '(광고) 2023 만화 중간 결산전 + 패브릭 수...', danger: 'red'},
        {sender: '알라딘', context: '(광고) 세상을 움직이는 건 인간이 아니라 자연...', danger: 'red'},
        {sender: '알라딘', context: '(광고) 야만과 지상낙원이라는 편견에 갇...', danger: 'red'},
        {sender: '알라딘', context: '(광고) 조르주 페렉 선집 <어렴풋한 부터...', danger: 'red'},
        {sender: '알라딘', context: '중요 메일메일 제목(광고) 크리스토퍼 놀란...', danger: 'red'},
        {sender: '알라딘', context: '중요 메일메일 제목(광고) 8월 특별 선물 ...', danger: 'red'},
        {sender: '알라딘', context: '(광고) 알라디너TV 이달의 북튜브 챌린지 #미...', danger: 'red'},
        {sender: 'YouTube Music', context: '음악 추천 기능이 한층 업그레이드되...', danger: 'red'},
        {sender: 'YouTube Music', context: '아영님의 재생목록에는 어떤 콘텐츠가...', danger: 'red'},
        {sender: 'YouTube Music', context: '아영님의 재생목록에는 어떤 콘텐츠가...', danger: 'red'},
        {sender: 'YouTube Music', context: '좋아하는 노래를 밖에서도 자유롭게...', danger: 'red'},
        {sender: 'YouTube Music', context: '현솔님, 이제 편리하게 음악을 즐기실 ...', danger: 'red'},
        {sender: 'YouTube Music', context: 'YouTube Music이 알려주는 최신 인기...',danger: 'red'},
        {sender: 'YouTube Music', context: '(광고) Music Recap: 내 음악 취향 분...', danger: 'red'},
        {sender: 'YouTube Music', context: '1억 곡 이상의 광고 없는 노래가..', danger: 'red'},
    ]

    
    const arryaWithId = subList.map((item,index)=>({
        id: index,
        select: false,
        ...item
    }))

    const [checkBox, setCheckBox]=React.useState(arryaWithId); //모든 이메일 list
    const [animation] = React.useState(new Animated.Value(0));
    const [email, setEmail]=React.useState([]); //발신자별 이메일 목록 배열 
    const [senderName, setSenderName]=React.useState([...new Set(checkBox.map(item=>item.sender))]) //발신자 목록 배열 
    const [allButton, setAllButton]=React.useState([...new Array(senderName.length).fill(false)]); //전체 삭제, 해제 버튼 

    

    const filterEmails= senderName.map(sender=> (
        {
            sender: sender,
            count: checkBox.filter(email=>email.sender===sender).length,
            emails: checkBox.filter(email => email.sender === sender)
        }));

    const onSelect = (index) => {
        const newSelect = [...checkBox];
        newSelect[index].select = !newSelect[index].select;
        setCheckBox(newSelect);
        showDeleteBar();
    } //체크 박스 선택 

    const selectAll =(sender)=>{
        setCheckBox((prevSelect)=>
            prevSelect.map((checkBox)=>(checkBox.sender === sender)?{...checkBox, select: true}:checkBox)
        );
        setAllButton(!allButton);
        showDeleteBar();
    } //전체 선택 

    const deselectAll =(sender)=>{
        setCheckBox((prevSelect)=>
        prevSelect.map((checkBox)=>(checkBox.sender === sender)?{...checkBox, select:false}:checkBox)
        );
        setAllButton(!allButton);
        showDeleteBar();
    } //전체 해제 

    const showDeleteBar = () =>{
        Animated.timing(animation, {
            toValue: checkBox.some((checkbox) => checkbox.select) ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
    } //삭제 바 보이기 

    const toggleSelectAll = React.useCallback((sender)=>{
        setCheckBox((prevSelect)=>
            prevSelect.map((checkBox)=> checkBox.sender === sender?
                {...checkBox, select: !allButton[senderName.indexOf(sender)]}: checkBox
            )
        )
        const update = allButton;
        update[senderName.indexOf(sender)] = !update[senderName.indexOf(sender)];
        setAllButton(update)
        showDeleteBar();
    },[allButton,showDeleteBar]);

    // const interpolatedHeight = animation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 80],
    //   });

    
    const handleDelete=()=>{
        setCheckBox((prevCheckBox)=> prevCheckBox.filter((checkBox)=>!checkBox.select));
        setCheckBox((prevSelect)=>
            prevSelect.map((checkBox,index)=>({...checkBox, select:false, id:index}))
        );

    } //삭제하기 

    const isAnyCheckboxChecked = checkBox.some((checkbox) => checkbox.select);


    return(
        <View style={{flex:1}}>
        <ScrollView style={styles.ScrollView}>
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
            {filterEmails.map(({sender,count,emails},index)=>(
                <View key={sender}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{resizeMode: 'contain', alignSelf: 'flex-start', width: 10, height: 10, marginLeft: 20, marginTop: 15}}
                        source={require('../../assets/pics/subscribeDelete_screen/red_circle.png')}
                    />
                    <Text style={{marginLeft: 5,marginTop: 12, fontSize: 16}}>{sender}</Text>
                    </View>
                    <View style={{marginBottom: 10}}>
                    <Image
                        style={{marginLeft:6, marginTop: 10, alignSelf: 'center'}}
                        source={require('../../assets/pics/subscribeDelete_screen/sub_num.png')}/>
                        <Text style={{paddingLeft:4, marginTop:12, fontSize:16, position: 'absolute', alignSelf:'center'}}>{count}</Text>
                    </View>
                {/* <Image
                    style={{resizeMode: 'contain', alignSelf: 'flex-end',  width: 400, height:30, marginBottom: 10}}
                    source={require('../../assets/pics/subscribeDelete_screen/unsub.png')}
                /> */}
               </View>
                <View style={styles.boxContainer}>
                        <Pressable onPress={()=>toggleSelectAll(sender)}>
                            {allButton[senderName.indexOf(sender)]?<Image
                                style={{resizeMode: 'contain', alignSelf: 'flex-start', margin: 10}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_deselectAll.png')}
                            />:<Image
                            style={{resizeMode: 'contain', alignSelf: 'flex-start', margin: 10}}
                            source={require('../../assets/pics/subscribeDelete_screen/sub_selectAll.png')}
                        />} 
                        </Pressable>
                        <ScrollView style={styles.ScrollView}>
                        {emails.map((value, index)=>(
                            <Pressable key={index} onPress={()=>onSelect(value.id)}>
                            <View style={{flexDirection: 'row'}}>
                                {value.select?
                                <Image
                                    style={{marginLeft: 10, margin: 5}}
                                    source={require('../../assets/pics/subscribeDelete_screen/sub_checked.png')}
                                />
                                :<Image 
                                    style={{marginLeft: 10, margin: 5}}
                                    source={require('../../assets/pics/subscribeDelete_screen/sub_notChecked.png')}
                                />}
                                <Text style={{marginTop: 8, marginLeft: 2, fontSize: 16}}>{value.context}</Text>
                            </View>
                            </Pressable>
                            ))}
                        
                    </ScrollView>
                </View>
                </View>
            ))}
            
            </ScrollView>
            {isAnyCheckboxChecked?<Pressable onPress={handleDelete}><Image style={{alignSelf:'center', width:390, height: 80}} source={require('../../assets/pics/subscribeDelete_screen/deleteBar.png')}/></Pressable>:null}
            
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
    }
})