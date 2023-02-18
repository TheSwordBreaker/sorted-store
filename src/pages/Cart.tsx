import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import TopHeader from "../component/utils/TopHeader";
import CartItem from "../component/cart/CartItem";

import CheckoutBtn from "../component/cart/CheckoutBtn";
import ItemTotal from "../component/cart/ItemTotal";

import ShowPersonlDetails from "../component/cart/ShowPersonalDetails";
import { useQuery } from "@tanstack/react-query";
import commerce from "../lib/commerce";
import { useRouter } from "next/router";

import { Loader } from "../component/utils/loader";
import auth, { updateEmail, updateProfile } from "../lib/firebase";

import ChangePublication from "../component/cart/ChangePublication";
import EmptyCart from "../component/cart/EmptyCart";
import type { IPerson } from "../component/cart/AddPersonalDetails";
import AddPersonalDetails from "../component/cart/AddPersonalDetails";
import {
  openAddressAtom,
  openPersonalAtom,
  personAtom,
} from "../lib/bottomSheet";
import { useAtom } from "jotai";
import { useState } from "react";
import { isFloat64Array } from "util/types";
import type { IAddress } from "../component/cart/AddAddress";
import AddAddress from "../component/cart/AddAddress";

// my Plan
// used atom to have change publication store - done
// used atom to have a dialog handinglin have - done
// take the personal data / check it in use Effect

// 1. get user
// if not send to signup page
// 2. ask for address
// show the add detauls propmt

// 3. redirect to payment
const GlobalError = (e: any) => {
  console.log("error", e);
};

const Cart = () => {
  const router = useRouter();
  const [person, setPerson] = useAtom(personAtom);
  const [openPersonal, setOpenPersonal] = useAtom(openPersonalAtom);
  const [openAddress, setOpenAddress] = useAtom(openAddressAtom);

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
    // auth.signOut();
    if (!auth.currentUser) router.push("/Login");
    console.log("Checkout click");

    setOpenPersonal(true);
  };
  const createCheckout = async () => {
    if (!data?.id) return null;
    const checkout = await commerce.checkout.generateTokenFrom("cart", data.id);
  };

  const onPersonalSubmit = async (x: IPerson) => {
    setPerson(x);
    if (auth.currentUser === null) return router.push("/Login");
    setOpenPersonal(false);

    // updateEmail(auth.currentUser, x.email).catch(() => {
    //   /* An error occurred */
    // });

    await updateProfile(auth.currentUser, {
      displayName: x.fullName,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    }).catch(GlobalError);

    console.log(" Profile updated successfully!");
    setOpenAddress(true);

    // update both firebase and commerr js
  };

  const onAddressSubmit = async (x: IAddress) => {
    console.log("onAddressSubmit", x);
    setOpenAddress(false);
    // update both firebase and commerr js
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

        {data && data.line_items.length ? (
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
            <ShowPersonlDetails />

            <CheckoutBtn
              onClick={() => {
                onCheckout();
              }}
            />
          </>
        ) : (
          <EmptyCart />
        )}
        <ChangePublication />
        <AddPersonalDetails onSubmit={onPersonalSubmit} />
        <AddAddress onSubmit={onAddressSubmit} />
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
