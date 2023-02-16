import type { Cart } from "@chec/commerce.js/features/cart";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import commerce from "../../lib/commerce";
import type { LineItem } from "@chec/commerce.js/types/line-item";
import { useState } from "react";
import { Loader } from "../utils/loader";
import { useRouter } from "next/router";

// components

type myProps = {
  editable: boolean;
  item: LineItem;
};

const CartItem = ({ editable, item }: myProps) => {
  const { id, quantity } = item;
  const queryClient = useQueryClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onAdd = async () => {
    setLoading(true);
    const result = await commerce.cart.update(id, { quantity: quantity + 1 });
    console.log(result);
    queryClient.setQueryData(["cart"], result);
    setLoading(false);
  };

  const onSub = async () => {
    setLoading(true);

    const result = await commerce.cart.update(id, { quantity: quantity - 1 });
    console.log(result);
    queryClient.setQueryData(["cart"], result);
    if (quantity - 1 == 0) {
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="cartItem relative my-6 flex min-h-min items-start justify-between font-Lora">
        {loading && <Loader />}
        <div className="pubItemCart flex gap-4">
          <div className="pubIco flex items-start justify-center ">
            <p className="p-3">TK</p>
          </div>
          <div className="">
            <p className=" text-base">{item.name}</p>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mt-1  flex justify-between text-left text-sm font-medium text-fontColor  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                      <span>Nirali</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } ml-2 h-5 w-5  text-fontColor`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full pt-4 pr-2 pb-2 text-justify text-sm text-gray-500">
                      If you&apos;re unhappy with your purchase for any reason,
                      email us within 90 days and we&apos;ll refund you in full,
                      no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="priceAndBtns flex flex-col  items-end justify-center gap-1">
          {editable ? (
            <div
              className="buttonsAddSub flex h-6 min-h-fit items-center gap-3 border border-addSubBtnBorder py-3 px-2
          "
            >
              <button onClick={() => onAdd()} className="add">
                +
              </button>
              <p className="QuantityCounter">{item.quantity}</p>
              <button onClick={() => onSub()} className="sub">
                -
              </button>
            </div>
          ) : null}
          <div className="pricebox">
            <p className="price text-xs">₹ {item.line_total.formatted} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
