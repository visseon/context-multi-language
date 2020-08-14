import React from 'react';

 const TranslationsContext = React.createContext({
  state: {
    locale: '',
    languages: [],
    translations: {},
  },
  dispatch: () => null,
});

export default TranslationsContext;
