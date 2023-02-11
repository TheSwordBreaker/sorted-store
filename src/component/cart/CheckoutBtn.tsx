// import Image from "next/image";
// import { buyNow } from "../../../public/Images/images";

const CheckoutBtn = (props:any) => {
  return (
    <button className="fixed bottom-0 left-5 my-6 mx-auto flex w-[90vw] items-center justify-center gap-7 bg-btnPurple px-4 py-3 text-fontColor " 
    onClick={()=>{props.onClick()}}>
      <p className=" font-Lora text-lg font-bold  tracking-wider ">Checkout</p>
    </button>
  );
};

export default CheckoutBtn;
