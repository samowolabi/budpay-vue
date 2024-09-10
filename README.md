# BudPay Vue Library

The BudPay Vue Library provides three methods for integrating BudPay's payment solution into your Vue applications. This library allows you to initiate payment modals using any of the following integration methods:

- `BudPayButton`
- `useBudPayPayment`
- `useBudPayAccessCode`

## Installation

To install the BudPay Vue Library, use npm or yarn:

### Using npm

```bash
npm install @budpay/vue
```


### 1. `BudPayButton`

The `BudPayButton` component is a ready-to-use button that triggers the BudPay payment modal when clicked.

#### Parameters

| Parameter      | Type        | Required | Description                                                                                       |
|----------------|-------------|----------|---------------------------------------------------------------------------------------------------|
| `api_key`      | `string`    | Yes      | Your BudPay API Key, e.g., `"pk_test_1234567890"`                                                  |
| `amount`       | `number`    | Yes      | Amount to charge, e.g., `1000`                                                                     |
| `currency`     | `string`    | Yes      | Currency to charge in, e.g., `"NGN"`                                                               |
| `reference`    | `string`    | No       | Unique reference for the transaction, e.g., `"BUD_1234567890"`                                     |
| `customer`     | `object`    | Yes      | Customer details including `email`, `first_name`, `last_name`, and `phone`.                        |
| `callback_url` | `string`    | No       | URL to redirect to after payment, e.g., `"https://yourwebsite.com/callback"`                       |
| `onComplete`   | `function`  | No       | Callback function to execute after payment is successful, e.g., `(response) => { console.log(response) }` |
| `onCancel`     | `function`  | No       | Callback function to execute after payment is cancelled, e.g., `(response) => { console.log(response) }`   |
| `custom_fields`| `object`    | No       | Custom fields to include in the transaction, e.g., `{ custom_field_1: "value1", custom_field_2: "value2" }` |
| `debug`        | `boolean`   | No       | Enables debug mode, e.g., `true`                                                                    |
| `text`         | `string`    | No       | The text to display on the button, e.g., `"Pay with BudPay"`                                       |
| `className`    | `string`    | No       | CSS class name for the button styling, e.g., `"btn btn-primary"`                                   |
| `disabled`     | `boolean`   | No       | Disable the button, e.g., `false`                                                                  |
| `children`     | `ReactNode` | No       | Content to be rendered within the button.                                                          |


#### Example Usage

```vue copy
<script setup lang="ts">
    import { BudPayButton } from '@budpay/vue';

    const config = {
        api_key: "pk_test_1234567890",
        amount: 1000,
        currency: "NGN",
        reference: "BUD_1234567890", // This is auto-generated, if not provided
        customer: {
            email: "johndoe@example.com",
            first_name: "John",
            last_name: "Doe",
            phone: "08012345678"
        },
        callback_url: "https://yourwebsite.com/callback", // If callback_url is not provided, the onComplete function is called (if provided)
        onComplete: (data) => { 
            console.log('Payment completed, Status:', data.status) 
            console.log('Payment completed, Reference:', data.reference) 
        },
        onCancel: (data) => { 
            console.log('Payment cancelled, Status:', data.status) 
            console.log('Payment cancelled, Reference:', data.reference) 
        },
        custom_fields: { custom_field_1: "value1", custom_field_2: "value2" },
        debug: true // Show the debug modal to help you pass the right config
    }

    const buttonConfig = {
        ...config,
        text: "Pay with BudPay",
        className: "btn btn-primary"
    }

    <template>
        <BudPayButton v-bind="buttonConfig" />
    </template>
</script>

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
```


### 2. `useBudPayPayment`

The `useBudPayPayment` hook allows you to initiate a payment modal using your BudPay API key directly within your Vue components.

#### Parameters

| Parameter      | Type        | Required | Description                                                                                       |
|----------------|-------------|----------|---------------------------------------------------------------------------------------------------|
| `api_key`      | `string`    | Yes      | Your BudPay API Key, e.g., `"pk_test_1234567890"`                                                  |
| `amount`       | `number`    | Yes      | Amount to charge, e.g., `1000`                                                                     |
| `currency`     | `string`    | Yes      | Currency to charge in, e.g., `"NGN"`                                                               |
| `reference`    | `string`    | No       | Unique reference for the transaction, e.g., `"BUD_1234567890"`                                     |
| `customer`     | `object`    | Yes      | Customer details including `email`, `first_name`, `last_name`, and `phone`.                        |
| `callback_url` | `string`    | No       | URL to redirect to after payment, e.g., `"https://yourwebsite.com/callback"`                       |
| `onComplete`   | `function`  | No       | Callback function to execute after payment is successful. It receives a `response` object with `reference` and `status`. Example: `(response) => { console.log(response) }` |
| `onCancel`     | `function`  | No       | Callback function to execute after payment is cancelled. It receives a `response` object with `reference` and `status`. Example: `(response) => { console.log(response) }`   |
| `custom_fields`| `object`    | No       | Custom fields to include in the transaction, e.g., `{ custom_field_1: "value1", custom_field_2: "value2" }` |
| `debug`        | `boolean`   | No       | Enables debug mode, e.g., `true`                                                                    |

#### Example Usage

```vue copy
<script setup lang="ts">
import { useBudPayPayment } from '@budpay/vue';

const initiateBudPayPayment = useBudPayPayment({
        api_key: "pk_test_1234567890",
        amount: 1000,
        currency: "NGN",
        reference: "BUD_1234567890", // This is auto-generated, if not provided
        customer: {
            email: "johndoe@example.com",
            first_name: "John",
            last_name: "Doe",
            phone: "08012345678"
        },
        callback_url: "https://yourwebsite.com/callback", // If callback_url is not provided, the onComplete function is called (if provided)
        onComplete: (data) => { 
            console.log('Payment completed, Status:', data.status) 
            console.log('Payment completed, Reference:', data.reference) 
        },
        onCancel: (data) => { 
            console.log('Payment cancelled, Status:', data.status) 
            console.log('Payment cancelled, Reference:', data.reference) 
        },
        custom_fields: { custom_field_1: "value1", custom_field_2: "value2" },
        debug: true // Show the debug modal to help you pass the right config
    })

    <template>
        <button @click="initiateBudPayPayment">Pay with BudPay</button>
    </template> 
</script>
```# budpay-vue
