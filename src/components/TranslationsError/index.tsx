import React, { memo } from 'react';

export const TranslationsError = ({ onPress }) => (
  <div style={styles.container}>
    <div onClick={onPress} style={styles.button}>
      <h1 style={styles.buttonTitle}>Hata Olustu Tekrar Yukle!</h1>
    </div>
  </div>
);

const styles = {
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
};

