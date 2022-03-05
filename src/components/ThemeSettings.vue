// ThemeSettings.vue (typescript)
<script lang="ts">
import {themeStore} from "@/store/theme.store";
import themeService from "@/services/theme.service";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      themeStore,
    };
  },
  methods: {
    onChangeTheme(theme: string) {
      this.themeStore.theme = theme;
      themeService.updateTheme();
    },
  },
});
</script>

<!-- ThemeSettings.vue (template) -->
<template>
  <h2>Pick theme</h2>
  <div class="button-group">
    <button type="button" @click="onChangeTheme('system')">System</button>
    <button type="button" @click="onChangeTheme('dark')">Dark</button>
    <button type="button" @click="onChangeTheme('light')">Light</button>
  </div>
</template>