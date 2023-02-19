// const Razorpay = require("razorpay");
// const shortid = require("shortid");

import type { CheckoutToken } from "@chec/commerce.js/types/checkout-token";
import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
import shortid from "shortid";
import commerce from "../../lib/commerce";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // get checkout id

    const checkoutTokenId = req.body.CheckoutId;

    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.NEXT_RAZORPAY_KEY_SECRET,
    });
    const checkout: any = await commerce.checkout.getToken(checkoutTokenId);

    console.log("\n\n\ncheckout #######################");
    console.log(checkout);
    console.log("\n\n\ncheckout #######################");
    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = checkout.total.raw;
    console.log({ amount });
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
