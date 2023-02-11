import { type NextPage } from "next";
import Head from "next/head";
import TopHeader from "../component/TopHeader";
import { rightArrow } from "../../public/Images/images";
import Image from "next/image";

const Orders: NextPage = () => {
  return (
    <>
      <Head>
        <title>Orders</title>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
