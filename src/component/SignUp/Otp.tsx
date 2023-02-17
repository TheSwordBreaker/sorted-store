import OtpInput from "react18-input-otp";
import type { SetStateAction } from "react";
import { useState } from "react";
interface MyProps {
  mobile_no: string | null;
  onUpdate: (code: string) => void;
}

export default function Otp(props: MyProps) {
  const [code, setCode] = useState("");

  const handleChange = (code: string) => {
    setCode(code);
    props.onUpdate(code);
  };

  return (
    <div className="App">
      <p>Enter the Otp sent to</p>
      <p className="mb-4">{props.mobile_no}</p>
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
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#CFD3DB",

          outline: "none",
        }}
      />
    </div>
  );
}
