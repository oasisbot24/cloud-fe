function numberToCurrency(number: number, currency: string = "$") {
  // This function is used to split a number into currency format.
  // For example, 1234567.89 will be converted to $1,234,567.89.
  return `${currency} ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function dateToKorean(date: Date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

export { numberToCurrency, dateToKorean };
