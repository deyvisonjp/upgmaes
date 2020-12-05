import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface GamesProps {
  imgGame: any;
  descricao: String;
  price: String;
  onClick: any;
}

const Games: React.FC<GamesProps> = ({ imgGame, descricao, price, onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image
        source={imgGame}
        style={styles.gamesImg}
      />
      <Text style={styles.gamesText}>
        {descricao}
      </Text>
      <View>
        <Text style={styles.gamesText}> {price} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gamesImg: {
    width: 175,
    height: 175,
  },
  gamesText: {
    fontSize: 14,
    fontFamily: 'fontMichroma'
  }
})

export default Games;