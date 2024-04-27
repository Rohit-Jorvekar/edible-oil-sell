// import { View, Text, TextInput } from 'react-native'
// import React from 'react'
// import {responsiveHeight} from 'react-native-responsive-dimensions'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


// const Homesearch = () => {
//   return (
//     <View style={{backgroundColor:'#F2F3F2',height:responsiveHeight(6.5),borderRadius:10,flexDirection:'row',alignItems:'center',paddingHorizontal:20,gap:10}}>
//       <FontAwesome5 name='search' size={24} color={'black'}/>
//       <TextInput style={{flex:1}} placeholder='Search Product '/>
//     </View>
//   )
// }

// export default Homesearch


import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, Text } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { fruits } from '../Utilities/Data'; // Import your data array

const Homesearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleInputChange = (text) => {
    setSearchQuery(text);
    if (text === '') {
      // Clear suggestions when the search input is empty
      setSearchResults([]);
    } else {
      // Update suggestions based on the search input
      handleSearch(text);
    }
  };

  return (
    <View>
      <View style={{ backgroundColor: '#F2F3F2', height: responsiveHeight(6.5), borderRadius: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, gap: 10 }}>
        <FontAwesome5 name='search' size={24} color={'black'} />
        <TextInput
          style={{ flex: 1,color:'black' }}
          placeholder='Search Product'
          value={searchQuery}
          onChangeText={handleInputChange}
        />
      </View>

      {/* Display search results */}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Image source={{ uri: item.img }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{color:'black'}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Homesearch;