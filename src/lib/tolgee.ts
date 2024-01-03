import { Tolgee, DevTools, FormatSimple } from '@tolgee/vue';

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    // defaultLanguage: 'es-MX',
    availableLanguages: ['es-MX', 'en', 'fr'],
    language: 'es-MX',
    // for development
    apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,
    // for production
    staticData: {},
  });
