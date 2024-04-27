import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../Utilities/Mycolors'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const nav = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            nav.replace('Signup')
        }, 3000)
    })
    return (
        <View style={styles.main}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor='transparent' />
            <View style={styles.container}>
                <Image style={styles.image} source={require('./../../assets/water-bottle.png')} />
                <View>
                    <Text style={styles.firsttext}>शारवी</Text>
                    <Text style={styles.secondtext}>लाकडी घाणा तेल</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: myColors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    image: {
        tintColor: myColors.secondary,
        height: 75,
        width: 75
    },
    firsttext: {
        fontSize: 75,
        color: myColors.secondary
    },
    secondtext: {
        fontSize: 17,
        color: myColors.secondary,
        textAlign: 'center',
        letterSpacing: 5,
        top: -15
    }
})

export default Splash