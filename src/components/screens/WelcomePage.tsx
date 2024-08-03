import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOURS} from '../database/Database';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const WelcomePage = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 50,
        }}
        source={require('../database/images/login/logo.png')}
      />
      <View style={{alignItems: 'center', marginTop: 70}}>
        <Text
          style={{
            color: '#ff89a9',
            fontSize: 40,
            fontWeight: '800',
            fontFamily: 'roboto',
            letterSpacing: 1.5,
          }}>
          WELCOME !
        </Text>
        <Text
          style={{
            color: COLOURS.black,
            fontSize: 17,
            fontFamily: 'roboto',
            textAlign: 'center',
            letterSpacing: 1.5,
            width: '90%',
            marginTop: '10%',
          }}>
          Discover the latest trends and timeless styles right at your fingertips.
          {'\n'}
          Happy shopping!
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: '5%',
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: '#2b2b2b',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
