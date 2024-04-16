import React from "react";

interface CircleSvgProps {
  fillColorStart: string;
  fillColorEnd: string;
  radius: number;
  startAngle: number;
  endAngle: number;
}

// 부채꼴을 그리는 SVG 컴포넌트입니다.
export default function CircleSvg({
  fillColorStart,
  fillColorEnd,
  radius,
  startAngle,
  endAngle,
}: CircleSvgProps) {
  // 부채꼴의 중심을 계산합니다.
  const centerX = radius;
  const centerY = radius;

  const basicStartAngleRad = (startAngle * Math.PI) / 180;
  const basicEndAngleRad = (endAngle * Math.PI) / 180;

  const realStartX = centerX + radius * Math.cos(basicStartAngleRad);
  const realStartY = centerY + radius * Math.sin(basicStartAngleRad);
  const realEndX = centerX + radius * Math.cos(basicEndAngleRad);
  const realEndY = centerY + radius * Math.sin(basicEndAngleRad);

  const basicStartX = centerX + radius * Math.cos(basicStartAngleRad) * 0.95;
  const basicStartY = centerY + radius * Math.sin(basicStartAngleRad) * 0.95;
  const basicEndX = centerX + radius * Math.cos(basicEndAngleRad) * 0.95;
  const basicEncY = centerY + radius * Math.sin(basicEndAngleRad) * 0.95;

  // 시작 각도와 끝 각도를 라디안으로 변환합니다.
  const mainStartAngleRad = ((startAngle + 3) * Math.PI) / 180;
  const mainEndAngleRad = ((endAngle - 3) * Math.PI) / 180;

  // 시작점과 끝점의 좌표를 계산합니다.
  const mainStartX = centerX + radius * Math.cos(mainStartAngleRad);
  const mainStartY = centerY + radius * Math.sin(mainStartAngleRad);
  const mainEndX = centerX + radius * Math.cos(mainEndAngleRad);
  const mainEndY = centerY + radius * Math.sin(mainEndAngleRad);

  // 부채꼴의 경로를 만듭니다.
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const pathData = [
    `M ${centerX} ${centerY}`,
    `L ${basicStartX} ${basicStartY}`,
    `Q ${realStartX} ${realStartY} ${mainStartX} ${mainStartY}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${mainEndX} ${mainEndY}`,
    `Q ${realEndX} ${realEndY} ${basicEndX} ${basicEncY}`,
    "Z", // 끝점과 시작점을 잇습니다.
  ].join(" ");

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <defs>
        <radialGradient
          id={fillColorStart + fillColorEnd}
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor={fillColorStart} />
          <stop offset="100%" stopColor={fillColorEnd} />
        </radialGradient>
      </defs>
      <path d={pathData} fill={`url(#${fillColorStart + fillColorEnd})`} />
    </svg>
  );
}
