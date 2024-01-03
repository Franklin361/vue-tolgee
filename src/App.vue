<script setup lang="ts">
import { TolgeeProvider } from '@tolgee/vue';
import MainContent from './components/MainContent.vue';
import Loading from './components/Loading.vue';
</script>

<template>
  <TolgeeProvider>
    <template v-slot:fallback>
      <Loading />
    </template>
    <MainContent />
  </TolgeeProvider>
</template>
