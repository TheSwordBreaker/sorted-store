import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import TopHeader from "../component/TopHeader";
import CartItem from "../component/cart/CartItem";
import Drawer from "../component/Drawer";
import CheckoutBtn from "../component/cart/CheckoutBtn";
import ItemTotal from "../component/cart/ItemTotal";
import { useState } from "react";
import { arrow } from "../../public/Images/images.js";
import Image from "next/image";
import AddPrDetails from "../component/cart/AddPrDetails";

const Cart: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Sort-ed store cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="CartPage min-h-screen  bg-mainBgColor pb-20">
        <div className="p-4">
          <TopHeader></TopHeader>
        </div>
        <div className="Cart  font-Lora text-fontColor">
          <h1 className="px-4 pb-3 font-bold">Cart</h1>
          <div className="cartItems w-full bg-accorBg p-4 px-4">
            <CartItem editable></CartItem>
            <CartItem editable></CartItem>
            <CartItem editable></CartItem>
            <CartItem editable></CartItem>
            <button className="add text-slate-400">+ Add</button>
          </div>
          {/* <OnclickButton></OnclickButton> */}
        </div>
        <ItemTotal></ItemTotal>
        <AddPrDetails></AddPrDetails>

        <CheckoutBtn
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></CheckoutBtn>

        {isOpen ?? (
          <div
            id="drawer-bottom-example"
            className="fixed bottom-0 left-0 right-0 z-40 w-full transform-none overflow-y-auto  border border-solid bg-mainBgColor p-4 px-8 text-fontColor transition-transform"
            aria-labelledby="drawer-bottom-label"
          >
            <div className="py-4">
              <p className="text-signUp">Change Publication</p>
              <p className="text-getBooksText2">
                Broadband Communication System
              </p>
            </div>

            <div>
              <ul className="flex  items-center justify-between py-2 font-Lora">
                <p className="p-3">TK</p>
                <li className="">Nirali Publication</li>
                <li>₹ 127.00</li>
              </ul>
              <ul className="flex  items-center justify-between py-2 font-Lora">
                <p className="p-3">TK</p>
                <li className="">Nirali Publication</li>
                <li>₹ 127.00</li>
              </ul>
              <ul className="flex  items-center justify-between py-2 font-Lora">
                <p className="p-3">TK</p>
                <li className="">Nirali Publication</li>
                <li>₹ 127.00</li>
              </ul>
              <ul className="flex  items-center justify-between py-2 font-Lora">
                <p className="p-3">TK</p>
                <li className="">Nirali Publication</li>
                <li>₹ 127.00</li>
              </ul>
              <ul className="flex  items-center justify-between py-2 font-Lora">
                <p className="p-3">TK</p>
                <li className="">Nirali Publication</li>
                <li>₹ 127.00</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
                console.log(isOpen);
              }}
              type="button"
              data-drawer-hide="drawer-bottom-example"
              aria-controls="drawer-bottom-example"
              className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 "
            ></button>

            <button
              onClick={() => {
                setIsOpen(false);
                console.log(isOpen);
              }}
              className="inline-flex w-full  items-center justify-center bg-accorBg py-4 font-Lora  text-sm text-btnText font-medium focus:outline-none"
            >
              <Image className="rotate-180" src={arrow} alt=""></Image> back
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
