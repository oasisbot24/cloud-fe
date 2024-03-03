import React, { useState } from "react";
import { useRouter } from "next/router";
import { Alert, Paper } from "@mui/material";
import Selectbox from "@/components/basic/Selectbox";
import SidebarButton from "@/components/button/SidebarButton";
import settingAtom from "@/datas/setting";

function AfterLogin() {
  const [exchange, setExchange] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    if (exchange == "") {
      setOpen(true);
      return;
    }
    localStorage.setItem("exchange", exchange);
    router.push("/main");
  };

  const handleState = (value: any) => {
    setOpen(false);
    setExchange(value);
  };

  return (
    <>
      <Selectbox
        labelId="exchange-select"
        selectLabel="거래소 선택"
        itemList={[
          { value: "upbit", itemLabel: "UPBIT 거래소" },
          { value: "okx", itemLabel: "OKX 거래소" },
        ]}
        state={exchange}
        setState={handleState}
      />
      <SidebarButton onClick={handleClick}>거래소 접속</SidebarButton>

      {exchange === "okx" && (
        <>
          <Paper
            elevation={0}
            className="mt-16 p-2.5 font-roboto font-semibold bg-zinc-opacity-30 flex flex-col gap-1.5 self-stretch"
          >
            <div className="text-sm text-red-500">접속하기 전 잠시만요!</div>
            <div className="text-base text-neutral-500">
              아래의 링크로 가입하시면
              <br />
              수수료 50% 할인 혜택이 적용됩니다.
            </div>
          </Paper>
          <SidebarButton onClick={() => console.log("링크")}>
            OKX 가입 링크
          </SidebarButton>
        </>
      )}
      {open && <Alert severity="error">거래소를 선택해 주세요</Alert>}
    </>
  );
}

export default AfterLogin;
