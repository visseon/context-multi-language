import React, { CSSProperties } from 'react';

export const TranslationsError = ({ onPress }: { onPress: void }) => (
  <div style={styles.container}>
    <div onClick={onPress} style={styles.button}>
      <h1 style={styles.buttonTitle}>Hata Olustu Tekrar Yukle!</h1>
    </div>
  </div>
);

interface ICss {
  [key: string]: CSSProperties;
}

const styles: ICss = {
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
    fontWeight: 'bold',
  },
};
