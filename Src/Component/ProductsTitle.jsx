import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColors } from '../Utilities/Mycolors';

const ProductsTitle = ({ title, onPressSeeAll }) => {
  const nav = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: '700',color:'black' }}>{title}</Text>
      <TouchableOpacity onPress={() => {
        // Navigate to the screen where all products are visible
        nav.navigate('sellall')
        
      }}>
        <Text style={{ fontSize: 16, color: myColors.primary }}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductsTitle;
