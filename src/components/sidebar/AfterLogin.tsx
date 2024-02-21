import { useRouter } from "next/router";
import { Paper } from "@mui/material";
import { useAtom } from "jotai";
import Selectbox from "@/components/basic/Selectbox";
import SidebarButton from "@/components/button/SidebarButton";
import settingAtom from "@/datas/setting";

function AfterLogin() {
  const router = useRouter();
  const [setting, setSetting] = useAtom(settingAtom);

  const setExchange = (value: string) => {
    setSetting({ ...setting, bank_name: value as "upbit" | "okx" });
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
        state={setting.bank_name}
        setState={setExchange}
      />
      <SidebarButton onClick={() => router.push("/main")}>
        거래소 접속
      </SidebarButton>

      {setting.bank_name === "okx" && (
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
          <SidebarButton>OKX 가입 링크</SidebarButton>
        </>
      )}
    </>
  );
}

export default AfterLogin;
