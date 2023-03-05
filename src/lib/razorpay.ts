import type { CheckoutCapture } from "@chec/commerce.js/types/checkout-capture";
import type { CheckoutToken } from "@chec/commerce.js/types/checkout-token";
import commerce from "./commerce";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    Razorpay: any;
  }
}

const postFetch = async (url: string, body: any) => {
  const headers = { "Content-type": "application/json; charset=UTF-8" };
  const opt = { method: "POST", body: JSON.stringify(body), headers };
  return fetch(url, opt).then((t) => t.json());
};

const getAmount = (id: any) => postFetch("/api/razorpay", { CheckoutId: id });
const ondismiss = () => console.log("Payment form dismissed.");

export const initializeRazorpay = async () => {
  if ((window as any).Razorpay) return true;

  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  await document.body.appendChild(script);

  return !!(window as any).Razorpay;
};

export const makePayment = async (orderDetails: any) => {
  const res = await initializeRazorpay();
  const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  if (!res) return alert("Razorpay SDK Failed to load");

  const { id, customer } = orderDetails;
  const { firstname, email, phone } = customer;

  const data = await getAmount(id);

  const { currency, amount, id: order_id } = data;
  const prefill = { name: firstname, email, contact: phone };
  const values = { key, currency, amount, order_id, prefill };

  const options = {
    ...values,
    name: "Sorted Pvt Ltd",
    description: "Thankyou for Purchase",
    modal: { ondismiss },
    handler: (response: any) => capturePayment(id, orderDetails, response),
  };

  new window.Razorpay(options).open();
};

export const capturePayment = async (token: any, order: any, razorpay: any) => {
  try {
    const { razorpay_payment_id: payment_id } = razorpay;
    order.pay_what_you_want = order.total.raw;

    const payment = { gateway: "razorpay", razorpay: { payment_id } };
    const captureData = { ...order, payment };

    const result = await commerce.checkout.capture(token, captureData);

    console.log(result);
    alert("Payment successful!");
    window.location.href = window.location.origin;
  } catch (error: any) {
    console.error(error);
    alert(error.message);
  }
};
