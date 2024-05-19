import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function ProductsList({}) {
  const navigation = useNavigation();

  const navigate = screen  => { // Funtion that receives a screen to redirect to it.
    navigation.navigate(screen)
  }

  return (
    <View > 
        <Text style={styles.text}>LÁCTEOS</Text>
        <Text style={styles.text}>CONGELADOS</Text>
        <Text style={styles.text}>CARNE</Text>
        <Text style={styles.text}>LIMPIEZA</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20%',
        alignSelf: 'center'
    }
})