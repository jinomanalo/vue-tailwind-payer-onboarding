<script setup>
import { RouterView } from "vue-router";

import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col lg:flex-row bg-slate-100">
    <div class="flex-shrink lg:h-screen lg:overflow-auto">
      <div class="m-6 lg:m-12">
        <div class="flex lg:justify-center lg:m-6">
          <img src="./assets/logo.svg" class="h-9" />
        </div>

        <NavBarVue />
      </div>
    </div>
    <div class="flex-1 h-screen overflow-auto bg-white">
      <div class="flex justify-end m-6 lg:m-12">
        <div class="m-6 lg:m-0">Company Logo</div>
      </div>
      <div class="m-6 lg:m-12">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style></style>
