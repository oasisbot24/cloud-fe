import Image from "next/image";

import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import authAtom from "@/datas/auth";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";

export default function UserProfile() {
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const [auth] = useAtom(authAtom);

  return (
    <Stack direction="row" className="items-center gap-2">
      <Image
        src={auth.picture ?? "/logo/oasis.png"}
        alt="profile"
        width={40}
        height={40}
        className="rounded-full"
      />
      <Stack className="gap-1">
        <Typography variant="200B">{auth.name}</Typography>
        <Typography variant="100R">{subscribeData?.productName}</Typography>
      </Stack>
    </Stack>
  );
}
