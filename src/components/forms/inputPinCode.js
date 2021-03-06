import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logo } from "../../assets/svg";

const InputPinCode = () => {
  const [pin, setPin] = useState("");
  const { handleSubmit } = useForm({ delayError: 2000, mode: "onChange" });

  const otp = (data) => {
    console.log(data);
  };
  return (
    <div className="grid md:place-items-center h-screen">
      <div className="flex flex-col place-content-center bg-white drop-shadow-md rounded-lg w-full md:w-2/4 p-8">
        <div className="cursor-pointer mx-auto">
          <Link to="/">{logo}</Link>
        </div>
        <div className="mt-8 text-sm md:text-md">
          <p className="text-dark font-medium text-xl">Pin Code</p>
          <p className="text-dark text-md mt-2">
            Input the code generated from your email
          </p>
        </div>
        <div>
          <>
            <form onSubmit={handleSubmit(otp)}>
              <HStack className="my-8 w-full text-sm md:text-md">
                <PinInput
                  size="md"
                  otp
                  onChange={(value) => setPin(value)}
                  data-testid="otp-change"
                >
                  <div className="border-2 border-dark rounded-md">
                    <PinInputField
                      w="40px"
                      border="1px"
                      paddingLeft="15px"
                      borderColor="grey"
                      h="40px"
                    />
                  </div>
                  <div className="border-2 border-dark rounded-md">
                    <PinInputField
                      w="40px"
                      border="1px"
                      paddingLeft="15px"
                      borderColor="grey"
                      h="40px"
                    />
                  </div>
                  <div className="border-2 border-dark rounded-md">
                    <PinInputField
                      w="40px"
                      border="1px"
                      paddingLeft="15px"
                      borderColor="grey"
                      h="40px"
                    />
                  </div>
                  <div className="border-2 border-dark rounded-md">
                    <PinInputField
                      w="40px"
                      border="1px"
                      paddingLeft="15px"
                      borderColor="grey"
                      h="40px"
                    />
                  </div>
                </PinInput>
              </HStack>

              <Link to="/update-password">
                <button
                  className="bg-blue text-white px-14 border mt-2 py-4 w-full rounded-lg hover:text-blue button-blue border-blue"
                  disable={pin.length < 4}
                >
                  Recover Password
                </button>
              </Link>
            </form>
          </>
          <Link to="/login">
            <p className="text-center text-md mt-4 px-6 text-dark hover:text-blue cursor-pointer duration-1000 ease-in-out nav-anime">
              Take me back to <span className="text-blue">Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InputPinCode;
