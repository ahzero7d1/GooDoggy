import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Button, TouchableOpacity, Dimensions} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

export default function MaliciousScreen({navigation}) {
    const subList = [
        {text: 'Payment Reversal', sender: 'Marketing9', select: false},
        {text: 'In the absence of our Agent who is out on vacation due to COVID 19...', sender: 'marketing9', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', sender: '중고나라', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', sender: '중고나라', select: false},
        {text: 'Payment Reversal', sender: 'marketing9', select: false},

    ]

    const subList2 = [
        {text: '[고용노동부] 임금체불관련 출석요구서', sender: '고용노동부', select: false},
        {text: 'Busan SHIPMENT', sender: 'ship coorperation', select: false},
        {text: 'Payment Reversal', sender: 'Ameen-isham', select: false},
        {text: 'New Purchase Order', sender: 'Emerson', select: false},
        {text: 'Rubber Purchase Order', sender: 'Allison.Tegler', select: false},
        {text: '[김지영] 지원서', sender: '김지영', select: false},
        {text: '[고용노동부] 임금체불관련 출석요구서', sender: '고용노동부', select: false},
        {text: 'Busan SHIPMENT', sender: 'ship coorperation', select: false},
        {text: 'Payment Reversal', sender: 'Ameen-isham', select: false},
        {text: 'New Purchase Order', sender: 'Emerson', select: false},
        {text: 'Rubber Purchase Order', sender: 'Allison.Tegler', select: false},
        {text: '[김지영] 지원서', sender: '김지영', select: false},
    ]

    const subList3 = [
        {text: '여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...', sender: '야놀자', select: false},
        {text: '회원님의 포인트가 소멸될 예정입니다. 다음 링크...', sender: '중고나라', select: false},
    ]
    const [checkBox, setCheckBox]=React.useState(subList);
    const [checkBox2, setCheckBox2]=React.useState(subList2);
    const [checkBox3, setCheckBox3]=React.useState(subList3);

    const [allButton, setAllButton]=React.useState(false);
    const [allButton2, setAllButton2]=React.useState(false);
    const [allButton3, setAllButton3]=React.useState(false);

     const onSelct = (index) => {
        const newSelect = [...checkBox];
        newSelect[index].select = !newSelect[index].select;
        setCheckBox(newSelect);
    }
    const onSelct2 = (index) => {
        const newSelect2 = [...checkBox2];
        newSelect2[index].select = !newSelect2[index].select;
        setCheckBox2(newSelect2);
    }
    const onSelct3 = (index) => {
        const newSelect3 = [...checkBox3];
        newSelect3[index].select = !newSelect3[index].select;
        setCheckBox3(newSelect3);
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
        setCheckBox2((prevSelect2)=>
            prevSelect2.map((checkBox)=>({...checkBox, select: true}))
        );
        setAllButton(!allButton);
    }
    const deselectAll2 =()=>{
        setCheckBox2((prevSelect2)=>
        prevSelect2.map((checkBox)=>({...checkBox, select:false}))
        );
        setAllButton(!allButton);

    }

    const selectAll3 =()=>{
        setCheckBox3((prevSelect3)=>
            prevSelect3.map((checkBox)=>({...checkBox, select: true}))
        );
        setAllButton(!allButton);
    }
    const deselectAll3 =()=>{
        setCheckBox3((prevSelect3)=>
        prevSelect3.map((checkBox)=>({...checkBox, select:false}))
        );
        setAllButton(!allButton);

    }

    const isAnyCheckboxChecked = checkBox.some((checkbox) => checkbox.select);

    const handleDelete=()=>{
        setCheckBox((prevCheckBox)=> prevCheckBox.filter((checkBox)=>!checkBox.select));
        setCheckBox2((prevCheckBox2)=> prevCheckBox2.filter((checkBox2)=>!checkBox2.select));
        setCheckBox3((prevCheckBox3)=> prevCheckBox3.filter((checkBox3)=>!checkBox3.select));
        setCheckBox((prevSelect)=>
            prevSelect.map((checkBox)=>({...checkBox, select:false})),
        );
        setCheckBox2((prevSelect2) =>
            prevSelect2.map((checkBox2)=>({...checkBox2, select:false})),
        );
        setCheckBox3((prevSelect3) => 
            prevSelect3.map((checkBox3)=>({...checkBox3, select:false})),
        )
    }

    return(
<View>
    <View>
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
    </View>

    <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 50, fontWeight: 'bold'}}>
        현재 악성 메일은 <Text style={styles.mailCounter}>총 {checkBox.length+checkBox2.length+checkBox3.length}건</Text>입니다.
    </Text>

    <ScrollView decelerationRate="fast" pagingEnabled={true} snapToInterval={Dimensions.get('window').width} horizontal showsHorizontalScrollIndicator={false} style={{alignSelf: 'center'}}>

    <View style={styles.malListView1}>
    <Image style={{resizeMode: 'contain', width: 300, height: 40, marginLeft: 20, marginTop: 10}} source={require('../../assets/pics/malicious_screen/mailCounter2.png')}/>
    <Pressable onPress={allButton?deselectAll:selectAll} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <TouchableHighlight style={styles.selectAllButton } underlayColor='#fff'>
            <Text style={{alignSelf: 'center', fontSize: 14, paddingTop: 5, paddingBottom: 4}}>
                전체 선택
            </Text>
        </TouchableHighlight>
    </Pressable>
    <ScrollView>
            <View style={styles.boxContainer}>
                    <ScrollView style={{alignSelf: 'center'}}>
                    {checkBox.map((value, index)=>(
                        <View style={styles.maliciousListView}>
                            <Pressable key={index} onPress={()=>onSelct(index)}>
                        <View>
                            {value.select?
                            <Image
                                style={{marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_checked.png')}
                            />
                            :<Image 
                                style={{marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_notChecked.png')}
                            />}
                            {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>{value.sender}</Text>
                            <Text style={{fontSize: 16}}>{value.text}</Text> */}
                        </View>
                        </Pressable>
                        <View style={styles.maliciousListText}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{value.sender}</Text>
                            <Text style={{fontSize: 14, marginTop: 10, marginRight: 20}}>{value.text}</Text>
                        </View>

                        </View>
                    ))}
                    
                </ScrollView>
            </View>
    </ScrollView>
    </View>

    <View style={styles.malListView2}>
    <Image style={{resizeMode: 'contain', width: 300, height: 40, marginLeft: 20, marginTop: 10}} source={require('../../assets/pics/malicious_screen/attachment.png')}/>
    <Pressable onPress={allButton?deselectAll2:selectAll2} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <TouchableHighlight style={styles.selectAllButton } underlayColor='#fff'>
            <Text style={{alignSelf: 'center', fontSize: 14, paddingTop: 5, paddingBottom: 4}}>
                전체 선택
            </Text>
        </TouchableHighlight>
    </Pressable>
    <ScrollView>
            <View style={styles.boxContainer}>
                    <ScrollView style={{alignSelf: 'center'}}>
                    {checkBox2.map((value, index)=>(
                        <View style={styles.maliciousListView}>
                            <Pressable key={index} onPress={()=>onSelct2(index)}>
                        <View>
                            {value.select?
                            <Image
                                style={{marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_checked.png')}
                            />
                            :<Image 
                                style={{marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_notChecked.png')}
                            />}
                            {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>{value.sender}</Text>
                            <Text style={{fontSize: 16}}>{value.text}</Text> */}
                        </View>
                        </Pressable>
                        <View style={styles.maliciousListText}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{value.sender}</Text>
                            <Text style={{fontSize: 14, marginTop: 10, marginRight: 20}}>{value.text}</Text>
                        </View>

                        </View>
                    ))}
                    
                </ScrollView>
            </View>
    </ScrollView>
    </View>

    <View style={styles.malListView3}>
    <Image style={{resizeMode: 'contain', width: 300, height: 40, marginLeft: 20, marginTop: 10}} source={require('../../assets/pics/malicious_screen/etc.png')}/>
    <Pressable onPress={allButton?deselectAll3:selectAll3} style={({pressed}) => { return{opacity: pressed ? 0.5 : 1}}}>
        <TouchableHighlight style={styles.selectAllButton } underlayColor='#fff'>
            <Text style={{alignSelf: 'center', fontSize: 14, paddingTop: 5, paddingBottom: 4}}>
                전체 선택
            </Text>
        </TouchableHighlight>
    </Pressable>
    <ScrollView>
            <View style={styles.boxContainer}>
                    <ScrollView style={{alignSelf: 'center'}}>
                    {checkBox3.map((value, index)=>(
                        <View style={styles.maliciousListView}>
                            <Pressable key={index} onPress={()=>onSelct3(index)}>
                        <View>
                            {value.select?
                            <Image
                                style={{marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_checked.png')}
                            />
                            :<Image 
                                style={{marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/subscribeDelete_screen/sub_notChecked.png')}
                            />}
                        </View>
                        </Pressable>
                        <View style={styles.maliciousListText}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{value.sender}</Text>
                            <Text style={{fontSize: 14, marginTop: 10, marginRight: 20}}>{value.text}</Text>
                        </View>

                        </View>
                    ))}
                    
                </ScrollView>
            </View>
    </ScrollView>
    </View>
    </ScrollView>
    <View style={{flexDirection: 'row', resizeMode:"contain", alignSelf: 'center'}}>
         <Pressable onPress={handleDelete}><Image style={{marginTop: 10, marginRight:10, borderRadius: 8, width: 160, height: 80, resizeMode:"contain"}} source={require('../../assets/pics/malicious_screen/spam.png')}/></Pressable>
         <Pressable onPress={handleDelete}><Image style={{marginTop: 10, borderRadius: 8, marginLet:10, width: 160, height: 80, resizeMode:"contain"}} source={require('../../assets/pics/malicious_screen/delete.png')}/></Pressable>
    </View>
</View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        left: 360,
        width: 30,
        marginTop: 60
    },
    logoContainer: {
        left: 25,
        marginTop: 60,
        position: 'absolute'
    },
    mailCounter : {
        fontSize: 26, 
        fontWeight: 'bold'
    },
    malListView1 : {
        backgroundColor: '#C6C6C6',
        alignSelf: 'center',
        width: 356,
        height: 500,
        marginTop: 40,
        borderRadius: 15,
        marginLeft: 30,
        marginRight: 15
    },
    malListView2 : {
        backgroundColor: '#C6C6C6',
        alignSelf: 'center',
        width: 356,
        height: 500,
        marginTop: 40,
        borderRadius: 15,
        marginLeft: 45,
        marginRight: 15
    },
    malListView3 : {
        backgroundColor: '#C6C6C6',
        alignSelf: 'center',
        width: 356,
        height: 500,
        marginTop: 40,
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 30
    },
    selectAllButton: {
        marginLeft: 260,
        width: 80,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 13,
        marginBottom: 5
    },
    maliciousListView : {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        width: 330,
        height: 93,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 8,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: "row"
    },
    maliciousListText : {
        marginTop: 6,
        marginLeft: 3,
        marginBottom: 10,
        paddingRight: 15
    }
})