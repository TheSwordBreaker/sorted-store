import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// components 

type myProps={
  editable:boolean,
} 

const CartItem = ({editable}:myProps) => {
console.log(editable);
  return (
    <>
      <div className="cartItem my-6 flex min-h-min items-start justify-between font-Lora">
        <div className="pubItemCart flex gap-4">
          <div className="pubIco flex items-start justify-center ">
            <p className="p-3">TK</p>
          </div>
          <div className="">
            <p className=" text-base">Engineering Maths</p>
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
                    <Disclosure.Panel className="w-full pr-2 pt-4 pb-2 text-justify text-sm text-gray-500">
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

          {(editable)?
          <div
            className="buttonsAddSub flex h-6 min-h-fit items-center gap-3 border border-addSubBtnBorder py-3 px-2
          "
          >
            <button className="add">+</button>
            <p className="QuantityCounter">1</p>
            <button className="sub">-</button>
          </div>
           :null}
          <div className="pricebox">
            <p className="price text-xs">₹ 140</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
