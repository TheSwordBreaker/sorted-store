import type { Cart } from "@chec/commerce.js/types/cart";

interface myPorps {
  cart: Cart;
}

const ItemTotal = ({ cart }: myPorps) => {
  return (
    <>
      <div className="itemTotal  my-3.5 flex flex-col gap-2 bg-accorBg  py-3 px-6 font-Lora text-white ">
        <div className="font-xs itemTotal flex justify-between font-medium ">
          <p>Item total</p>
          <p className="tracking-2 itemTotalPrice">
            {cart.subtotal.formatted_with_symbol}{" "}
          </p>
        </div>
        <div className="deliveryCharge flex justify-between text-[10px] font-medium text-totalPriceText ">
          <p>Delivery Charge</p>
          <p className="itemTotalPrice">₹20</p>
        </div>
        {/* <div className="flex font-medium text-totalPriceText text-[10px] taxPrice justify-between ">
          <p>Tax and Packaging</p>
          <p className="itemTotalPrice">₹5</p>
        </div> */}
        <div className="coupon flex justify-between text-[10px] font-medium text-totalPriceText ">
          <p>
            Coupon <span className="couponName"> (Easy20)</span>
          </p>
          <p className="couponPrice">-₹20</p>
        </div>
        <div className="coupon mt-4 flex justify-between text-[15px] font-medium">
          <p>Grand Total</p>
          <p className="grandTotal text-amountGreen ">
            {" "}
            {cart.subtotal.formatted_with_symbol}
          </p>
        </div>
      </div>
    </>
  );
};
export default ItemTotal;
