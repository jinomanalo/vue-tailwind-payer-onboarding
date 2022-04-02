<template>
  <div
    class="p-8 mt-8 mx-auto max-w-3xl rounded-lg border border-slate-300 flex flex-col space-y-10"
  >
    <h1 class="text-xl font-bold">Hi and Welcome to Wise-Pay.</h1>

    <h2>
      {{ CompanyName }} has invited you to join the simplest
      <span class="underline underline-offset-1">set and forget</span> payment
      system.
    </h2>

    <div class="text-sm flex flex-col space-y-6">
      <p>
        At {{ CompanyName }} we're always looking for opportunities to innovate
        and make things easier for our customers, which is why we're thrilled to
        be partnering with Wise-Pay and {{ AccountMerchantProvider }} for all
        Credit Card and ACH/Bank Debit payments.
      </p>

      <p>
        With Wise-Pay, you can enjoy enhanced functionality for smarter
        business, everywhere from speedy payment options to completely
        transparent fees and surcharges.
        <br />
        All our invoices are paid via Wise-Pay and settled via
        {{ AccountMerchantProvider }}'s secure payment platform
      </p>
    </div>

    <div v-once class="text-sm flex flex-col space-y-6">
      <div class="font-bold">With Wise-Pay, you can log in to:</div>

      <ul class="ml-4">
        <li
          v-for="(list, i) in featureContent"
          :key="i"
          class="flex items-start space-x-2"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-blue-500 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="">{{ list }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useWelcomeStorage } from "../stores/welcome";

const welcomeStorage = useWelcomeStorage();
const { featureContent, CompanyName, AccountMerchantProvider } =
  storeToRefs(welcomeStorage);
</script>

<style></style>
