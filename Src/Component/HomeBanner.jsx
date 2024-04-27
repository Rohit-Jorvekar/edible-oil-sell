import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View>
     <Image style={{height:responsiveHeight(20),width:responsiveWidth(90),resizeMode:'cover'}} source={require('../../assets/Banner.png')}/>
    </View>
  )
}

export default HomeBanner