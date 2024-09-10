export interface BudPayPaymentConfig {
    api_key: string,
    amount: string | number,
    currency: string,
    reference?: string,
    callback_url?: string,
    customer: {
        first_name: string,
        last_name: string,
        email: string,
        phone: string
    },
    onComplete?: (data: {
        status: string,
        reference: string
    }) => void,
    onCancel?: (data: {
        status: string,
        reference: string
    }) => void,
    custom_fields?: {
        custom_field_1: string,
        custom_field_2: string
    },
    debug?: boolean
}

export interface BudPayButtonConfig extends BudPayPaymentConfig {
    text?: string;
    className?: string;
    disabled?: boolean;
}