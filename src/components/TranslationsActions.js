import { ACTION_TYPES } from './Constants';

export const onChangeLanguage = (dispatch, defaultLocale) => {
  dispatch({
    type: ACTION_TYPES.CHANGE_LANGUAGE,
    value: defaultLocale,
  });
};

export const onSetTranslations = (dispatch, translations) => {
  dispatch({
    type: ACTION_TYPES.SET_TRANSLATIONS,
    value: translations,
  });
};

export const onChangeLoading = (dispatch, value) => {
  dispatch({
    type: ACTION_TYPES.CHANGE_LOADING,
    value,
  });
};

export const onSetError = (dispatch, value) => {
  dispatch({
    type: ACTION_TYPES.SET_TRANSLATIONS_ERROR,
    value: value || 'There is some problem.',
  });
};
