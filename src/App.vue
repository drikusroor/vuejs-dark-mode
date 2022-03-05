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

button {
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2c3e50;
  border-radius: 3px;
  color: #2c3e50;
  background-color: #ecf0f1;
  cursor: pointer;
  margin-right: 1em;
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
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
}

</style>
