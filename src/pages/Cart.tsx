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
import auth, {
  getPersonal,
  updateAddress,
  updateEmail,
  updatePersonal,
  updateProfile,
} from "../lib/firebase";

import ChangePublication from "../component/cart/ChangePublication";
import EmptyCart from "../component/cart/EmptyCart";
import type { IPerson } from "../component/cart/AddPersonalDetails";
import AddPersonalDetails from "../component/cart/AddPersonalDetails";
import {
  addressAtom,
  openAddressAtom,
  openPersonalAtom,
  personAtom,
} from "../lib/bottomSheet";
import { useAtom } from "jotai";

import type { IAddress } from "../component/cart/AddAddress";
import AddAddress from "../component/cart/AddAddress";
import {
  capturePayment,
  initializeRazorpay,
  makePayment,
} from "../lib/razorpay";
import { useEffect, useState } from "react";
import { GlobalError } from "../lib/handleError";

// my Plan
// used atom to have change publication store - done
// used atom to have a dialog handinglin have - done
// take the personal data / check it in use Effect

// 1. get user
// if not send to signup page
// 2. ask for address
// show the add detauls propmt

// 3. redirect to payment

const Cart = () => {
  const router = useRouter();
  const [person, setPerson] = useAtom(personAtom);
  const [address, setAddress] = useAtom(addressAtom);
  const [openPersonal, setOpenPersonal] = useAtom(openPersonalAtom);
  const [openAddress, setOpenAddress] = useAtom(openAddressAtom);
  const [loading, setLoading] = useState(false);

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => commerce.cart.retrieve(),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  const startUp = async () => {
    if (!person && auth.currentUser) {
      console.log("startUp runing....");
      const data = await getPersonal();
      if (data?.person) setPerson(data?.person);
      if (data?.address) setAddress(data?.address);
    }
  };

  useEffect(() => {
    const close = auth.onAuthStateChanged((auth) => {
      console.log(auth?.uid);
      if (auth) startUp();
    });
    return () => {
      close();
    };
  }, []);

  const createCheckout = async () => {
    if (!data?.id) return null;
    initializeRazorpay();

    const checkout: any = await commerce.checkout.generateTokenFrom(
      "cart",
      data.id
    );
    // const shipping = await commerce.checkout.getShippingOptions(checkout.id, {
    //   country: "IN",
    // });

    checkout.fulfillment = {
      shipping_method: "ship_NXELwj2Z7w3A4p",
    };

    checkout.shipping = {
      name: person?.fullName,
      street: address?.landmark + "   " + address?.fullAddres,
      town_city: "Nashik",
      county_state: "IN-MH",
      postal_zip_code: address?.pinCode,
      country: "IN",
    };

    checkout.customer = {
      firstname: person?.fullName,
      lastname: person?.fullName,
      email: person?.email,
      phone: person?.phoneNumber,
      external_id: auth.currentUser?.uid,
      meta: {
        providerData: auth.currentUser?.providerData,
        providerId: auth.currentUser?.providerId,
      },
    };
    // console.log("shipping");
    // console.log(shipping);

    console.log("checkout");
    console.log(checkout);

    makePayment(checkout);
    // capturePayment(checkout.id, checkout, {});
  };

  // Handlers
  const onCheckout = () => {
    console.log(auth.currentUser);
    // auth.signOut();
    if (!auth.currentUser) router.push("/Login");
    console.log("Checkout click");

    console.log({ person });

    if (person === null) return setOpenPersonal(true);
    console.log({ address });

    if (address === null) return setOpenAddress(true);

    createCheckout();
  };

  const onPersonalSubmit = async (x: IPerson) => {
    if (auth.currentUser === null) return router.push("/Login");
    setLoading(true);

    await updatePersonal(x);
    setPerson(x);

    console.log(" Profile updated successfully!");
    setLoading(false);
    setOpenPersonal(false);

    // onCheckout();
  };

  const onAddressSubmit = async (x: IAddress) => {
    setLoading(true);
    console.log("onAddressSubmit", x);
    await updateAddress(x);
    setAddress(x);

    setOpenAddress(false);
    setLoading(false);
    // onCheckout();
  };

  if (isLoading || loading) return <Loader />;
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
