import Image from "next/image";

export default function PartnerImage() {
    return(
        <div className="flex mt-5 gap-5">
        <Image
          src="/dashboard/card-media.png"
          alt="card-media"
          width={180}
          height={180}
        />
        <Image
          src="/dashboard/card-media.png"
          alt="card-media"
          width={180}
          height={180}
        />
        <Image
          src="/dashboard/card-media.png"
          alt="card-media"
          width={180}
          height={180}
        />
        <div className="flex flex-col gap-5">
          <Image
            src="/dashboard/card-media.png"
            alt="card-media"
            width={80}
            height={80}
          />
          <Image
            src="/dashboard/card-media.png"
            alt="card-media"
            width={80}
            height={80}
          />
          
        </div>
      </div>
    )
}