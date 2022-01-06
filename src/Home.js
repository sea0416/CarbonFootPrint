import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Selection from './Fuel_Select'

export default function Home({ navigation }) {
    return(
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            {/*Button for Distance */}
            <Text>CO2 Emission</Text>

            <Selection/>


            <TouchableOpacity
            style={{ 
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('User')}
        >
         
            <Text style={{ color: 'white', fontSize: 24}}>거리</Text>
        </TouchableOpacity>

            {/*Button for emissions */}
        
            <TouchableOpacity
            style={{ 
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Emissions')}
        >
         
            <Text style={{ color: 'white', fontSize: 24}}>배출량</Text>
        </TouchableOpacity>
        </View>
  
    )
  }

   