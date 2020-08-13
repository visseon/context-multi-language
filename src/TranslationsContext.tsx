import React from 'react';

export const TranslationsContext = React.createContext({
  state: {
    locale: '',
    languages: [],
    translations: {},
  },
  dispatch: () => null,
});

