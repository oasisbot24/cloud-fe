import React from "react";

type Props = {
  center?: boolean;
};

function Footer({ center }: Props) {
  return (
    <div
      className={`z-10 font-poppins text-sm font-normal ${center ? "m-2.5" : "mb-8"} ${center ? "mx-auto" : ""}`}
    >
      Copyright 2024. OASIS. All rights reserved.
    </div>
  );
}

export default Footer;
