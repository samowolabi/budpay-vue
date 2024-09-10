<script setup lang="ts">
import { defineProps } from 'vue';
import useBudPay from '../hooks/useBudPay'
import type { BudPayPaymentConfig } from "../types";

interface BudPayButtonConfig extends BudPayPaymentConfig {
  text?: string;
  className?: string;
  disabled?: boolean;
}

// Define the props
const props = defineProps<BudPayButtonConfig>();

// Config Data
const configData = {
  ...props,
  reference: props.reference || `BUD_${Math.floor(Math.random() * 10000000000)}`
}

const initiatePayment = useBudPay(configData);

// Define the click handler function
function handleClick() {
  initiatePayment();
}
</script>

<template>
  <!-- Attach the click handler to the button -->
  <button :class="className" :disabled="disabled" @click="handleClick">{{ text || "Pay with BudPay" }}</button>
</template>

<style scoped>
/* Add any styles here */
</style>
