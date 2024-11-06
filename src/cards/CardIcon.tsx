import React from "react";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

function CardIcon({ src, alt }: Props) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
      <Image src={src} alt={alt} width={36} height={30} />
    </div>
  );
}

export default CardIcon;
