import { type Preview, setup } from '@storybook/vue3';

import { type App } from 'vue';
import { createVuetify } from 'vuetify';
import { VApp, VMain, VBtn } from 'vuetify/components';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

import 'vuetify/styles';

function addVuetify(app: App) {
  const vuetify = createVuetify({
    components: {
      VApp,
      VBtn,
      VMain,
    },
  });

  app.use(vuetify);
}

setup((app) => {
  addVuetify(app);
});

// TOGGLE
// Commenting out this line will fix the issue, but removes theme support
export const decorators = [withVuetifyTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
