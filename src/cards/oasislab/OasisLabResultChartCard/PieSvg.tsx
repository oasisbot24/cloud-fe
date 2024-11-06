interface PieSvgProps {
  fillColor: string;
  borderColor: string;
  radius: number;
  percent: number;
}

// 부채꼴을 그리는 SVG 컴포넌트입니다.
export default function PieSvg({ fillColor, borderColor, radius, percent }: PieSvgProps) {
  // 부채꼴의 중심을 계산합니다.
  const centerX = radius + 1;
  const centerY = radius + 3;

  const basicStartAngleRad = (-90 * Math.PI) / 180;
  const basicEndAngleRad = (((360 * percent) / 100 - 90) * Math.PI) / 180;

  const realStartX = centerX + radius * Math.cos(basicStartAngleRad);
  const basicStartY = centerY + radius * Math.sin(basicStartAngleRad);
  const realEndX = centerX + radius * Math.cos(basicEndAngleRad);
  const realEndY = centerY + radius * Math.sin(basicEndAngleRad);

  // 부채꼴의 경로를 만듭니다.
  const largeArcFlag = percent <= 50 ? "0" : "1";

  const pathData = [
    `M ${centerX} ${centerY}`,
    `L ${realStartX} ${basicStartY}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${realEndX} ${realEndY}`,
    "Z", // 끝점과 시작점을 잇습니다.
  ].join(" ");

  return (
    <svg
      width={radius * 2}
      height={radius * 2 + 10}
      viewBox={`0 0 ${radius * 2 + 2} ${radius * 2}`}
    >
      <defs>
        <radialGradient id={fillColor} cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
          <stop stopColor={fillColor} />
        </radialGradient>
      </defs>
      <path d={pathData} fill={`url(#${fillColor})`} stroke={borderColor} strokeWidth={1.5} />
    </svg>
  );
}
