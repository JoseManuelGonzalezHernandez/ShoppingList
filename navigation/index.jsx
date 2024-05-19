import React, {useState} from 'react'
import {} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  

import  HomeScreen  from "../src/screens/HomeScreen";
import  ProductsList  from "../src/screens/ProductsList";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"> 

                <Stack.Screen name='HomeScreen' children={() => <HomeScreen/>} options={{ title: 'MERCADONA' }}/>

                <Stack.Screen name='ProductsList' children={() => <ProductsList/>} options={{ title: 'PRODUCTOS' }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
};

