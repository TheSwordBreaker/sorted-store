import OtpInput from "react18-input-otp";
import { useState } from "react";

export default function Otp(props: any) {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className="App">
      <p>Enter the Otp sent to</p>
      <p>{props.mobile_no}</p>
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={6}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          backgroundColor: "transparent",
          borderBottom: "5px solid grey",
          width: "40px",
          height: "40px",
          fontSize: "20px",
          color: "#fff",
          fontWeight: "400",
          caretColor: "#fff",
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none",
        }}
      />
      <h2 className="py-6">Don’t Get Resend in 01:25</h2>
    </div>
  );
}
