import { useState } from "react";
import Image from "next/image";
import {
  CardContent,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import Carousel from "@/layouts/Carousel/vertical";

export default function PresetWeightInfoCard() {
  const [isExist, setIsExist] = useState<boolean>(true); // 임시 조치

  const steps = [
    {
      label: "카운팅 1에서 10% 매수합니다.",
      description: `첫번째로 진입합니다.`,
    },
    {
      label: "카운팅 2에서 20% 매수합니다.",
      description: `두번째로 진입합니다.`,
    },
    {
      label: "카운팅 3에서 10% 매수합니다.",
      description: `세번째로 진입합니다.`,
    },
    {
      label: "카운팅 4에서 10% 매수합니다.",
      description: `네번째로 진입합니다.`,
    },
    {
      label: "카운팅 5에서 10% 매수합니다.",
      description: `다섯번째로 진입합니다.`,
    },
    {
      label: "카운팅 6에서 20% 매수합니다.",
      description: `여섯번째로 진입합니다.`,
    },
    {
      label: "카운팅 7에서 10% 매수합니다.",
      description: `일곱번째로 진입합니다.`,
    },
    {
      label: "카운팅 8에서 10% 매수합니다.",
      description: `여덟번째로 진입합니다.`,
    },
  ];

  return (
    <Card>
      <CardHeader
        id="history"
        title="매매비중 설정 내역"
        subtitle="총합의 값이 100%가 되도록 채워주세요."
      />
      <CardContent className="p-0">
        {!isExist && (
          <Stack justifyContent="center" alignItems="center">
            <Image
              src="/icons/control/alarm.png"
              alt="NoPreset"
              width={100}
              height={100}
            />
            <Typography className="text-xl font-bold">매매비중 설정</Typography>
            <Stack justifyContent="center" alignItems="center">
              <Typography className="font-3">
                총합의 값이 부족합니다.
              </Typography>
              <Stack direction="row">
                <Typography color="primary" component="span">
                  매매비중 설정
                </Typography>
                <Typography component="span" className="font-3">
                  에서
                </Typography>
              </Stack>
              <Typography className="font-3">
                총합의 값을 채워주세요.
              </Typography>
            </Stack>
          </Stack>
        )}
        {isExist && (
          <Carousel height={300}>
            <Stepper orientation="vertical" activeStep={steps.length}>
              {steps.map((step, index) => (
                <Step key={index} expanded>
                  <StepLabel className="text-sm">{step.label}</StepLabel>
                  <StepContent>
                    <Typography className="text-xs">
                      {step.description}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Carousel>
        )}
      </CardContent>
    </Card>
  );
}
