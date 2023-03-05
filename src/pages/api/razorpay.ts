import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
import shortid from "shortid";
import commerce from "../../lib/commerce";

const createRazorpayOrder = async (amount: number): Promise<any> => {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.NEXT_RAZORPAY_KEY_SECRET,
  });
  // console.log({ amount });
  return razorpay.orders.create({
    amount: (amount * 100).toString(),
    currency: "INR",
    receipt: shortid.generate(),
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const checkoutTokenId = req.body.CheckoutId;
    console.log(req.body);
    console.log({ checkoutTokenId });
    if (!checkoutTokenId)
      return res.status(400).json({
        error: "Missing CheckoutId in request body",
      });

    try {
      const checkout: any = await commerce.checkout.getToken(checkoutTokenId);
      const order = await createRazorpayOrder(checkout.total.raw);
      const { id, currency, amount } = order;
      return res.json({ id, currency, amount });
    } catch (error) {
      // console.error("Error:", error);

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
