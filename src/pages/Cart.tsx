import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import TopHeader from "../component/TopHeader";
import CartItem from "../component/cart/CartItem";
import CheckoutBtn from "../component/cart/CheckoutBtn";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Sort-ed store cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="CartPage min-h-screen  bg-mainBgColor ">
        <div className="p-4">
          <TopHeader></TopHeader>
        </div>
        <div className="Cart  font-Lora text-fontColor">
          <h1 className="px-4 pb-3 font-bold">Cart</h1>
          <div className="cartItems w-full bg-sliderBg p-4 px-4">
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
          </div>
        </div>
        <CheckoutBtn></CheckoutBtn>
      </main>
    </>
  );
};

export default Cart;
