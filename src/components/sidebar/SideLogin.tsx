import { useState } from "react";
import OasisGoogleLoginButton from "@/components/button/OasisGoogleLoginButton";
import AfterLogin from "@/components/sidebar/AfterLogin";
import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";

function SideLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (credential: CredentialResponse) => {
    setIsLoggedIn(true);
    axios
      .post("http://3.36.71.228:8080/api/v1/signin", {
        credential: credential.credential,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="h-lvh xl:w-1/4 lg:w-2/5 md:w-2/5 sm:w-full xs:w-full bg-white flex flex-col self-stretch items-center select-none shadow-md">
      <Image
        src="/logo/oasis-black.svg"
        alt="logo"
        width={120}
        height={138}
        className="mt-10 w-32 h-auto"
        priority
      />
      <div className="text-4xl font-poppins font-semibold uppercase">OASIS</div>
      <div className="text-lg font-poppins font-semibold">
        Search for the vein of money
      </div>
      <div className="flex flex-col flex-grow mt-9 items-center">
        {!isLoggedIn && (
          <OasisGoogleLoginButton onSuccess={onSuccess} onError={() => {}} />
        )}
        {isLoggedIn && <AfterLogin />}
      </div>
      <div className="mb-8 font-poppins text-sm font-normal">
        Copyright 2024. OASIS. All rights reserved.
      </div>
    </div>
  );
}

export default SideLogin;
