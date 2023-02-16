import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import TopHeader from "../component/utils/TopHeader";
import CartItem from "../component/cart/CartItem";
import Drawer from "../component/Drawer";
import CheckoutBtn from "../component/cart/CheckoutBtn";
import ItemTotal from "../component/cart/ItemTotal";
import { useState } from "react";
import { arrow } from "../../public/Images/images.js";
import Image from "next/image";
import AddPrDetails from "../component/cart/AddPrDetails";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import commerce from "../lib/commerce";
import { useRouter } from "next/router";
import Link from "next/link";
import { Loader } from "../component/utils/loader";
import auth from "../lib/firebase";

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => commerce.cart.retrieve(),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // Handlers
  const onCheckout = () => {
    console.log(auth.currentUser);
    if (!auth.currentUser) router.push("/Login");
    console.log("Checkout click");
    // 1. get user
    // if not send to signup page
    // 2. ask for address
    // show the add addresss propmt

    // 3. redirect to payment
  };

  if (isLoading) return <Loader />;
  if (error) return <HandleError />;

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
        {data ? (
          <>
            <div className="Cart  font-Lora text-fontColor">
              <h1 className="px-4 pb-3 font-bold">Cart</h1>
              <div className="cartItems w-full bg-accorBg p-4 px-4">
                {data?.line_items.map((x) => {
                  return <CartItem item={x} editable key={x.id} />;
                })}

                <button
                  onClick={() => {
                    router.push("/");
                  }}
                  className="add text-slate-400"
                >
                  + Add
                </button>
              </div>
              {/* <OnclickButton></OnclickButton> */}
            </div>
            <ItemTotal cart={data}></ItemTotal>
            <AddPrDetails></AddPrDetails>

            <CheckoutBtn
              onClick={() => {
                onCheckout();
              }}
            />
          </>
        ) : null}

        {isOpen ?? (
          <div
            id="drawer-bottom-example"
            className="fixed right-0 bottom-0 left-0 z-40 w-full transform-none overflow-y-auto  border border-solid bg-mainBgColor p-4 px-8 text-fontColor transition-transform"
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

function HandleError(error: any) {
  return (
    <main className="CartPage min-h-screen  bg-mainBgColor pb-20">
      {"An error has occurred: " + error}
    </main>
  );
}
export default Cart;
