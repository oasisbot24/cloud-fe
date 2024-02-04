import React, { useState } from "react";
import Image from "next/image";
import AfterLogin from "@/components/sidebar/AfterLogin";

function SideLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="xl:w-1/4 lg:w-2/5 md:w-2/5 sm:w-full xs:w-full bg-white flex flex-col self-stretch items-center select-none shadow-md">
      <Image
        src="oasis-logo.svg"
        alt="logo"
        width="120"
        height="138"
        priority={true}
        className="mt-10 w-32 h-auto"
      />
      <div className="text-4xl font-poppins font-semibold uppercase">OASIS</div>
      <div className="text-lg font-poppins font-semibold">
        Search for the vein of money
      </div>
      <div className="flex flex-col flex-grow mt-9 items-center">
        {!isLoggedIn && (
          <Image
            src="/google-login-temp.svg"
            alt="google-login"
            width="260"
            height="59"
            className="w-64 h-auto"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          />
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