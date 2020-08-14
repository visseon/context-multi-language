/// <reference types="react" />
declare const TranslationsProvider: ({ children, translations, errorComponent, loadingComponent, defaultLocale, remoteTranslationsUrl, }: {
    children: any;
    translations: any;
    errorComponent: any;
    loadingComponent: any;
    defaultLocale?: string | undefined;
    remoteTranslationsUrl?: string | undefined;
}) => JSX.Element;
export default TranslationsProvider;
