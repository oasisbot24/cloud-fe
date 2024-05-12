import { Button, Divider, Stack, Typography } from "@mui/material";
import Icon from "@/components/Icon/index";
import CustomCheckbox from "../../../components/CustomCheckbox";

function Check() {
  return (
    <Stack direction="row" className="w-full justify-between">
      <Stack direction="row" className="gap-2 items-center">
        <CustomCheckbox />
        <Typography variant="bodyS" className="text-font-3">
          모두 동의
        </Typography>
      </Stack>
      <Icon src="/icons/arrow/right.png" size={28} />
    </Stack>
  );
}

export default function Agreement() {
  return (
    <Stack className="min-w-[428px] gap-6">
      <Stack>
        <Typography variant="h6" className="text-font-1">
          약관에 동의해주세요
        </Typography>
        <Typography variant="bodyS" className="text-font-3">
          여러분의 개인정보와 서비스 이용권리, 잘 지켜드릴게요.
        </Typography>
      </Stack>
      <Stack className="px-2 gap-3">
        <Stack>
          <Check />
          <Typography variant="200R" className="text-font-3 ml-10">
            서비스 이용을 위해 아래 약관에 모두 동의합니다.
          </Typography>
        </Stack>
        <Divider className="my-2" />
        <Check />
        <Check />
        <Check />
        <Check />
      </Stack>
      <Stack direction="row" className="gap-3">
        <Button variant="outlined" className="w-full rounded-full">
          취소
        </Button>
        <Button variant="contained" className="w-full rounded-full">
          확인
        </Button>
      </Stack>
    </Stack>
  );
}
