import type { Component } from "vue";
import AppIconCss3 from "../components/icons/app-icon-css3.vue";
import AppIconJs from "../components/icons/app-icon-js.vue";
import AppIconTs from "../components/icons/app-icon-ts.vue";
import AppIconHtml5 from "../components/icons/app-icon-html5.vue";
import AppIconVuejs from "../components/icons/app-icon-vuejs.vue";
import AppIconReact from "../components/icons/app-icon-react.vue";
import AppIconGit from "../components/icons/app-icon-git.vue";
import AppIconNuxt from "../components/icons/app-icon-nuxt.vue";
import AppIconSass from "../components/icons/app-icon-sass.vue";
import AppIconTailwind from "../components/icons/app-icon-tailwind.vue";
import AppIconDefault from "../components/icons/app-icon-default.vue";
import AppIconAngular from "~/components/icons/app-icon-angular.vue";

const iconMap: Record<string, Component> = {
  css: AppIconCss3,
  css3: AppIconCss3,
  javascript: AppIconJs,
  js: AppIconJs,
  typescript: AppIconTs,
  angular: AppIconAngular,
  ts: AppIconTs,
  html: AppIconHtml5,
  html5: AppIconHtml5,
  vue: AppIconVuejs,
  vuejs: AppIconVuejs,
  react: AppIconReact,
  git: AppIconGit,
  nuxt: AppIconNuxt,
  sass: AppIconSass,
  scss: AppIconSass,
  tailwind: AppIconTailwind,
  tailwindcss: AppIconTailwind,
};

export function useIcon(name: string): Component {
  return iconMap[name?.toLowerCase() ?? ""] ?? AppIconDefault;
}
