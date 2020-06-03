import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "./src/screens/IndexScreen"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={{ 
            title:'Blogs' 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;