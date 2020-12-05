import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>Deyvison Jose de Paula - Nossa Loja UpGames</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'fontMichroma',
  },
});