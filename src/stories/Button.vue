<template>
  <v-btn @click="onClick" :color="color">{{ label }}</v-btn>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue';

withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * background color of the button
   */
  color?: string,
}>(), { color: 'primary' });

const emit = defineEmits<{
  (e: 'click', id: Event): void;
}>();

const onClick = (e: Event) => {
  emit('click', e)
};

onMounted(() => {
  console.log('mounted!');
});

onBeforeUnmount(() => {
  console.log('unmount - this should not show when args change');
});
</script>