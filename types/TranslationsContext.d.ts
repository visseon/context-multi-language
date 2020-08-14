import React from 'react';
declare const TranslationsContext: React.Context<{
    state: {
        locale: string;
        languages: never[];
        translations: {};
    };
    dispatch: () => null;
}>;
export default TranslationsContext;
