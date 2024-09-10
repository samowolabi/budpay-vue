import { onMounted } from "vue";
import scriptDownload from "../util/scriptDownload";
import type { BudPayPaymentConfig } from "../types";

export default function useBudPay(props: BudPayPaymentConfig) {
    onMounted(() => {
        scriptDownload('https://budpay-inline-js-v2.vercel.app/v2/inline.js');
    });

    // Return function to invoke BudPayCheckout
    const initiatePayment = () => {
        // @ts-ignore
        BudPayCheckout(props);
    }

    return initiatePayment;
}