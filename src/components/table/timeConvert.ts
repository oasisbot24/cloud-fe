export default function TimeConvert(time: number) {
  const h = Math.floor(time / 3600);
  const remainSec = time % 3600;
  const m = Math.floor(remainSec / 60);
  const s = remainSec % 60;

  if (h === 0) {
    if (m === 0) {
      return `${s}초`;
    }
    if (s === 0) {
      return `${m}분`;
    }
    return `${m}분 ${s}초`;
  }
  return `${h}시간 ${m}분`;
  // return `${h}시간 ${m}분 ${s}초`;
}
