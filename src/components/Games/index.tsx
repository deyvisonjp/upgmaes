import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface GamesProps {
  imgGame: any;
  name: String;
  price: Number;
  onClick: any;
}

const Games: React.FC<GamesProps> = ({ imgGame, name, price, onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image
        source={{uri: imgGame}}
        style={styles.gamesImg}
      />
      <Text style={styles.gamesText}>
        {name}
      </Text>
      <View>
        <Text style={styles.gamesText}> {price} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 160,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  gamesImg: {
    width: 175,
    height: 175,
  },
  gamesText: {
    fontSize: 16,
    fontFamily: 'russoOne',
    textAlign: 'center'
  }
})

export default Games;