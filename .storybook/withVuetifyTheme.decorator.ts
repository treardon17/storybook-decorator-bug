import { computed } from 'vue';
import StoryWrapper from './StoryWrapper.vue';

export const DEFAULT_THEME = 'light';

export const withVuetifyTheme = (story, context) => {
  return {
    components: { story, StoryWrapper },
    setup() {
      return {
        themeName: computed(() => context.globals.theme || DEFAULT_THEME),
      };
    },
    template: `
      <StoryWrapper :theme-name="themeName">
        <story />
      </StoryWrapper>
    `
  };
};
