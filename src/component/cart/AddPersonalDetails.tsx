import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAtom } from "jotai";
import { openPersonalAtom } from "../../lib/bottomSheet";
import auth from "../../lib/firebase";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BottomDialog from "../utils/BottomDialog";
const schema = yup
  .object({
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();
export type IPerson = yup.InferType<typeof schema>;

interface myProps {
  onSubmit: (x: IPerson) => void;
}

const AddPersonalDetails = ({ onSubmit }: myProps) => {
  const [openPersonal, setOpenPersonal] = useAtom(openPersonalAtom);

  const defaultValues = {
    phoneNumber: auth?.currentUser?.phoneNumber ?? "",
  };

  const MyForm = { defaultValues, resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm<IPerson>(MyForm);
  const { errors } = formState;

  if (!openPersonal || !auth) return null;

  return (
    <BottomDialog isOpen={openPersonal} setOpen={setOpenPersonal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute bottom-0 w-screen items-center  bg-mainBgColor px-8 pt-6 pb-6 font-Lora text-fontColor"
      >
        <p className="pt-4 text-signUp font-bold">Personal Details</p>
        <div className="flex flex-col pt-8">
          <label htmlFor="name" className="pt-2 font-semibold text-inputLabel">
            FULL NAME
          </label>
          <input
            {...register("fullName")}
            className="mt-2 bg-transparent text-lg font-bold text-inputText placeholder-placeHolderDarkColor outline-0 placeholder:text-lg"
            id="FName"
            type="text"
            aria-label="full-name"
            placeholder="Enter full name"
          />
          <p className="errorMessage mt-2 text-xs text-red-400 ">
            {errors.fullName?.message}
          </p>
        </div>
        <div className="flex flex-col pt-4">
          <label
            htmlFor="email"
            className="py-2  font-semibold text-inputLabel"
          >
            E-MAIL
          </label>
          <input
            {...register("email")}
            className="mt-2 bg-transparent text-lg font-bold text-inputText placeholder-placeHolderDarkColor outline-0 "
            id="email"
            type="email"
            aria-label="email-address"
            placeholder="Enter your email address"
          />
          <p className="errorMessage mt-2 text-xs text-red-400 ">
            {errors.email?.message}
          </p>
        </div>
        <div className="flex flex-col pt-4 pb-8">
          <label htmlFor="phone" className="py-2 text-getBooksText2 font-light">
            PHONE NO.
          </label>
          <input
            {...register("phoneNumber")}
            className="bg-transparent font-bold tracking-[0.2rem] text-[#D3D3D333]  outline-0 placeholder:tracking-normal"
            id="PhoneNumber"
            type="text"
            aria-label="phone-number"
            placeholder="Enter your mobile no"
            disabled
          />
          <p className="errorMessage mt-2 text-xs text-red-400 ">
            {errors.phoneNumber?.message}
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
    </BottomDialog>
  );
};

export default AddPersonalDetails;
