import React, { memo } from 'react';

const TranslationLoading = () => (
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

export default memo(TranslationLoading);
