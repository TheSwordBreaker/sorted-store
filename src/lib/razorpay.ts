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

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const makePayment = async (orderDetails: any) => {
  // console.log(orderDetails);
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  // Make API call to the serverless API
  const data = await fetch("/api/razorpay", {
    method: "POST",
    body: JSON.stringify({
      CheckoutId: orderDetails.id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((t) => t.json());
  console.log(data);
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    name: "Sorted Pvt Ltd",
    currency: data.currency,
    amount: data.amount,
    // order_id: data.id,
    description: "Thankyou for your test donation",

    prefill: {
      name: orderDetails.customer.firstname,
      email: orderDetails.customer.email,
      contact: orderDetails.customer.phone,
    },

    modal: {
      ondismiss() {
        console.log("dismissed the payment form model ");
        // Handle what happens when the customer dismisses the payment form without completing the payment. This may
        // involve re-enabling a "pay now" button if you disable it when it's clicked.
      },
    },

    handler: function (response: any) {
      // Validate payment at server - using webhooks is a better idea.
      console.log({
        "response.razorpay_payment_id": response.razorpay_payment_id,
      });
      console.log({ "response.razorpay_order_id": response.razorpay_order_id });
      console.log({
        "response.razorpay_signature": response.razorpay_signature,
      });

      capturePayment(orderDetails.id, orderDetails, response);
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export const capturePayment = async (
  checkoutTokenId: any,
  orderDetails: any,
  razorpayDetails: any
) => {
  console.log(razorpayDetails.razorpay_payment_id);

  return commerce.checkout
    .capture(checkoutTokenId, {
      ...orderDetails,
      pay_what_you_want: orderDetails.total.raw,
      payment: {
        gateway: "razorpay",
        razorpay: {
          payment_id: razorpayDetails.razorpay_payment_id,
        },
      },
    })
    .then((order) => {
      // Payment and order capture was successful, and the order detail is provide in the order variable.
      console.log(order);
      alert("Payment Done");
    })
    .catch((response) => {
      // Capturing the order failed. The payment attempt should still be availabe in Razorpay as an auth, but not
      // fully charged.
      console.log(response);
      alert(response.message);
    });
};
