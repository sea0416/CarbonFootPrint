import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import User from './src/User';
import Emissions from './src/Emissions';

const Stack = createNativeStackNavigator();

function App () {
 
  return (
     
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen
            name='Home'
            component={Home}
          />

          <Stack.Screen
            name='User'
            component={User}
          />

          <Stack.Screen
            name='Emissions'
            component={Emissions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  
  )
  
}

export default App;