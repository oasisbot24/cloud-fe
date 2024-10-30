import { useState } from "react";
import Image from "next/image";
import {
  CardContent,
  Chip,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import LeverageNoticeDialog from "@/cards/oasisbot/OasisBotRunCard/LeverageNoticeDialog";
import InfoDialog from "@/components/common/InfoDialog";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { useBot, useBotInfo } from "@/hooks/query/useOasisBot";
import { usePresetQuery } from "@/hooks/query/usePreset";
import useModalGlobal from "@/hooks/useModalGlobal";
import { exchangeToKorean } from "@/libs/string";

function OasisBotRunCard() {
  const [startBalance, setStartBalance] = useState<number>(5000);
  const [selectedPreset, setSelectedPreset] = useState<number>(1);
  const [selectedTradeItem, setSelectedTradeItem] = useState<number>(1);
  const [standardMinute, setStandardMinute] = useState<number>(1);

  const [exchange] = useAtom(exchangeAtom);

  const { openModal, closeModal } = useModalGlobal();
  const { presetQuery } = usePresetQuery();
  const { coinQuery, balanceQuery } = useBotInfo();
  const { startBotMutation } = useBot();
  const { mutate } = startBotMutation;

  const onReset = () => {
    setStartBalance(5000);
    setSelectedPreset(0);
    setSelectedTradeItem(0);
  };

  const presetList: SelectItem[] =
    (presetQuery.data?.map(item => ({
      label: item.presetName,
      value: item.id,
    })) as SelectItem[]) ?? [];
  const coinList = (coinQuery.data as SelectItem[]) ?? [];

  // temp
  const standardMinuteList = [
    { label: "1분봉", value: 1 },
    { label: "3분봉", value: 3 },
    { label: "5분봉", value: 5 },
    { label: "15분봉", value: 15 },
    { label: "30분봉", value: 30 },
    { label: "1시간봉", value: 60 },
  ];

  const runOasisBot = () => {
    if (
      (balanceQuery.data?.availableBalance &&
        balanceQuery.data.availableBalance < Number(startBalance)) ||
      Number(startBalance)
    ) {
      openModal(
        <InfoDialog
          title="거래금액"
          description={["거래금액은 잔고 이내의 금액을 기입해주세요."]}
          handleClose={closeModal}
        />,
      );
      return;
    }

    if (!selectedPreset) {
      openModal(
        <InfoDialog
          title="설정 프리셋"
          description={["프리셋을 설정하고 실행해주세요."]}
          handleClose={closeModal}
        />,
      );
      return;
    }

    if (!selectedTradeItem) {
      openModal(
        <InfoDialog
          title="매매종목 설정"
          description={["매매종목을 설정하고 실행해주세요."]}
          handleClose={closeModal}
        />,
      );
      return;
    }

    if (!Number(standardMinute)) {
      openModal(
        <InfoDialog
          title="기준 분봉 설정"
          description={["기준분봉을 설정하고 실행해주세요."]}
          handleClose={closeModal}
        />,
      );
      return;
    }

    const body = {
      botName: "bot1",
      presetId: selectedPreset,
      coinId: selectedTradeItem,
      standardMinute: Number(standardMinute),
      startBalance: Number(startBalance),
      leverage: null,
    };

    mutate(body);
  };

  return (
    <Card>
      <CardHeader
        id="bot-start"
        title="오아시스 BOT 실행"
        subtitle={`주문가능 금액\n${exchange === "upbit" ? "￦" : "$"}${balanceQuery.data?.availableBalance?.toLocaleString() ?? 0}`}
        action={
          <Chip
            label={exchangeToKorean(exchange)}
            variant="outlined"
            className="text-brand"
          />
        }
      />
      <CardContent>
        <Stack className="gap-2">
          <FormTextField
            id="transactionAmount"
            label={`거래금액을 입력해 주세요 (최소 ${exchange === "upbit" ? "₩5,000" : "$100"})`}
            type="number"
            value={startBalance}
            setValue={setStartBalance}
            startAdornment={
              <InputAdornment position="start">
                {exchange === "upbit" ? "￦" : "$"}
              </InputAdornment>
            }
            inputLabelProps={{
              className: "text-brand opacity-100",
            }}
          />
          <FormSelect
            id="presets"
            label="설정 프리셋"
            placeholder="설정 프리셋을 선택"
            variant="standard"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
          />
          <FormSelect
            id="tradeItem"
            label="매매종목"
            placeholder="매매종목을 선택"
            variant="standard"
            items={coinList}
            value={selectedTradeItem}
            setValue={setSelectedTradeItem}
          />
          <FormSelect
            id="tradeItem"
            label="기준 분봉"
            placeholder="분봉 선택"
            variant="standard"
            items={standardMinuteList}
            value={standardMinute}
            setValue={setStandardMinute}
          />
          <Stack className="w-full">
            <InputLabel htmlFor="leverage">
              <Image
                src="/icons/control/info.png"
                alt="info"
                width={12}
                height={12}
                className="mr-1"
              />
              <Typography
                variant="100R"
                className="text-neutral-600 underline hover:cursor-pointer"
                onClick={() =>
                  openModal(<LeverageNoticeDialog handleClose={closeModal} />)
                }
              >
                현재 설정 레버리지
              </Typography>
            </InputLabel>
            <InputBase
              placeholder={`${exchange === "upbit" ? "업비트 거래소는 레버리지 설정 불가" : "레버리지 고정값"}`}
              fullWidth
              classes={{
                input:
                  "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
                disabled: "cursor-not-allowed bg-neutral-200 text-neutral-600",
              }}
              disabled
            />
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter className="bottom-2">
        <CardButton
          text="초기화"
          className="mr-1 text-white bg-neutral-700"
          onClick={onReset}
        />
        <CardButton
          text="저장 및 실행"
          className="ml-1 text-white bg-brand"
          onClick={runOasisBot}
        />
      </CardFooter>
    </Card>
  );
}

export default OasisBotRunCard;
