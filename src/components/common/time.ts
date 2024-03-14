interface Props {
  seconds: number;
}

export default function Time({ seconds }: Props) {
  const addZero = (num: number) => {
    return (num < 10 ? "0" : "") + num;
  };

  if (seconds < 61) {
    return `00:${addZero(seconds)}`;
  }

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds - hours * 3600) / 60);
  const secs = seconds - hours * 3600 - mins * 60;

  return `${addZero(hours)}:${addZero(mins)}:${addZero(secs)}`;
}
