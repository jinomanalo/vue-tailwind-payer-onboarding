import { defineStore } from "pinia";

export const useNavBarStorage = defineStore("navbar", {
  state: () => {
    return {
      steps: [
        {
          name: "Welcome Introduction",
          to: "/",
          isDone: false,
        },
        {
          name: "Create Password",
          to: "/create-password",
          isDone: false,
        },
      ],
    };
  },
  getter: {},
});
