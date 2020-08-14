import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const TranslationLoading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#3366FF" />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
