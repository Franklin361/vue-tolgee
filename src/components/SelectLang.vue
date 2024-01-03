<template>
  <select
    :value="tolgee.getLanguage()"
    @change="changeLanguage"
    class="p-1 rounded-md text-lg font-semibold"
  >
    <option value="es-MX">🇲🇽 Spanish</option>
    <option value="en">🇺🇲 English</option>
    <option value="fr">🇫🇷 French</option>
  </select>
</template>

<script setup lang="ts">
import { useTolgee } from '@tolgee/vue';

const tolgee = useTolgee(['language']);

const changeLanguage = (e: Event) => {
  tolgee.value.changeLanguage((e.target as HTMLSelectElement).value);
};
</script>
