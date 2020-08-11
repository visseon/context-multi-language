import { useContext, useCallback, useMemo } from 'react';
import TranslationsContext from './TranslationsContext';
import { ACTION_TYPES } from './Constants';

const useTranslations = () => {
  const {
    state: { translations, locale, languages },
    dispatch,
  } = useContext(TranslationsContext);

  const changeLanguage = useCallback(
    (language) => {
      dispatch({ type: ACTION_TYPES.CHANGE_LANGUAGE, value: language });
    },
    [locale],
  );

  const t = useMemo(() => translations?.[locale] || {}, [locale]);

  return {
    t,
    languages,
    changeLanguage,
  };
};

export default useTranslations;
