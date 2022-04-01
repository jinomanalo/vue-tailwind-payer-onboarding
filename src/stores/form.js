import { defineStore } from "pinia";

export const useFormStorage = defineStore("form", {
  state: () => {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  getters: {
    validateEmail(state) {
      let pattern = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      return pattern.test(String(state.form.email).toLowerCase());
    },
    validatePassword(state) {
      let result = {
        lowercase: false,
        uppercase: false,
        numbers: false,
        characterLength: false,
      };

      if (state.form.password.match(/[a-z]/g)) {
        result.lowercase = true;
      }
      if (state.form.password.match(/[A-Z]/g)) {
        result.uppercase = true;
      }
      if (state.form.password.match(/[0-9]/g)) {
        result.numbers = true;
      }
      if (state.form.password.length >= 8 && state.form.password.length <= 16) {
        result.characterLength = true;
      }

      return {
        result,
        isValid:
          result.lowercase &&
          result.uppercase &&
          result.numbers &&
          result.characterLength,
      };
    },
  },
  actions: {
    async create() {
      this.errors = [];
      if (this.validateEmail === false) {
        this.errors.push("Email is invalid");
      }
      if (this.validatePassword.isValid === false) {
        this.errors.push("Password is invalid");
      }

      if (this.errors.length > 0) return;

      alert("Successfully saved!");
      // API here...
    },
  },
});
