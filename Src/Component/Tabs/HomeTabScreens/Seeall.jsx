import { View, Text, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { fruits } from '../../../Utilities/Data'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useDispatch, useSelector } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { myColors } from '../../../Utilities/Mycolors'
import { useNavigation } from '@react-navigation/native'
import { addtoCart, removeFrom } from '../../../../Redux/CartSlice'





const Seeall = () => {
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch()
    const nav = useNavigation()
    return (
        <View style={{paddingBottom:130,backgroundColor:'white'}}>
            <StatusBar  backgroundColor={'white'}/>
            {/* <Text style={{fontSize:20,alignSelf:'center',fontWeight:"bold",marginTop:10,color:'black'}}>See All Product</Text> */}
            <FlatList
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                data={fruits}
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => { nav.navigate('ProductDetails', { main: item }) }} activeOpacity={0.7} style={{ height: responsiveHeight(28), borderWidth: 2, borderColor: '#e3e3e3', width: responsiveWidth(45), marginHorizontal: 9, marginVertical: 10, borderRadius: 15, alignSelf: 'center' }}>
                        <Image style={{ height: 125, width: 125, alignSelf: 'center', resizeMode: 'contain' }} source={{ uri: item.img }} />
                        <View style={{ paddingHorizontal: 10, gap: 3 }}>
                            <Text style={{ fontSize: 18, fontWeight: 600,color:'black' }}>{item.name}</Text>
                            <Text style={{ color: 'gray' }}>{item.pieces} </Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black'}}> {'\u20B9'}{item.price}</Text>
                                {storeData.some((value) => value.name == item.name) ? (
                                    <FontAwesome5
                                        name="minus-square"
                                        size={33}
                                        color={myColors.primary}
                                        onPress={() => {
                                            dispatch(removeFrom(item));
                                        }}
                                    />
                                ) : (
                                    <FontAwesome5
                                        name="plus-square"
                                        size={33}
                                        color={myColors.primary}
                                        onPress={() => {
                                            dispatch(addtoCart(item));
                                        }}
                                    />
                                )}


                            </View>
                        </View>
                    </TouchableOpacity>
                } />



        </View>
    )
}

export default Seeall