import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-20">
      <SignIn signUpUrl="/signup" forceRedirectUrl="/" />
    </div>
  );
};

export default Login;
