<template>
  <n-popover :show="showPopover">
    <template #trigger>
      <IconSideBar
        @click="showDrawer = true"
        class="absolute right-4 top-4 cursor-pointer hover:scale-110"
        width="35"
        height="35"
      />
    </template>
    <span>Click Here to Learn More About Me!</span>
  </n-popover>

  <n-drawer v-model:show="showDrawer" :width="250" placement="right">
    <n-drawer-content>
      <div class="text-3xl font-bold">Home</div>
      <div class="text-3xl font-bold mt-2">Projects</div>
      <div class="text-3xl font-bold mt-2">Experiences</div>
      <div class="text-3xl font-bold mt-2">Education</div>
      <div class="text-3xl font-bold mt-2">Resume</div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import IconSideBar from "@/icons/IconSideBar.vue";
import { NPopover, NDrawer, NDrawerContent } from "naive-ui";
import { ref, onMounted } from "vue";
import Cookies from "js-cookie";

const showPopover = ref(false);
const showDrawer = ref(false);

onMounted(() => {
  setTimeout(() => {
    checkCookie();
  }, 1500);

  setTimeout(() => {
    setCookie();
    showPopover.value = false;
  }, 5000);
});

const checkCookie = () => {
  const hasVisited = Cookies.get("hasVisited");
  if (!hasVisited) {
    showPopover.value = true; // Show popover if cookie doesn't exist
  }
};

const setCookie = () => {
  Cookies.set("hasVisited", "true", { expires: 1 }); // Set cookie for 1 day
};
</script>
