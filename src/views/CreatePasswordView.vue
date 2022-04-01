<template>
  <div
    class="p-8 mt-8 mx-auto max-w-xl rounded-lg border border-slate-300 flex flex-col space-y-3"
  >
    <h1 class="text-xl font-bold">Create a Payer Account</h1>
    <h2 class="text-sm text-slate-500 tracking-tight">
      Don't worry if you forget your password, you can reset it any time.
    </h2>

    <div class="flex flex-col space-y-4 pt-8">
      <Errors :data="errors" />
      <div class="flex flex-col space-y-2">
        <label for="create-account-email" class="font-semibold">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="create-account-email"
          placeholder="Your Email"
          class="transition ease-in-out bg-slate-100 rounded-md px-5 py-3 border border-transparent focus:border-blue-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <label for="create-account-password" class="font-semibold"
          >Password</label
        >
        <input
          v-model="form.password"
          minlength="8"
          maxlength="16"
          type="password"
          id="create-account-password"
          placeholder="Your Password"
          class="transition ease-in-out bg-slate-100 rounded-md px-5 py-3 border border-transparent focus:border-blue-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400"
        />
      </div>
      <div class="pt-2 italic text-sm">
        <div class="font-medium">Password must contain:</div>
        <div class="grid grid-cols-2 gap-3 p-4">
          <div class="flex items-center space-x-2">
            <div
              class="h-3 w-3 rounded-full ring-1 ring-offset-2"
              :class="[
                validatePassword.result.lowercase
                  ? ' ring-green-400 bg-green-400'
                  : 'ring-transparent bg-slate-300',
              ]"
            ></div>
            <span>lower case</span>
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="h-3 w-3 rounded-full ring-1 ring-offset-2"
              :class="[
                validatePassword.result.uppercase
                  ? ' ring-green-400 bg-green-400'
                  : 'ring-transparent bg-slate-300',
              ]"
            ></div>
            <span>upper case</span>
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="h-3 w-3 rounded-full ring-1 ring-offset-2"
              :class="[
                validatePassword.result.numbers
                  ? ' ring-green-400 bg-green-400'
                  : 'ring-transparent bg-slate-300',
              ]"
            ></div>
            <span>numbers</span>
          </div>
          <div class="flex items-center space-x-2">
            <span
              class="h-3 w-3 rounded-full ring-1 ring-offset-2"
              :class="[
                validatePassword.result.characterLength
                  ? ' ring-green-400 bg-green-400'
                  : 'ring-transparent bg-slate-300',
              ]"
            ></span>
            <span>8-16 characters</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end pt-8">
        <button
          type="button"
          class="transition ease-in-out px-10 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 text-white font-medium rounded-md"
          @click="formStorage.create"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useFormStorage } from "../stores/form";

import Errors from "../components/Errors.vue";

const formStorage = useFormStorage();
const { form, validatePassword, errors } = storeToRefs(formStorage);
</script>

<style></style>
