import Image from "next/image";

export default function PartnerImage() {
  return (
    <div className="flex mt-5 gap-5">
      <div className="w-2/5">
        <Image
          src="/dashboard/card-media.png"
          alt="card-media"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-2/5">
        <Image
          src="/dashboard/card-media.png"
          alt="card-media"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-1/5">
        <div className="flex flex-col gap-5">
          <Image
            src="/dashboard/card-media.png"
            alt="card-media"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "90%", height: "auto" }}
          />
          <Image
            src="/dashboard/card-media.png"
            alt="card-media"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "90%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
