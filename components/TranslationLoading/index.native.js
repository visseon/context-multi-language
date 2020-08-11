import React, { memo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const TranslationLoading = () => (
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

export default memo(TranslationLoading);
