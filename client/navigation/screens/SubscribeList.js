import * as React from 'react';
import {View, Text, Pressable, Image, StyleSheet, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function SubscribeList({navigation}) {

    const [check,setCheck] = useState([]);
    const dataID=useRef(0);

    const onCreate=(e)=>{
        const subList={
            id: dataID.currnet
        }
    dataID.current+=1;
    setCheck([subList,...check])
    }
    
    return(
        <>
        <View style={styles.boxContainer}>
                <ScrollView style={styles.ScrollView}>
                    <Pressable onPress={handleChange}>
                        <View style={{ flexDirection: 'row' }}>
                            {select ?
                                <Image
                                    style={{ marginLeft: 10, margin: 5 }}
                                    source={require('../../assets/pics/subscribeDelete_screen/sub_checked.png')} />
                                : <Image
                                    style={{ marginLeft: 10, margin: 5 }}
                                    source={require('../../assets/pics/subscribeDelete_screen/sub_notChecked.png')} />}

                            <Text style={{ marginTop: 8, marginLeft: 2, fontSize: 16 }}>여름 휴가 초특가!! 국내여행 강원도, 부산, 제주...</Text>
                        </View>
                    </Pressable>

                </ScrollView>
            </View>
        </>
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
        height: 200,
        borderWidth: 2,
        borderColor: '#c6c6c6',
        borderRadius: 20,
        marginBottom: 20
    }
})