import React, { memo } from 'react';

export const TranslationLoading = () => (
  <div style={styles.loadingContainer}>
    <h1>Loading</h1>
  </div>
);

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
};

