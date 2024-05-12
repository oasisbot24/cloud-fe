import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

function CardIcon({ src, alt }: Props) {
  return (
    <div className="w-11 h-11 rounded-xl bg-slate-100 flex justify-center items-center">
      <Image src={src} alt={alt} width={36} height={30} />
    </div>
  );
}

export default CardIcon;
