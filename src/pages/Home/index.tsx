import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import Games, {} from '../../components/Games';

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: '#0e0e10' }}>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons
              name="menu"
              size={24}
              color='#fff'
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/img/logo.png')}
          />
          <TouchableOpacity>
            <MaterialIcons
              name="shopping-cart"
              size={24}
              color='#fff'
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
          <TextInput style={styles.inputSearch} placeholder=" Qual game você procura? "></TextInput>
          <TouchableOpacity>
            <MaterialIcons
              name="mic-none"
              size={24}
              color='#0e0e10'
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      {/* VITRINE */}

      <ScrollView>
        <Text style={styles.textTitle}>Games em Destaque</Text>
        
        <View style={styles.games}>
          <Games
            onClick = "É uma bosta mesmo"
            imgGame = {require('../../assets/img/logo.png')}
            descricao = "Super Teste"
            price = "R$ 99,00"
          > 
          </Games>
          <Games
            onClick = "É uma bosta mesmo"
            imgGame = {require('../../assets/img/logo.png')}
            descricao = "Super Teste"
            price = "R$ 99,00"
          >
          </Games>
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    margin: 15,
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    marginHorizontal: 60,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 14
  },
  inputSearch: {
    padding: 1,
    margin: 1
  },
  textTitle: {
    fontFamily: 'fontMichroma',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    color: '#0e0e10'
  },
  line: {
    borderBottomColor: '#CD6900',
    borderBottomWidth: 2,
  },
  games: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});