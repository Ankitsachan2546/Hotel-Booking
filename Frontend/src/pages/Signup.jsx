import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-20">
      <SignUp signInUrl="/login" forceRedirectUrl="/" />
    </div>
  );
};

export default Signup;
