import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAtom } from "jotai";
import { openPersonalAtom } from "../../lib/bottomSheet";
import auth from "../../lib/firebase";

const schema = yup
  .object({
    fullName: yup.string().required(),
    phoneNumber: yup.string().max(10).min(10).required(),
    email: yup.string().email().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const AddPersonalDetails = () => {
  console.log(auth.currentUser);
  const [openPersonal, setOpenPersonal] = useAtom(openPersonalAtom);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      phoneNumber: auth.currentUser?.phoneNumber ?? "",
    },
    resolver: yupResolver(schema),
  });

  if (!openPersonal || !auth) return null;
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <div
        role="status"
        className="fixed  top-2/4 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white/10"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute bottom-0 w-screen items-center  bg-mainBgColor px-8 pt-10 pb-6 font-Lora text-fontColor"
        >
          <p className="py-4 text-signUp font-bold">Personal Details</p>
          <div className="flex flex-col py-4">
            <label
              htmlFor="name"
              className="py-2 font-semibold text-inputLabel"
            >
              FULL NAME
            </label>
            <input
              {...register("fullName")}
              className="bg-transparent font-bold placeholder-placeHolderDarkColor outline-0 placeholder:text-lg"
              id="FName"
              type="text"
              aria-label="full-name"
              placeholder="Enter full name"
            />
            <p className="errorMessage mt-2 text-xs text-red-400 ">
              {errors.fullName?.message}
            </p>
          </div>
          <div className="flex flex-col py-4">
            <label
              htmlFor="email"
              className="py-2  font-semibold text-inputLabel"
            >
              E-MAIL
            </label>
            <input
              {...register("email")}
              className="bg-transparent font-bold placeholder-placeHolderDarkColor outline-0"
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
            <label
              htmlFor="phone"
              className="py-2 text-getBooksText2 font-light"
            >
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
      </div>
    </>
  );
};

export default AddPersonalDetails;
