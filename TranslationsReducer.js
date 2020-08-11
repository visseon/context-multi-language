import { ACTION_TYPES } from './Constants';

const LocaleReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LOADING:
      return { ...state, loading: action.value };

    case ACTION_TYPES.CHANGE_LANGUAGE:
      return { ...state, locale: action.value };

    case ACTION_TYPES.SET_TRANSLATIONS_ERROR:
      return { ...state, error: action.value };

    case ACTION_TYPES.SET_TRANSLATIONS:
      return {
        ...state,
        error: null,
        languages: action.value.languages,
        translations: action.value.translations,
      };

    default:
      return state;
  }
};

export default LocaleReducer;
