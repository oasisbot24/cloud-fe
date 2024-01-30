import React, { useState } from "react";
import Image from "next/image";

function SideLogin() {
  return (
    <div className="h-lvh lg:w-1/4 md:w-2/5 sm:w-full bg-white flex flex-col self-stretch items-center select-none shadow-md">
      <Image
        src="oasis-logo.svg"
        alt="logo"
        width="120"
        height="138"
        priority={true}
        className="mt-10 w-32 h-auto"
      />
      <div className="text-4xl font-poppins font-semibold">OASIS</div>
      <div className="text-lg font-poppins font-semibold">
        Search for the vein of money
      </div>
      <div className="flex flex-col flex-grow mt-9">
        {/* ↓↓ 추후 구글 로그인 컴포넌트로 변경 ↓↓ */}
        <Image
          src="/web_light_sq_SI.svg"
          alt="google-login"
          width="260"
          height="59"
          className="w-64 h-auto"
        />
        {/* ↑↑ ↑↑ */}
      </div>
      <div className="mb-8 font-poppins text-sm font-normal">
        Copyright 2024. OASIS. All rights reserved.
      </div>
    </div>
  );
}

export default SideLogin;
