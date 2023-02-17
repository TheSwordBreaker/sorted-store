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
import auth from "../lib/firebase";

import ChangePublication from "../component/cart/ChangePublication";
import EmptyCart from "../component/cart/EmptyCart";
import AddPersonalDetails from "../component/cart/AddPersonalDetails";
import { openPersonalAtom } from "../lib/bottomSheet";
import { useAtom } from "jotai";

// my Plan
// used atom to have change publication store - done
// used atom to have a dialog handinglin have

const Cart = () => {
  const router = useRouter();

  const [openPersonal, setOpenPersonal] = useAtom(openPersonalAtom);

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
    // take the personal data / check it in use Effect

    // 1. get user
    // if not send to signup page
    // 2. ask for address
    // show the add detauls propmt

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
        <AddPersonalDetails />
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
