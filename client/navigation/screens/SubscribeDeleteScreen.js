import * as React from 'react';
import {View, Text, Animated, Pressable, Image, StyleSheet, SafeAreaView, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function SubscribeDeleteScreen({navigation}) {

    const subList = [
        {text: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', select: false},
        {text: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
    ]
    const subList2=[
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '최대 80% 할인!! 알리 익스프레스 썸머 세일 오늘...', select: false},
        {text: '최대 80% 할인!! 알리 익스프레스 썸머 세일 오늘...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '여름 가전제품 초특가!! 선풍기, 에어컨 여름 필수...', select: false},
        {text: '여름 가전제품 초특가!! 선풍기, 에어컨 여름 필수...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '물놀이 필수품 특가 세일, 알리 익스프레스에서 만...', select: false},
        {text: '물놀이 필수품 특가 세일, 알리 익스프레스에서 만...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', select: false},
        
    ]
    const [checkBox, setCheckBox]=React.useState(subList);
    const [checkBox2, setCheckBox2]=React.useState(subList2);

    const [allButton, setAllButton]=React.useState(false);
    const [allButton2, setAllButton2]=React.useState(false);

    const onSelct = (index) => {
        const newSelect = [...checkBox];
        newSelect[index].select = !newSelect[index].select;
        setCheckBox(newSelect);
    }
    const onSelct2 = (index) => {
        const newSelect = [...checkBox2];
        newSelect[index].select = !newSelect[index].select;
        setCheckBox2(newSelect);
    }

    const selectAll =()=>{
        setCheckBox((prevSelect)=>
            prevSelect.map((checkBox)=>({...checkBox, select: true}))
        );
        setAllButton(!allButton);
    }
    const deselectAll =()=>{
        setCheckBox((prevSelect)=>
        prevSelect.map((checkBox)=>({...checkBox, select:false}))
        );
        setAllButton(!allButton);

    }

    const selectAll2 =()=>{
        setCheckBox2((prevSelect)=>
            prevSelect.map((checkBox2)=>({...checkBox2, select: true}))
        );
        setAllButton2(!allButton2);
    }
    const deselectAll2 =()=>{
        setCheckBox2((prevSelect)=>
        prevSelect.map((checkBox2)=>({...checkBox2, select:false}))
        );
        setAllButton2(!allButton2);
    }

    const isAnyCheckboxChecked = checkBox.some((checkbox) => checkbox.select);
    const isAnyCheckboxChecked2 = checkBox2.some((checkbox) => checkbox.select);

    const interpolatedHeight = isAnyCheckboxChecked ? 80 : 0;

    // const [deleteBarVisible,setDeleteBarVisible]=React.useState(false);
    
    const handleDelete=()=>{
        setCheckBox((prevCheckBox)=> prevCheckBox.filter((checkBox)=>!checkBox.select));
        setCheckBox((prevSelect)=>
        prevSelect.map((checkBox)=>({...checkBox, select:false}))
        );
    }

    // const showDeleteBar= () => {
    //     setDeleteBarVisible(true);
    // }

    // const hideDeleteBar = () => {
    //     setDeleteBarVisible(false);
    // }

    // const deleteBarTranslate = new Animated.value(100);

    // if (deleteBarVisible){
    //     Animated.timing(deleteBarTranslate,{
    //         toValue: 0,
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start();
    // }
    // else {
    //     Animated.timing(deleteBarTranslate,{
    //         toValue: 100,
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start();
    // }


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
            <View style={{flexDirection: 'row'}}>
            <Image
                style={{resizeMode: 'contain', alignSelf: 'flex-start', width: 100, height: 50, marginLeft: 20, marginTop: 20}}
                source={require('../../assets/pics/subscribeDelete_screen/sub_ex1.png')}
            />
            <Image
                style={{resizeMode: 'contain', alignSelf: 'flex-end',  width: 400, height:30, marginBottom: 10}}
                source={require('../../assets/pics/subscribeDelete_screen/unsub.png')}
            />
           </View>
            <View style={styles.boxContainer}>
                    <Pressable onPress={allButton?deselectAll:selectAll}>
                        {allButton?<Image
                            style={{resizeMode: 'contain', alignSelf: 'flex-start', margin: 10}}
                            source={require('../../assets/pics/subscribeDelete_screen/sub_deselectAll.png')}
                        />:<Image
                        style={{resizeMode: 'contain', alignSelf: 'flex-start', margin: 10}}
                        source={require('../../assets/pics/subscribeDelete_screen/sub_selectAll.png')}
                    />}
                        
                    </Pressable>
                    <ScrollView style={styles.ScrollView}>
                    {checkBox.map((value, index)=>(
                        <Pressable key={index} onPress={()=>onSelct(index)}>
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
                            <Text style={{marginTop: 8, marginLeft: 2, fontSize: 16}}>{value.text}</Text>
                        </View>
                        </Pressable>
                    ))}
                    
                </ScrollView>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Image
                style={{resizeMode: 'contain', alignSelf: 'flex-start', width: 130, height: 50, marginLeft: 20, marginTop: 20}}
                source={require('../../assets/pics/subscribeDelete_screen/sub_ex2.png')}
            />
            <Image
                style={{resizeMode: 'contain', alignSelf: 'flex-end',  width: 345, height:30, marginBottom: 10}}
                source={require('../../assets/pics/subscribeDelete_screen/unsub.png')}
            />
           </View>
            <View style={styles.boxContainer}>
                    <Pressable onPress={allButton2?deselectAll2:selectAll2}>
                        {allButton2?<Image
                            style={{resizeMode: 'contain', alignSelf: 'flex-start', margin: 10}}
                            source={require('../../assets/pics/subscribeDelete_screen/sub_deselectAll.png')}
                        />:<Image
                        style={{resizeMode: 'contain', alignSelf: 'flex-start', margin: 10}}
                        source={require('../../assets/pics/subscribeDelete_screen/sub_selectAll.png')}
                    />}
                        
                    </Pressable>
                    <ScrollView style={styles.ScrollView}>
                    {checkBox2.map((value, index)=>(
                        <Pressable key={index} onPress={()=>onSelct2(index)}>
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
                            <Text style={{marginTop: 8, marginLeft: 2, fontSize: 16}}>{value.text}</Text>
                        </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
            </ScrollView>
            {(isAnyCheckboxChecked || isAnyCheckboxChecked2)? 
                <Pressable onPress={handleDelete}><Image style={{alignSelf:'center', width:390, height: 80}} source={require('../../assets/pics/subscribeDelete_screen/deleteBar.png')}/></Pressable> : null}
            {/* <Animated.View style={[styles.deleteBar, {transform: [{translateY: deleteBarTranslate}]}]}>
                <Button title="Delete Selected" onPress={handleDelete}/>
            </Animated.View> */}
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
    boxContainer: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 350,
        height: 300,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        borderRadius: 20,
        marginBottom: 20
    }
})