import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigate = screen  => {
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

export default SettingsScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20%',
        alignSelf: 'center'
    }
})