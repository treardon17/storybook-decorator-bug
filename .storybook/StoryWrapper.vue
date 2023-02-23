<script setup lang="ts">
defineProps({
  themeName: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <v-app :theme="themeName">
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
