import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../Utilities/Mycolors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const nav = useNavigation();
  const [isVisible, setisVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginuser = () => {
    console.log(email, password);
    const userData = {
      email: email,
      password: password
    }
    axios.post("http://192.168.1.10:3000/login-user", userData)
      .then(res => {
        console.log(res.data)
        if (res.data.status == "ok") {
          Alert.alert('Logged In Successfully');
          AsyncStorage.setItem("token", res.data.data);
          console.log("Token saved:", res.data.data);
          nav.navigate('Tabs', { userData: res.data.data });
        } else {
          Alert.alert('Login failed. Please check your credentials.');
        }
      })
      .catch(error => {
        console.error("Login Error: ", error);
        Alert.alert('Login failed. Please try again later.');
      });
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    Alert.alert('Forgot Password', 'Please check your email for password reset instructions.');
  };

  return (
    <SafeAreaView style={styles.MainParent}>
      <ScrollView keyboardShouldPersistTaps={"always"} style={styles.scrlview}>
        <Image style={styles.imgLogo} source={require('./../../assets/coconut-oil.png')} />
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text style={styles.SinUpText}>Login</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray', marginTop: 10 }}>Enter your email and password</Text>

          <Text style={styles.inputlabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            style={{ borderBottomWidth: 2, borderColor: '#E3E3E3', fontSize: 16, marginTop: 15, color: "black" }}
          />

          <Text style={styles.inputlabel}>Password</Text>
          <View style={styles.passIconView}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={isVisible}
              maxLength={6}
              keyboardType='ascii-capable'
              style={{ fontSize: 16, marginTop: 15, flex: 0.9, color: "black" }}
            />
            <FontAwesome5 onPress={() => setisVisible(!isVisible)} name={isVisible ? 'eye-slash' : 'eye'} color={'black'} size={24} />
          </View>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.frgotpass}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={loginuser} style={styles.Loginbtn}>
            <Text style={styles.Logintxt}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.BottomView}>
            <Text style={{ fontSize: 16, color: 'black' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => nav.navigate('Signup')}>
              <Text style={styles.sigupuptxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainParent: {
    flex: 1,
    backgroundColor: myColors.secondary
  },
  scrlview: {
    flex: 1,
    paddingTop: 30
  },
  imgLogo: {
    alignSelf: "center",
    height: 80,
    width: 80
  },
  SinUpText: {
    color: myColors.third,
    fontSize: 24,
    fontWeight: '500'
  },
  inputlabel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    marginTop: 40
  },
  passIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#E3E3E3',
    alignItems: 'center'
  },
  frgotpass: {
    fontSize: 14,
    fontWeight: '700',
    color: myColors.primary,
    marginTop: 15,
    textAlign: 'right'
  },
  Loginbtn: {
    backgroundColor: myColors.primary,
    marginTop: 30,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Logintxt: {
    fontSize: 19,
    color: myColors.secondary,
    fontWeight: '500'
  },
  BottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 5
  },
  sigupuptxt: {
    fontSize: 15,
    color: myColors.primary,
    fontWeight: '600'
  }
});

export default Login;
