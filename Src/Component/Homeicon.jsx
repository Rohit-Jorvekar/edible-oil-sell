import { View, Text ,Image} from 'react-native'
import React from 'react'

const Homeicon = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image style={{width:40,height:45}} source={require('../../assets/coconut-oil.png')}/>
    </View>
  )
}

export default Homeicon