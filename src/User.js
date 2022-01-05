import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function User({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>User Screen</Text>
            <TouchableOpacity
            style={{ 
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
             onPress={() => navigation.navigate('Home')}
        >
            
            <Text style={{ color: 'white', fontSize: 24}}>홈 화면</Text>
        </TouchableOpacity>
        </View>
  
    )
  } 