import React from "react";
import Image from "next/image";
import { CardContent, Chip, Stack, Typography } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";

interface OasisBotTotalCardProps {
  id: DashboardIdType;
  title: string;
  subtitle?: string;
  color: string;
  value: string | number;
  unit: string;
  difference?: number;
  arrow?: boolean;
  mention?: string;
}

function OasisBotTotalCard({
  id,
  title,
  subtitle,
  color,
  value,
  unit,
  difference,
  arrow,
  mention,
}: OasisBotTotalCardProps) {
  return (
    <Card>
      <div
        className="absolute h-full w-1.5"
        style={{
          backgroundColor: color,
        }}
      />
      <CardHeader id={id} title={title} subtitle={subtitle} />
      <CardContent>
        <Stack spacing={2}>
          <div>
            <Chip
              label={
                <Stack direction="row">
                  {((difference === undefined && arrow) ||
                    (difference !== undefined && difference >= 0)) && (
                    <Image
                      src="/icons/arrow/profitloss/up-small.png"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  )}
                  {difference !== undefined && difference < 0 && (
                    <Image
                      src="/icons/arrow/profitloss/down-small.png"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  )}
                  <Typography fontSize={12} fontWeight={700}>
                    {mention}
                    {difference !== undefined &&
                      `전 날 보다 ${difference}원 ${difference >= 0 ? "상승" : "하락"} 했어요`}
                  </Typography>
                </Stack>
              }
            />
          </div>
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              alignItems: "center",
            }}
          >
            <Typography fontSize={28} fontWeight={700}>
              {value}
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              {unit}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default OasisBotTotalCard;
