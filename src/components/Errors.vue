<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="props.data.length > 0"
      class="bg-red-50 font-semibold px-6 py-4 rounded-lg text-sm"
    >
      <h1 class="text-red-700 flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
        <span>
          There
          {{
            props.data.length > 1
              ? `were ${props.data.length} errors`
              : `was ${props.data.length} error`
          }}
          with your submission
        </span>
      </h1>
      <ul class="list-disc list-inside text-red-600 pt-1 mx-1">
        <li v-for="(item, i) in props.data" :key="i">
          {{ item }}
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
</script>

<style></style>
