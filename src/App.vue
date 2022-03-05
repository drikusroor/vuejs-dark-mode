<template>
  <theme-settings></theme-settings>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThemeSettings from './components/ThemeSettings.vue';
import themeService from './services/theme.service';

export default defineComponent({
  name: 'App',
  components: {
    ThemeSettings
  },
  created() {
    themeService.initializeTheme();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* default theme */
:root {
   --color-background: #fff;
   --color-text:       #111;
}

/* dark theme */
:root[theme="dark"] {
   --color-background: #333;
   --color-text:       #ddd;
}

body, h2 {
  background: var(--color-background);
  color: var(--color-text);
}

</style>
