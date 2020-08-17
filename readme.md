# context-multi-language

This library is for providing Multi Language System for React and React Native Applications.

## Installation

```terminal
yarn add context-multi-language
```

```terminal
npm install context-multi-language
```

## Usage

Add SKIP_PREFLIGHT_CHECK=true to an .env file in your project if you get eslint error.


#### TranslationsProvider

```js
<TranslationsProvider
  remoteTranslationsUrl={remoteTranslationsUrl}
  defaultLocale="tr"
/>
```

| Prop                  | Type   | Default            | Description                                    |
| --------------------- | ------ | ------------------ | ---------------------------------------------- |
| translations          | object | undefined          | translations data                              |
| remoteTranslationsUrl | string | undefined          | fetch translations data from a remote endpoint |
| defaultLocale         | string | tr                 | default language                               |
| errorComponent        | FC     | TranslationsError  | default error component.                       |
| loadingComponent      | FC     | TranslationLoading | default loading component.                     |
| children              | FC     |                    | TranslationsProvider's children.               |

#### useTranslations

```js
const { t, changeLanguage, languages } = useTranslations();
```

| Prop           | Type     | Description                  |
| -------------- | -------- | ---------------------------- |
| t              | object   | provide translations data.   |
| changeLanguage | function | change current language.       |
| languages      | array    | existing languages. |

## Samples

```js
import { TranslationsProvider, useTranslations } from 'context-multi-language';

const remoteTranslationsUrl = 'https://raw.githubusercontent.com/burhanyilmaz/translations/master/locales.json';

export default () => (
    <TranslationsProvider remoteTranslationsUrl={remoteTranslationsUrl} defaultLocale='tr'>
      <HomeScreen />
    </TranslationsProvider>
);

// or

const translations = {
  "languages": ["en"],
  "translations": {
    "en": {
      "password": "Password",
      "phoneNumber": "Phone Number",
      "signIn": "Sign in!"
    },
}

export default () => (
    <TranslationsProvider translations={translations} defaultLocale='tr'>
      <HomeScreen />
    </TranslationsProvider>
);
```

```js
const HomeScreen = () => {
  const { t, changeLanguage, languages } = useTranslations();

  return (
    <SafeAreaView style={styles.fill}>
      <StatusBar barStyle="light-content" />
      <Input label={t.phoneNumber} />
      <Space />
      <Input label={t.password} secureTextEntry />
      <Space />
      <Button size="large">{t.singIn}</Button>
      <Space />
      <ButtonGroup>
        {languages.map((language) => (
          <Button
            key={language}
            size="tiny"
            onPress={() => changeLanguage(language)}
          >
            {language}
          </Button>
        ))}
      </ButtonGroup>
    </SafeAreaView>
  );
};
```

## SS

### React Native Mobile

<img src="assets/react-native.gif" width="600"  />

### React Web

<img src="assets/react.gif" width="600"  />

<img src="https://5kr2u.sse.codesandbox.io/flag?country=az" width="200"  />

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
