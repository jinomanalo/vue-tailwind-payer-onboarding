<template>
  <div class="lg:px-6 pt-10 pb-6 flex flex-col space-y-6 lg:space-y-16">
    <h1 class="text-lg text-center font-medium">Payer Onboarding</h1>
    <div
      class="flex justify-center flex-row lg:flex-col space-x-6 space-y-0 lg:space-x-0 lg:space-y-12"
    >
      <RouterLink
        v-for="(step, i) in steps"
        :key="i"
        class="transition ease-in-out text-xs lg:text-sm flex items-center group hover:text-blue-600 active:text-blue-700 hover:cursor-pointer space-x-4"
        :class="{ 'text-blue-500': $route.path === step.to }"
        :to="step.to"
      >
        <div
          v-if="step.isDone"
          class="h-10 w-10 flex flex-col items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div
          v-else
          class="transition ease-in-out h-10 w-10 rounded-full bg-white flex items-center text-center border-2 border-blue-500 group-hover:border-blue-500"
        >
          <span class="w-full leading-0 font-bold"> {{ i + 1 }}</span>
        </div>

        <div v-once class="text-xs lg:text-sm font-medium">{{ step.name }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useNavBarStorage } from "../stores/navbar";

const navBarStorage = useNavBarStorage();
const { steps } = storeToRefs(navBarStorage);

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    if (route?.fullPath) {
      let status = true;
      for (let i = 0; i < steps.value.length; i++) {
        if (route.fullPath == steps.value[i].to) {
          status = false;
        }
        steps.value[i].isDone = status;
      }
    }
  }
);
</script>

<style></style>
