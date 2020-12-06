import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';

import Games, { } from '../../components/Games';
import { useNavigation } from '@react-navigation/native';

interface GamesList {
  id: any;
  image: string;
  name: String;
  price: Number;
  onClick: any;
}

let str = '';

function Home() {
  const [listGames, setListGames] = useState<GamesList[]>([]);

  useEffect(() => {
    const DadosGames = require('../../data/products.json')
    setListGames(DadosGames)
  }, [])

  const navigation = useNavigation();
  // function handleNavigateToDetails(ident) {
  //   navigation.navigate("Details", { ident })
  // }

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
          <Image style={{ marginTop: 15 }}
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

          {listGames.map((game) => (
            <Games
              key={game.id}
              imgGame={require(`../../assets/img/${game.image}`)}
              name={game.name}
              price={game.price}
              onClick='' //{() => handleNavigateToDetails(item.id)}              
            />
          ))}

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
    padding: 10,
    color: '#0e0e10'
  },
  line: {
    borderBottomColor: '#CD6900',
    borderBottomWidth: 2,
  },
  games: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  }
});

export default Home;