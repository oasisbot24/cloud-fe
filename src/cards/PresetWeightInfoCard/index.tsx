import { useState } from "react";
import Image from "next/image";
import { CardContent, Stack, Typography } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";

export default function PresetWeightInfoCard() {
  const [isExist, setIsExist] = useState<boolean>(false); // 임시 조치

  return (
    <Card>
      <CardHeader
        id="history"
        title="매매비중 설정 내역"
        subtitle="총합의 값이 100%가 되도록 채워주세요."
      />
      <CardContent>
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
        {isExist && <div>hello</div>}
      </CardContent>
    </Card>
  );
}
