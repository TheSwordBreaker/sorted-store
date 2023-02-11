const ItemTotal = () => {
  return (
    <>
      <div className="itemTotal  my-3.5 flex flex-col gap-2 bg-accorBg  px-6 py-3 font-Lora text-white ">
        <div className="itemTotal font-xs flex justify-between font-medium ">
          <p>Item total</p>
          <p className="itemTotalPrice tracking-2">₹1024</p>
        </div>
        <div className="deliveryCharge flex justify-between text-[10px] font-medium text-totalPriceText ">
          <p>Delivery Charge</p>
          <p className="itemTotalPrice">₹20</p>
        </div>
        <div className="taxPrice flex justify-between text-[10px] font-medium text-totalPriceText ">
          <p>Tax and Packaging</p>
          <p className="itemTotalPrice">₹5</p>
        </div>
        <div className="coupon flex justify-between text-[10px] font-medium text-totalPriceText ">
          <p>
            Coupon <span className="couponName"> (Easy20)</span>
          </p>
          <p className="couponPrice">-₹20</p>
        </div>
        <div className="coupon mt-4 flex justify-between text-[15px] font-medium">
          <p>Grand Total</p>
          <p className="grandTotal text-amountGreen ">₹1049</p>
        </div>
      </div>
    </>
  );
};
export default ItemTotal;
