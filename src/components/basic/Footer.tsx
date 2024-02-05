import React from "react";

type Props = {
  mb?: number;
  center?: boolean;
};

function Footer({ mb, center }: Props) {
  return (
    <div
      className={`z-10 font-poppins text-sm font-normal mb-${mb} ${center ? "mx-auto" : ""}`}
    >
      Copyright 2024. OASIS. All rights reserved.
    </div>
  );
}

export default Footer;
