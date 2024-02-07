import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/basic/Footer";
import OasisGoogleLoginButton from "@/components/button/OasisGoogleLoginButton";
import AfterLogin from "@/components/sidebar/AfterLogin";

function SideLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col self-stretch items-center select-none">
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
      <Footer />
    </div>
  );
}
export default SideLogin;
