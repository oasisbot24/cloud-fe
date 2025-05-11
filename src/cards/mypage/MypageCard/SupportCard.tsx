import { Paper, Stack } from "@mui/material";
import Image from "next/image";

export default function SupportCard() {

  return (
    <Stack className="w-full h-full" spacing={2} pl={3} mt={2}>
      <Stack direction={"row"} spacing={2}>
        <Image src={"/icons/card/KB.png"} alt="kb" width={100} height={50} />
        <Image src={"/icons/card/woori.png"} alt="woori" width={100} height={50} />
        <Image src={"/icons/card/samsung.png"} alt="samsung" width={100} height={50} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Image src={"/icons/card/loca.png"} alt="loca" width={100} height={50} />
        <Image src={"/icons/card/nonghyup.png"} alt="nonghyup" width={100} height={50} />
        <Image src={"/icons/card/sinhan.png"} alt="sinhan" width={100} height={50} />
      </Stack>
    </Stack>

  )
}