import Head from "next/head";

const MobileNo = () => {
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
        <div>
          <p className="py-2 ">Phone No.</p>
          <input
            className="w-full bg-transparent placeholder-gray-500 outline-0"
            name="email"
            type="email"
            placeholder="Enter 10 digit mobile number"
            required
          />
        </div>
        <p className="py-8 text-consent">
          By continuing, you agree to our terms of service & privacy policy
          content policy
        </p>
        <div className="py-20">
          <button className="w-full bg-addBgColor py-4 text-btnText">
            Next
          </button>
        </div>
      </main>
    </>
  );
};

export default MobileNo;