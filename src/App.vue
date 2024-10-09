<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider } from "naive-ui";

const themeOverrides = {
  common: {
    primaryColor: "#04396d",
    primaryColorHover: "#015b97",
    primaryColorPressed: "#2f4e60",
  },
};
</script>
