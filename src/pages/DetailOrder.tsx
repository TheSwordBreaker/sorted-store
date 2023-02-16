import { type NextPage } from "next";
import Head from "next/head";
import TopHeader from "../component/utils/TopHeader";
import { rightArrow } from "../../public/Images/images";
import Image from "next/image";
import ItemTotal from "../component/cart/ItemTotal";
import CartItem from "../component/cart/CartItem";

const DetailOrder: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Order</title>
        <meta name="description" content="Sort-ed store cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" OrdersPage min-h-screen bg-mainBgColor  pb-20">
        <div className="p-4">
          <TopHeader></TopHeader>
        </div>
        <div className="Cart p-4 font-Lora text-fontColor">
          <h1 className=" pb-3 font-bold">My Orders</h1>
          <div className="cartItems  border border-borderColor bg-sliderBg p-4">
            <p className="font-Lorem mb-4 flex items-center justify-between text-xl">
              Order #1258963
              <span>
                <Image src={rightArrow} width="20" alt="rightArrow"></Image>
              </span>
            </p>
            <div>
              <p className="orderPrice my-2 text-xs tracking-widest text-amountGreen">
                ₹1,049
              </p>
              <p className="orderDate text-[10px] tracking-widest text-secondaryTextCol">
                DATE : 24 APR 2023
              </p>
            </div>
            <div className="dateMap">
              <div className="stepper"></div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="mt-8 border border-borderColor bg-accorBg p-4 font-Lora text-fontColor">
            {/* <CartItem editable={false}></CartItem>
            <CartItem editable={false}></CartItem>
            <CartItem editable={false}></CartItem>
            <CartItem editable={false}></CartItem> */}
          </div>
          <div className="mt-4 border border-borderColor">
            {/* <ItemTotal></ItemTotal> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailOrder;
