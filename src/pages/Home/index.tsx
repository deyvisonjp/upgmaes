import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="menu"
            size={24}
            color='#0e0e10'
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/img/logo.png')}
        />
        <TouchableOpacity>
          <MaterialIcons
            name="shopping-cart"
            size={24}
            color='#0e0e10'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TouchableOpacity>
          <MaterialIcons
            name="search"
            size={24}
            color='#0e0e10'
          />
        </TouchableOpacity>
        <TextInput placeholder=" Qual game você procura? "></TextInput>
        <TouchableOpacity>
          <MaterialIcons
            name="mic-none"
            size={24}
            color='#0e0e10'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'row',
    margin: 15,
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'fontMichroma',
    fontWeight: 'bold',
    color:'#ddd'
  },
  line: {
    borderBottomColor: '#fab135',
    borderBottomWidth: 2,
  }
});