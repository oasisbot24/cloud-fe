function numberToCurrency(number: number | string, currency: string = "$") {
  // This function is used to split a number into currency format.
  // For example, 1234567.89 will be converted to $1,234,567.89.
  let n = number;
  if (typeof number === "string") {
    n = parseFloat(number);
  }
  return `${currency} ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function dateToKorean(date: Date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

const exchangeToKorean = (market: ExchangeType | undefined) => {
  switch (market) {
    case "upbit":
      return "업비트";
    case "okx":
      return "OKX";
    default:
      return "";
  }
};

const createRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  Array.from({ length }).forEach(() => {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  });
  return result;
};

const numberSlice = (number: number | undefined, slice: number) => {
  if (number === undefined) return "0";
  const numberString = number.toString();
  const [integer, decimal] = numberString.split(".");
  if (decimal === undefined) return numberString;
  return `${integer}.${decimal.slice(0, slice)}`;
};

export {
  numberToCurrency,
  dateToKorean,
  exchangeToKorean,
  createRandomString,
  numberSlice,
};
