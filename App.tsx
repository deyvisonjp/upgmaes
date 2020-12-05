import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Michroma_400Regular as fontMichroma } from '@expo-google-fonts/michroma';

import Routes from './src/routes';

export default function App() {

  const [fontLoaded] = useFonts({
    fontMichroma,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
