<script setup lang="ts">
import { BudPayButton, useBudPay } from './index';


const config = {
  api_key: "pk_test_yrxhdxrfqeyblnpabu9gprcwst88vpcpxs61a6",
  amount: 100,
  currency: "NGN",
  // reference: "BUD_1234567890", // This is auto-generated if not provided
  customer: {
    email: 'johndoe@example.com',
    first_name: 'John',
    last_name: 'Doe',
    phone: '08012345678'
  },
  callback_url: "https://yourwebsite.com/callback", // If callback_url is not provided, the onComplete function is called (if provided)
  onComplete: (data: any) => {
    console.log('Payment completed, Status:', data.status)
    console.log('Payment completed, Reference:', data.reference)
  },
  onCancel: (data: any) => {
    console.log('Payment cancelled, Status:', data.status)
    console.log('Payment cancelled, Reference:', data.reference)
  },
  custom_fields: { custom_field_1: "value1", custom_field_2: "value2" },
  debug: true, // Show the debug modal to help you pass the right config
  text: "Pay with BudPay",
  className: "primaryButton",
}

// Hook Config
const initiatePayment = useBudPay(config);

// Button Config
const buttonConfig = {
  ...config,
  text: "Pay with BudPay",
  className: "primaryButton",
  disabled: false
}
</script>

<template>
  <h2>BudPay Component</h2>
  <p>Click the button below to pay with BudPay</p>
  <BudPayButton v-bind="buttonConfig" />

  <h1>As a hook</h1>
  <p>Click the button below to pay with BudPay</p>
  <button @click="initiatePayment">Pay with BudPay</button>
</template>

<style scoped>
  .primaryButton {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
