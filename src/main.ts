import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { VueTolgee } from '@tolgee/vue';
import { tolgee } from './lib/tolgee';

const app = createApp(App);

app.use(VueTolgee, { tolgee });

app.mount('#app');
