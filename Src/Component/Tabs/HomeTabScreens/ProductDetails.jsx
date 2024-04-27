import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Share
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Dropdown from '../../Dropdown';
import { myColors } from '../../../Utilities/Mycolors';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../../../Redux/CartSlice';


const ProductDetails = ({ route }) => {
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch();
    const productdata = route.params.main;
    const { name, price, pieces, img } = productdata;
    const nav = useNavigation();

    const handleShare = async () => {
        try {
            const result = await Share.share({
               
                title: 'Product Details',
                message: `Check out this amazing product - ${name} at just ${price}`,
                url:img,
                recipient:'917028241749'
               
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared With activity type of:', result.activityType);
                }

                else {
                    console.log('Share ')
                }

            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error) {
            console.error('Error while sharing:', error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" />
            <View>
                <Image
                    resizeMode="contain"
                    style={styles.imagestyle}
                    source={{ uri: img }} // Ensure img is a valid URL or replace it with the correct structure
                />
                <View style={styles.shareandbachview}>
                    <FontAwesome5
                        onPress={() => {
                            nav.goBack();
                        }}
                        name="chevron-left"
                        color={'black'}
                        size={28}
                    />
                    <Feather
                        name="share"
                        color={'black'}
                        size={28}
                        onPress={handleShare}
                    />
                </View>
            </View>
            <View style={{ paddingHorizontal: 15, backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>{name}</Text>
                    <MaterialIcons name='favorite-border' color={'black'} size={30} />
                </View>
                <Text style={{ marginTop: 5, fontSize: 15, color: 'gray' }}>{pieces} pieces</Text>
                <Text style={styles.pricetxt}>{'\u20B9'}{price}</Text>
                <Dropdown />
                <View style={{ flex: 0.9, justifyContent: 'flex-end',paddingBottom:100}}>
                    {
                        storeData.some((value) => value.name === productdata.name) ?
                            <TouchableOpacity disabled={true} activeOpacity={0.8} style={styles.basketbtn1}>
                                <Text style={styles.basketText}>Added to Basket</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => { dispatch(addtoCart(productdata)); nav.navigate('Cart'); }} activeOpacity={0.8} style={styles.basketbtn}>
                                <Text style={styles.basketText}>Add to Basket</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    imagestyle: {
        height: 300,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    shareandbachview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    pricetxt: {
        marginTop: 5,
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold'
    },
    basketbtn: {
        backgroundColor: myColors.primary,
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    basketbtn1: {
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    basketText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    }
});

export default ProductDetails;
