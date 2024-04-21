import Image from "next/image";
import { Avatar, Box, Card, Chip, Typography } from "@mui/material";

interface Props {
  setAnchorEl: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Panel({ setAnchorEl }: Props) {
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div
      className="flex flex-row w-1/2 h-[80px] bg-[#898FC3] rounded-lg justify-around  items-center p-2"
      onClick={handleClick}
    >
      <div className=" flex flex-row w-full gap-2  items-center">
        <div className="flex bg-white rounded-lg border-[#F6F6F6] p-1 ">
          <Image
            src="/icons/dashboard/bar-graph.png"
            alt="all"
            width={45}
            height={45}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Typography
            fontFamily="Inter"
            fontWeight={700}
            fontSize={16}
            lineHeight="18px"
            color={"#FFFFFF"}
          >
            종합
          </Typography>
          <Typography
            fontFamily="Inter"
            fontWeight={400}
            fontSize={14}
            lineHeight="18px"
            color={"#FFFFFF"}
          >
            ALL
          </Typography>
        </div>
      </div>
      <div className="flex flex-row gap-2 ">
        <div className="flex flex-col gap-1 ">
          <div className="flex w-full justify-end">
            <Typography
              fontFamily="SF Pro Display"
              fontWeight={600}
              fontSize={18}
              lineHeight="22px"
              color={"#FFFFFF"}
            >
              $230,7777
            </Typography>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex flex-row bg-[#D1D6F9] rounded-full w-[58px] h-[24px] items-center justify-center ">
              <Image
                src="/icons/arrow/profitloss/down-small.png"
                width={16}
                height={16}
                alt="small"
              />
              <Typography
                fontFamily="SF Pro Display"
                fontWeight={700}
                fontSize={14}
                lineHeight="16px"
                color={"#223CE9"}
              >
                23%
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/icons/arrow/down-circle.png"
            alt="circle"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
