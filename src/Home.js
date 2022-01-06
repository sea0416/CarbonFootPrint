import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


import Selection from './Fuel_Select'

export default function Home({ navigation }) {
    const [count, setCount] = useState();
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          
        },

        
      });

    return(
        

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>CO2 Emission</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCount}
                value={count}
                placeholder="Fuel Consumption"
             />
            

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
         
            <Text style={{ color: 'white', fontSize: 24}}>Distance</Text>
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
         
            <Text style={{ color: 'white', fontSize: 24}}>Submit</Text>
        </TouchableOpacity>
        </View>
  
    )
  }

   