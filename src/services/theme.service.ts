import { themeStore } from "@/store/theme.store";

export default {
  initializeTheme(): void {
    this.updateTheme();
    this.watchGlobalThemePreference();
  },
  getTheme(): string {
    const preference = themeStore.theme;
    if (preference === "system") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      } else {
        return "light";
      }
    } else {
      return preference;
    }
  },
  updateTheme() {
    const theme = this.getTheme();
    document.documentElement.setAttribute("theme", theme);
  },
  watchGlobalThemePreference() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (): void => {
        this.updateTheme();
      });
  },
};