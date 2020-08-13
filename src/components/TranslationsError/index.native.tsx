import React, { memo } from 'react';
import {
  SafeAreaView, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export const TranslationsError = ({ onPress }) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.9}
    >
      <Text style={styles.buttonTitle}>Hata Olustu Tekrar Yukle!</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF422D',
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});

