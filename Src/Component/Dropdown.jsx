import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DropBox } from '../Utilities/Data'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Dropdown = () => {
    const [myindex, setmyindex] = useState()
    const [toggle, settoggle] = useState(false)

  return (
    <View style={{marginTop:20}}>
     <FlatList
     data={DropBox}
     renderItem={({item,index})=>
        <View >
            <TouchableOpacity onPress={()=>{setmyindex(index); settoggle(!toggle)}} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomColor:'#E3E3E3',borderBottomWidth:2,marginBottom:10,paddingVertical:15}}>
               <Text style={{color:'black'}}>{item.title}</Text>
               <FontAwesome5  name={toggle?'chevron-down':'chevron-right'} color={'black'} size={24} />

            </TouchableOpacity>
            {
                myindex == index && toggle ? <Text style={{color:'black'}}>{item.content}</Text>:null
            }
        </View>
     }/>
    </View>
  )
}

export default Dropdown