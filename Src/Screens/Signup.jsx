import { View, Text, StatusBar, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { myColors } from '../Utilities/Mycolors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const Signup = () => {
  const [isVisible, setisVisible] = useState(true)
  const [usercredentials, setusercredentials] = useState({ name: '', email: '', password: '' })
  const { email, password, name } = usercredentials


 const handlesubmit= async()=>{

  
  const userData={
    username:name,
    email,
    password
  }

await axios.post("http://192.168.1.10:3000/resgister",userData)
.then(res=>{console.log(res.data)
  if(res.data.status=="ok"){
    Alert.alert("Register Successfull!!")
    nav.navigate('Login') 
  }else{
    Alert.alert(JSON.stringify(res.data))
  }
})

.catch(e=>console.log(e))


 }



  const nav = useNavigation()
  return (
    <SafeAreaView style={styles.MainParent}>
      <StatusBar translucent={true} backgroundColor='transparent' />
      <ScrollView style={styles.scrlview}>
        <Image style={styles.imgLogo} source={require('./../../assets/coconut-oil.png')} />
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>

          <Text style={styles.SinUpText}>Sign Up</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray', marginTop: 10 }}>Enter your credentials to continue</Text>

          <Text style={styles.inputlabel}>Username</Text>
          <TextInput value={name} onChangeText={(val) => setusercredentials({ ...usercredentials, name: val })} maxLength={9} keyboardType='name-phone-pad' style={{ borderBottomWidth: 2, borderColor: '#E3E3E3', fontSize: 16, marginTop: 15,color:'black'}} />

          <Text style={styles.inputlabel}>Email</Text>
          <TextInput value={email} onChangeText={(val) => setusercredentials({ ...usercredentials, email: val })} keyboardType='email-address' style={{ borderBottomWidth: 2, borderColor: '#E3E3E3', fontSize: 16, marginTop: 15,color:'black' }} />

          <Text style={styles.inputlabel}>Password</Text>
          <View style={styles.passIconView}>

            <TextInput value={password} onChangeText={(val) => setusercredentials({ ...usercredentials, password: val })} secureTextEntry={isVisible} maxLength={6} keyboardType='ascii-capable' style={{ fontSize: 16, marginTop: 15, flex: 0.9,color:'black' }} />
            <FontAwesome5 onPress={() => setisVisible(!isVisible)} name={isVisible ? 'eye-slash' : 'eye'} color={'black'} size={24} />
          </View>

          <Text numberOfLines={2} style={styles.PrivacyPolicyLine}>
            By continuing you agree yo our<Text style={{color:myColors.primary,fontWeight:'bold'}}> Terms of Service</Text> and <Text style={{color:myColors.primary,fontWeight:'bold'}}>Privacy Policy</Text> 
          </Text>

          <TouchableOpacity onPress={() => handlesubmit()} style={{ backgroundColor: myColors.primary, marginTop: 30, height: 70, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.Signuptextbtn}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.BottomView}>
            <Text style={{ fontSize: 16,color:'black' }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => nav.navigate('Login')}>
              <Text style={styles.LoginNowTxt}>Login Now</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
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
    marginTop: 30
  },
  passIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#E3E3E3',
    alignItems: 'center'
  },
  Signuptextbtn: {
    fontSize: 19,
    color: myColors.secondary,
    fontWeight: '500'
  },
  PrivacyPolicyLine: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginTop: 15,
    letterSpacing: 0.7,
    lineHeight: 25,
    width: '95%',
    opacity: 0.7
  },
  BottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 5
  },
  LoginNowTxt: {
    fontSize: 15,
    color: myColors.primary,
    fontWeight: '600'
  },
  
})
export default Signup