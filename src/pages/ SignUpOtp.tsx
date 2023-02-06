import Head from "next/head";
import Otp from "../component/SignUp/Otp";

const SignUpOtp = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full-cus bg-mainBgColor px-8 py-2 font-Lora text-fontColor">
        <div className=" py-12 text-signUp">
          <h1>Sign Up</h1>
        </div>
        <Otp className="py-10" mobile_no="9867292392"></Otp>
        <div className="py-20">
          <button className="w-full bg-addBgColor py-4 text-btnText">
            Next
          </button>
        </div>
      </main>
    </>
  );
};

export default SignUpOtp;
