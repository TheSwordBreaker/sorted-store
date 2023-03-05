import { yupResolver } from "@hookform/resolvers/yup";
import { useAtom } from "jotai";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { openAddressAtom } from "../../lib/bottomSheet";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BottomDialog from "../utils/BottomDialog";
const schema = yup
  .object({
    fullAddres: yup.string().required(),
    pinCode: yup.string().required(),
    landmark: yup.string().required(),
  })
  .required();

export type IAddress = yup.InferType<typeof schema>;

interface myProps {
  onSubmit: (x: IAddress) => void;
}

const AddAddress = ({ onSubmit }: myProps) => {
  const [isAddressOpen, setIsAddressOpen] = useAtom(openAddressAtom);
  const MyForm = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm<IAddress>(MyForm);
  const { errors } = formState;

  if (!isAddressOpen) return null;
  return (
    <BottomDialog isOpen={isAddressOpen} setOpen={setIsAddressOpen}>
      <div className="absolute bottom-0 w-screen items-center  bg-mainBgColor px-8 pt-10 pb-6 font-Lora text-fontColor">
        <p className="py-4 text-signUp font-bold">Select Address</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col py-4">
            <label
              htmlFor="address"
              className="py-2 text-getBooksText2 font-light"
            >
              COMPLETE ADDRESS
            </label>
            <input
              {...register("fullAddres")}
              className="mt-2 bg-transparent text-lg font-bold text-inputText placeholder-placeHolderDarkColor outline-0 placeholder:text-lg"
              id="fullAddres"
              type="address"
              aria-label="address"
              placeholder="Enter full address"
            />
            <p className="errorMessage mt-2 text-xs text-red-400 ">
              {errors.fullAddres?.message}
            </p>
          </div>
          <div className="flex flex-col py-4">
            <label
              htmlFor="pinCode"
              className="py-2 text-getBooksText2 font-light"
            >
              PIN-CODE
            </label>
            <input
              {...register("pinCode")}
              className="mt-2 bg-transparent text-lg font-bold text-inputText placeholder-placeHolderDarkColor outline-0 placeholder:text-lg"
              id="pinCode"
              type="pinCode"
              aria-label="pinCode"
              placeholder="Enter your pin code"
            />
            <p className="errorMessage mt-2 text-xs text-red-400 ">
              {errors.pinCode?.message}
            </p>
          </div>
          <div className="flex flex-col pt-4 pb-8">
            <label
              htmlFor="landmark"
              className="py-2 text-getBooksText2 font-light"
            >
              NEARBY LAND MARK (optional)
            </label>
            <input
              {...register("landmark")}
              className="mt-2 bg-transparent text-lg font-bold text-inputText placeholder-placeHolderDarkColor outline-0 placeholder:text-lg"
              id="landmark"
              type="landmark"
              aria-label="landmark"
              placeholder="near KFC"
            />
            <p className="errorMessage mt-2 text-xs text-red-400 ">
              {errors.landmark?.message}
            </p>
          </div>
          <button
            type="submit"
            onClick={() => handleSubmit(onSubmit)}
            className="w-full bg-accorBg py-4 text-fontColor "
          >
            Save
          </button>
        </form>
      </div>
    </BottomDialog>
  );
};

export default AddAddress;
