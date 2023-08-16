import * as React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default function AccountScreen({navigation}) {
    return(
<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <Text
        onPress={() => navigation.navigate('GooDoggy')}
        style={{fontSize: 26, fontWeight: 'bold'}}
    >
        Account Screen
    </Text>
</View>
    );
}

AccountScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };