import { defineStore } from "pinia";

export const useWelcomeStorage = defineStore("welcome", {
  state: () => {
    return {
      featureContent: [
        "View and download invoices",
        "Securely store your preferred payment methods for ease of payment",
        "Easily pay for invoices using your securely stored Credit Card or Bank Account",
        "Set up Automatic Payments allowing you to 'set and forget', where your payments are then deducted from your nominated stored payment method on the invoice due date",
        "Schedule your invoices to be paid at a future date",
        "Save Time and bulk pay for invoices",
      ],
      CompanyName: "CompanyName",
      AccountMerchantProvider: "AccountMerchantProvider",
    };
  },
});
