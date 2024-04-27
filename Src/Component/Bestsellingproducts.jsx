import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { fruits } from '../Utilities/Data'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { myColors } from '../Utilities/Mycolors';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, removeFrom } from '../../Redux/CartSlice'

const Bestsellingproducts = () => {
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch()
    const nav = useNavigation()
    return (
        <View style={{paddingBottom:100}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={fruits}
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => { nav.navigate('ProductDetails', { main: item }) }} activeOpacity={0.7} style={{ height: responsiveHeight(28), borderWidth: 2, borderColor: '#e3e3e3', width: responsiveWidth(45), marginRight: 15, borderRadius: 15 }}>
                        <Image style={{ height: 125, width: 125, alignSelf: 'center', resizeMode: 'contain' }} source={{ uri: item.img }} />
                        <View style={{ paddingHorizontal: 10, gap: 3 }}>
                            <Text style={{ fontSize: 18, fontWeight: 600 ,color:'black'}}>{item.name}</Text>
                            <Text style={{ color: 'gray' }}>{item.pieces} </Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}> {'\u20B9'}{item.price}</Text>
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

export default Bestsellingproducts