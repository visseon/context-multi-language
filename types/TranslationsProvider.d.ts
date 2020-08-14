import React from 'react';
declare type PropsBase = {
    translations?: object;
    defaultLocale?: string;
    children: React.ReactNode;
    remoteTranslationsUrl?: string;
    errorComponent?: () => React.ReactNode;
    loadingComponent?: () => React.ReactNode;
};
export declare type Props = ({
    translations: object;
} | {
    remoteTranslationsUrl: string;
}) & PropsBase;
declare const TranslationsProvider: ({ children, translations, errorComponent, loadingComponent, defaultLocale, remoteTranslationsUrl, }: Props) => JSX.Element;
export default TranslationsProvider;
