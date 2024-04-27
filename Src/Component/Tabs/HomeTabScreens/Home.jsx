import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Homeicon from '../../Homeicon'
import Homesearch from '../../Homesearch'
import HomeBanner from '../../HomeBanner'
import ProductsTitle from '../../ProductsTitle'
import ProductCards from '../../ProductCards'
import Bestsellingproducts from '../../Bestsellingproducts'


const Home = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, paddingHorizontal: 20, paddingTop: 10}}>
        <View style={{gap: 20,paddingBottom:20}}>
          <Homeicon/>
          <Homesearch />
          <HomeBanner />
          <ProductsTitle title='Exclusive Offer' />
          <ProductCards />
          <ProductsTitle title='Best Selling' />
          <Bestsellingproducts />
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default Home