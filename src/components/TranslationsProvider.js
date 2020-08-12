import React, { useEffect, useReducer, useCallback } from 'react';
import {
  onSetError,
  onChangeLoading,
  onChangeLanguage,
  onSetTranslations,
} from './TranslationsActions';
import TranslationContext from './TranslationsContext';
import TranslationsReducer from './TranslationsReducer';
import TranslationsError from './components/TranslationsError';
import TranslationLoading from './components/TranslationLoading';

const TranslationsProvider = ({
  children,
  translations,
  errorComponent,
  loadingComponent,
  defaultLocale = 'tr',
  remoteTranslationsUrl = '',
}) => {
  const defaultState = {
    error: null,
    languages: [],
    loading: false,
    translations: translations || {},
    locale: translations && !remoteTranslationsUrl ? '' : defaultLocale,
  };
  const [state, dispatch] = useReducer(TranslationsReducer, defaultState);

  const translationsCb = useCallback(() => {
    onChangeLoading(dispatch, true);

    fetch(remoteTranslationsUrl)
      .then((response) => response.json())
      .then((response) => onSetTranslations(dispatch, response))
      .catch((error) => onSetError(dispatch, error))
      .finally(() => onChangeLoading(dispatch, false));
  }, []);

  useEffect(() => {
    if (remoteTranslationsUrl) {
      translationsCb();
    } else {
      onChangeLanguage(dispatch, defaultLocale);
      onSetTranslations(dispatch, translations);
    }
  }, [translations]);

  const { loading, error } = state;

  return (
    <TranslationContext.Provider value={{ state, dispatch }}>
      {loading && loadingComponent && loadingComponent()}
      {loading && !loadingComponent && <TranslationLoading />}
      {!loading && error && errorComponent && errorComponent(translationsCb)}
      {!loading && error && !errorComponent && (
        <TranslationsError onPress={translationsCb} />
      )}
      {!loading && !error && children}
    </TranslationContext.Provider>
  );
};

export default TranslationsProvider;
