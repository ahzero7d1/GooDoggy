import * as React from 'react';
import {View, Pressable, Image, Text, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';


export default function ServiceSurveyScreen({navigation}) {
    const starList = [{title: '1', isSelected: 'false'},
                {title: '2', isSelected: 'false'},
                {title: '3', isSelected: 'false'},
                {title: '4', isSelected: 'false'},
                {title: '5', isSelected: 'false'}]

    const [checkStar, setCheckStar]=React.useState(starList);

    const [goodText, onChangeGoodText] = React.useState('');
    const [badText, onChangeBadText] = React.useState('');

    // const onSelct = (index) => {
    //     const newSelect = [...checkStar];
    //     newSelect[index].isSelected = !newSelect[index].isSelected;
    //     setCheckStar(newSelect);
    // }

    const pressSubmit = () => {
        if (checkStar === 0){
            alert("별점을 입력해 주세요");
            return;
        }
        setCheckStar(0)
        onChangeGoodText('')
        onChangeBadText('')
        alert("제출이 완료되었습니다! 소중한 의견 감사합니다.")
    }


    return(
<View style={{flex:1}}>
<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
>
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

    <View style={styles.surveyTitle}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>GooDoggy</Text>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>만족도 평가에 참여해주세요!</Text>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>환경 개선에 많은 도움이 됩니다.</Text>
    </View>

    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Pressable onPress={() => setCheckStar(1)}>
            <Image style={checkStar >= 1 ? styles.starSelected : styles.starUnselected}
            source={require('../../assets/pics/service_survey_screen/grey_star.png')}></Image>
        </Pressable>
        <Pressable onPress={() => setCheckStar(2)}>
            <Image style={checkStar >= 2 ? styles.starSelected : styles.starUnselected}
            source={require('../../assets/pics/service_survey_screen/grey_star.png')}></Image>
        </Pressable>
        <Pressable onPress={() => setCheckStar(3)}>
            <Image style={checkStar >= 3 ? styles.starSelected : styles.starUnselected}
            source={require('../../assets/pics/service_survey_screen/grey_star.png')}></Image>
        </Pressable>
        <Pressable onPress={() => setCheckStar(4)}>
            <Image style={checkStar >= 4 ? styles.starSelected : styles.starUnselected}
            source={require('../../assets/pics/service_survey_screen/grey_star.png')}></Image>
        </Pressable>
        <Pressable onPress={() => setCheckStar(5)}>
            <Image style={checkStar >= 5 ? styles.starSelected : styles.starUnselected}
            source={require('../../assets/pics/service_survey_screen/grey_star.png')}></Image>
        </Pressable>
    </View>

    {/* <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {checkStar.map((value, index)=>(
            <View>
                <Pressable key={index} onPress={()=>onSelct(index)}>
                      <View style={{alignSelf: 'center'}}>
                            {value.isSelected?
                            <Image
                                style={{resizeMode: 'contain', width: 60, marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/service_survey_screen/star.png')}
                            />
                            :<Image 
                                style={{resizeMode: 'contain', width: 60, marginLeft: 10, margin: 5}}
                                source={require('../../assets/pics/service_survey_screen/grey_star.png')}
                            />}
                        </View>
                </Pressable>
            </View>
        ))}
        
        </View> */}

        <ScrollView style={{alignSelf: 'center'}}>
            <View style={styles.discriptionTitle}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>좋은 점을 남겨주세요.</Text>
            </View>
            <TextInput multiline={true} style={styles.inputStyle} placeholder="구도기의 좋은 점을 말해주세요." onChangeText = {text => onChangeGoodText(text)}>{goodText}
            </TextInput>

            <View style={styles.discriptionTitle}>
                <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>불편한 점을 남겨주세요.</Text>
            </View>
            <TextInput multiline={true} style={styles.inputStyle} placeholder="구도기가 보완해야 할 점을 말해주세요." onChangeText = {text => onChangeBadText(text)}>{badText}
            </TextInput>
        <Pressable style={({pressed}) => {return{opacity: pressed ? 0.5 : 1}}} onPress={pressSubmit}>
            <Image
            style={{alignSelf: 'center', resizeMode: 'contain', width: 145, height: 60, marginTop: 45}}
            source={require('../../assets/pics/service_survey_screen/submit_button.png')}></Image>
        </Pressable>
        </ScrollView>
        </KeyboardAvoidingView>

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
    surveyTitle: {
        paddingTop: 40,
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: 22,
        fontWeight: 'semi-bold',
    },
    starSelected: {
        resizeMode: 'contain', 
        width: 60, 
        marginLeft: 10, 
        tintColor: 'rgb(244, 217, 134)'
    },
    starUnselected: {
        resizeMode: 'contain', 
        width: 60, 
        marginLeft: 10, 
    },
    discriptionTitle : {
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    inputStyle : {
        fontSize: 15,
        marginTop: 20,
        width: 340,
        height: 100,
        borderColor: '#C9C9C9',
        borderWidth: 3,
        paddingHorizontal: 8,
        borderRadius: 10,
        padding: 10,
        flexShrink: 1,
    }

})

ServiceSurveyScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

