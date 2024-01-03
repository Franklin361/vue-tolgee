import { Tolgee, DevTools, FormatSimple, BackendFetch } from '@tolgee/vue';

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(
    BackendFetch({
      prefix: 'https://cdn.tolg.ee/1c7b3cc94107c2f74a3835f11cabb85f',
    })
  )
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
