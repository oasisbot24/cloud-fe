export default function TimeConvert(time: number) {
  const h = Math.floor(time / 3600);
  const remaining_seconds = time % 3600;
  const m = Math.floor(remaining_seconds / 60);
  const s = remaining_seconds % 60;

  if (h === 0) {
    if (m === 0) {
      return s + "초";
    } else if (s === 0) {
      return m + "분";
    }
    return m + "분" + s + "초";
  } else if (m === 0) {
    if (s === 0) {
      return h + "시간";
    }
    return h + "시간" + s + "초";
  } else if (s === 0) {
    return h + "시간" + m + "분";
  } else {
    return h + "시간" + m + "분" + s + "초";
  }
}
