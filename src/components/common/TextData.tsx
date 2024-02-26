import React from "react";

const TextDataTypes = {
  percent: "percent",
  currency: "currency",
  count: "count",
  day: "day",
  number: "number",
};

type TextDataType = (typeof TextDataTypes)[keyof typeof TextDataTypes];

type Props = {
  label: string;
  value: string | number;
  type?: TextDataType;
  labelClass?: string;
  valueClass?: string;
};

function TextData({ label, value, type, labelClass, valueClass }: Props) {
  const convertData = (data: Props["value"]) => {
    switch (type) {
      case "percent":
        return `${data}%`;
      case "currency":
        return `${data.toLocaleString()} KRW`;
      case "count":
        return `${data.toLocaleString()}회`;
      case "day":
        return `${data.toLocaleString()}일`;
      default:
        return data;
    }
  };

  return (
    <div className="flex justify-between mt-2 mb-2.5">
      <div className={`font-bold font-poppins text-base ${labelClass}`}>
        {label}
      </div>
      <div className={`${valueClass}`}>{convertData(value)}</div>
    </div>
  );
}

export default TextData;
