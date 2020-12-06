import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Michroma_400Regular as fontMichroma } from '@expo-google-fonts/michroma';
import { RussoOne_400Regular as russoOne } from '@expo-google-fonts/russo-one';

import Routes from './src/routes';

export default function App() {

  const [fontLoaded] = useFonts({
    fontMichroma,
    russoOne,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style="light"  backgroundColor="#0e0e10" translucent={true} />
    <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
