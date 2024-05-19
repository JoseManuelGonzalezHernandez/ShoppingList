import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({}) {
  const navigation = useNavigation(); 

  const navigate = screen => { // Funtion that receives a screen to redirect to it.
    navigation.navigate(screen);
  }

  return (
    <View > 
        <Text style={styles.text}>
            <TouchableOpacity  onPress={() => navigate('ProductsList')}>
              <Text style={styles.text}>AÑADIR PRODUCTOS</Text>
            </TouchableOpacity>
        </Text>
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