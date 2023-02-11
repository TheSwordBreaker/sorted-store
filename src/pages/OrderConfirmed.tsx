import Image from "next/image";
import { greenTick } from "../../public/Images/images";

const OrderConfirmed = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-mainBgColor px-12 font-Lora text-fontColor">
        <Image src={greenTick} alt="green tick" className="py-4"></Image>
        <h1 className="py-4">Order Confirmed</h1>
        <p className="py-4 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed esse
          sunt nam at eligendi ex amet inventore veniam ipsa. Veritatis ab
          eligendi quasi ducimus quaerat minus blanditiis sunt, recusandae
          animi.
        </p>
      </div>
    </>
  );
};

export default OrderConfirmed;
