import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard,
    ToastAndroid,
  } from 'react-native';
  import React, {useState} from 'react';
  import {COLOURS} from '../database/Database';
  import {Image} from 'react-native';
  
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import DismissKeyboard from '../components/DismissKeyboard';
  
  const SignIn = ({navigation}: any) => {
    const [inputs, setInputs] = useState({email: '', password: ''});
  
    const validate = async () => {
      Keyboard.dismiss();
      let isValid = true;
      if (!inputs.email) {
        isValid = false;
        
      }
      if (!inputs.password) {
        isValid = false;
      }
      console.log(isValid)
      if (isValid) {
        login();
      } else {
        ToastAndroid.show('Enter Email And Password !', ToastAndroid.SHORT);
      }
    };
  
    const login = () => {
      setTimeout(async () => {
        let userData: any = await AsyncStorage.getItem('userData');
        
        if (userData) {
          userData = JSON.parse(userData);
          console.log(userData)
          if (
            inputs.email == userData.email &&
            inputs.password == userData.password
          ) {
            
            navigation.navigate('Home');
            AsyncStorage.setItem(
              'userData',
              JSON.stringify({...userData, loggedIn: true}),
            );
          } else {
            ToastAndroid.show(
              'Email OR Password Wrong Try Again !',
              ToastAndroid.SHORT,
            );
          }
        } else {
          ToastAndroid.show('User Does Not Exist!', ToastAndroid.SHORT);
        }
      }, 1000);
    };
  
    const handleOnchange = (text: any, input: any) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };
  
    return (
      <DismissKeyboard>
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
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Text
              style={{
                color: '#2b2b2b', 
                fontSize: 35,
                fontWeight: '800',
                letterSpacing: 1.5,
              }}>
              Sign
            </Text>
            <Text
              style={{
                color: '#ff89a9', 
                fontSize: 35,
                fontWeight: '800',
                letterSpacing: 1.5,
              }}>
              In
            </Text>
            </View>
  
            <View
              style={{
                height: 55,
                backgroundColor: COLOURS.light,
                flexDirection: 'row',
                paddingHorizontal: 15,
                borderWidth: 0.5,
                width: '86%',
                borderRadius: 5,
                marginBottom: 20,
              }}>
              <TextInput
                onChangeText={text => handleOnchange(text, 'email')}
                style={{
                  height: 55,
                  width: '86%',
                  color: '#ff89a9',
                  fontSize: 14,
                }}
                placeholderTextColor="#000"
                placeholder="Email"
              />
            </View>
  
            <View
              style={{
                height: 55,
                backgroundColor: COLOURS.light,
                flexDirection: 'row',
                paddingHorizontal: 15,
                borderWidth: 0.5,
                width: '86%',
                borderRadius: 5,
                marginBottom: 20,
              }}>
              <TextInput
                onChangeText={text => handleOnchange(text, 'password')}
                style={{
                  height: 55,
                  width: '86%',
                  color: COLOURS.black,
                  fontSize: 14,
                }}
                placeholderTextColor="#000"
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View
            style={{
              height: '8%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={validate}
              style={{
                width: '86%',
                height: '90%',
                backgroundColor: '#2b2b2b',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  letterSpacing: 1,
                  color: COLOURS.white,
                }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: COLOURS.black,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Don't have an account ?{'  '}
              </Text>
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={{
                  color: '#ff89a9',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Register Now
              </Text>
            </View>
          </View>
        </View>
      </DismissKeyboard>
    );
  };
  
  export default SignIn;
  