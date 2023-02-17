import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().required(),
    phoneNumber: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: string;
}

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute bottom-0 w-screen items-center  bg-mainBgColor px-8 pt-10 pb-6 font-Lora text-fontColor"
      >
        <p className="py-4 text-signUp font-bold">Personal Details</p>
        <div className="flex flex-col py-4">
          <label htmlFor="name" className="py-2 text-getBooksText2 font-light">
            FULL NAME
          </label>
          <input
            {...register("fullName", { required: true, maxLength: 35 })}
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
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
          <label htmlFor="email" className="py-2 text-getBooksText2 font-light">
            E-MAIL
          </label>
          <input
            {...register("email", {
              required: "Enter your e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
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
            {...register("phoneNumber", { required: true, maxLength: 10 })}
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="PhoneNumber"
            type="text"
            aria-label="phone-number"
            placeholder="Enter your mobile no"
          />
          <p className="errorMessage mt-2 text-xs text-red-400 ">
            {errors.phoneNumber?.message}
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-accorBg py-4 text-fontColor "
        >
          Save
        </button>
      </form>
    </>
  );
};

export default PersonalDetails;
