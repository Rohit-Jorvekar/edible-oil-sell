import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { removeFrom, decrementsQuantity, incrementsQuantity } from '../../../../Redux/CartSlice';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import { myColors } from '../../../Utilities/Mycolors';

const CartScreen = () => {
    const nav = useNavigation();
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch();

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        // Calculate the total amount whenever the storeData changes
        let amount = 0;
        storeData.forEach((element) => {
            amount += element.quantity * element.price;
        });
        setTotalAmount(amount);
    }, [storeData]);

    const handlePayment = () => {
        // Convert the amount to paise (multiply by 100)
        const formatAmount = (totalAmount * 100).toString();

        var options = {
            description: 'Edible oil selling',
            image: 'data:image/jpeg;base64,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',
            currency: 'INR',
            key: 'rzp_test_m70pfn54UFAtbW',
            amount: formatAmount,
            name: 'Edible Oils',
            prefill: {
                email: 'rohit@gmail.com',
                contact: '7028241749',
                name: 'Rohit Jorvekar'
            },
            theme: { color: '#F37254' }
        };

        RazorpayCheckout.open(options)
            .then((data) => {
                // handle success
                Alert.alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error) => {
                // handle failure
                Alert.alert(`Error: ${error.code} | ${error.description}`);
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white', gap: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '500' }}>My Cart</Text>
            <View style={{ flex: 0.9 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{}}
                    data={storeData}
                    renderItem={({ item, index }) => (
                        <View style={{ height: responsiveHeight(18), borderBottomColor: '#E3E3E3', borderBottomWidth: 2, flexDirection: 'row' }}>
                            <View style={{ flex: 0.35, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 120, width: 120, resizeMode: 'contain' }} source={{ uri: item.img }} />
                            </View>
                            <View style={{ flex: 0.7, paddingHorizontal: 10, paddingVertical: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                                    <AntDesign name='close' color={'gray'} size={26} onPress={() => { dispatch(removeFrom(item)) }} />
                                </View>
                                <Text style={{ color: 'gray', fontSize: 17, marginTop: 5 }}>{item.pieces}, price</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                                        <FontAwesome5 onPress={() => { dispatch(decrementsQuantity(item)) }} name='minus-circle' size={30} color={myColors.primary} />
                                        <Text style={{ fontSize: 20, color: 'black' }}>{item.quantity}</Text>
                                        <FontAwesome5 onPress={() => {
                                            if (item.quantity == 7) {

                                            } else {
                                                dispatch(incrementsQuantity(item))
                                            }
                                        }} name='plus-circle' size={30} color={myColors.primary} />
                                    </View>
                                    <Text style={{ fontSize: 22, fontWeight: '600', color: 'black' }}>{'\u20B9'}{item.quantity * item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={{ paddingBottom: 50 }}>
                <TouchableOpacity onPress={handlePayment} activeOpacity={0.8} style={styles.basketbtn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                        <Text style={styles.basketText}>PAY NOW</Text>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>
                            {totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    basketbtn: {
        backgroundColor: myColors.primary,
        borderRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    basketText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
    },
});

export default CartScreen;
