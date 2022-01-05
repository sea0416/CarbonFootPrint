import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CO2 Emission</Text>
  
            <TouchableOpacity
            style={{ 
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('User')}
        >
         
            <Text style={{ color: 'white', fontSize: 24}}>지도</Text>
        </TouchableOpacity>
        </View>
  
    )
  }

   