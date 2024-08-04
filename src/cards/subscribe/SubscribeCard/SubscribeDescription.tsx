import { Stack, Typography } from "@mui/material";

export default function SubscribeDescription() {
  return (
    <Stack className="mx-4 my-8 p-8 bg-neutral-200 gap-4">
      <Typography variant="300B">오아시스 구독 유의 사항</Typography>
      <Typography variant="200R">
        1. 만 14세 이상 회원만 구매 가능합니다.
      </Typography>
      <Typography variant="200R">
        2. 낮은 플랜에서 높은 플랜으로 구독 변경을 할 시<br />
        2-1. 첫 결제 당일 무료 요금제의 차액만큼만 결제가 됩니다.
      </Typography>
      <Typography variant="200R">
        3. 높은 플랜에서 낮은 플랜으로 구독 변경을 할 시<br />
        3-1. 구독 기간 도중에 낮은 플랜으로 변경 할 시 높은 플랜은 갱신일 1일
        전까지 유지가 됩니다. 구독 갱신일이 되면 변경된 낮은 플랜으로 결제가
        됩니다.
      </Typography>
      <Typography variant="200R">
        4. 정기 결제 이용 도중 결제정보가 변경되거나 한도 부족등으로 결제가
        실패된 경우 총 3회에 걸쳐 재결제가 진행됩니다. (당일 09시, 15시, 21시)
      </Typography>
      <Typography variant="200R">
        4-1. 3회 이상에도 재결제가 안 이루어질 시, 매일 일정 후 2일 뒤
        봇(자동거래)이 정지가 됩니다.
      </Typography>
      <Typography variant="200R">
        5. 결제 당일에는 중복 결제나 오류 방지를 위해 결제 정보 변경이
        불가하므로, 다음 날 새롭게 변경/결제 해야합니다.
      </Typography>
      <Typography variant="200R">
        6. 자동결제는 이용 중단하지 않는 한 구독 기간이 자동으로 갱신되며, 구독
        만료시 자동 갱신 해제 되어 이용권이 종료됩니다.
      </Typography>
      <Typography variant="200R">
        7. 구독 중 이용 권한에 문제가 있을 경우, 결제 후 3일 이내에 고객센터를
        통해 이용신청의 철회가 가능합니다.
      </Typography>
      <Typography variant="200R">
        8. 자동 결제로 인한 미이행 거래가 발생 할 경우 환불이 불가합니다.
      </Typography>
      <Typography variant="300B">서비스 이용 유의사항</Typography>
      <Typography variant="200R">
        1. 제조사에 따라 일부 기기에서는 서비스가 정상 동작하지 않을 수
        있습니다.
      </Typography>
      <Typography variant="200R">
        2. 저작권자의 요청으로 기기에 따라 일부 사용자는 제한 될 수 있습니다.
      </Typography>
    </Stack>
  );
}
