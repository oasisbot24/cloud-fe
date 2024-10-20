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
      <Typography variant="300B">환불정책</Typography>
      <Typography variant="200R">
        1. 이용자의 귀책사유로 결제를 취소, 환불하는 경우에는 다음의 절차에
        따릅니다.
      </Typography>
      <Typography variant="200R">
        1-1. 1회로 이용 또는 구매가 완료되는 서비스는 환불이 불가능 합니다.
      </Typography>
      <Typography variant="200R">
        1-2. 지속적으로 이용가능한 서비스는 이용일수에 해당하는 금액을 차감한
        나머지 금액을 환불 합니다.
      </Typography>
      <Typography variant="200R">
        2. 전항의 규정에도 불구하고 아래 각 호의 경우에는 결제한 전액을
        환불합니다.
      </Typography>
      <Typography variant="200R">
        - 결제를 완료한 후 서비스 이용 내역이 없는 경우
      </Typography>
      <Typography variant="200R">
        - 서비스 장애 등 회사의 귀책사유로 서비스를 이용하지 못한 경우
      </Typography>
      <Typography variant="200R">
        - 구매한 서비스가 제공되지 않은 경우
      </Typography>
      <Typography variant="200R">
        - 구매한 서비스가 표시 또는 광고 등과 상이하거나 현저한 차이가 있는 경우
      </Typography>
      <Typography variant="200R">
        - 서비스 자체의 결함으로 서비스 이용이 현저히 불가능 하였던 경우
      </Typography>
      <Typography variant="200R">
        3. 회사는 환불시 이용대금의 결제수단과 동일한 방법으로 환불하는 것을
        원칙으로 합니다. 다만, 동일한 결제수단으로 환불이 불가능한 경우 회사가
        개별서비스에서 정하는 별도의 방법 으로 환불합니다.
      </Typography>
      <Typography variant="200R">
        4. 회사는 환불 의무가 발생한 날로부터 3영업일 내에 환불절차를
        진행합니다. 다만, 환불을 위하여 이용자의 협조가 필요한 경우 이용자의
        귀책사유로 환불이 지연된 경우 회사는 지연이자를 부담하지 않습니다.
      </Typography>
      <Typography variant="200R">
        5. 환불에 필요한 비용은 귀책사유가 있는 쪽이 부담합니다.
      </Typography>
    </Stack>
  );
}
