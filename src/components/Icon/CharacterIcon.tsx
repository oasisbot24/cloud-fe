import Image from "next/image";

interface CharacterIconProps {
  happiness: number;
}

const iconSrc = {
  1: "/icons/character/01.png",
  2: "/icons/character/02.png",
  3: "/icons/character/03.png",
  4: "/icons/character/04.png",
  5: "/icons/character/05.png",
  6: "/icons/character/06.png",
  7: "/icons/character/07.png",
};

export default function CharacterIcon({ happiness }: CharacterIconProps) {
  let happinessNumber: HappinessType = happiness as HappinessType;
  if (happiness > 7) {
    happinessNumber = 7;
  }
  if (happiness < 1) {
    happinessNumber = 1;
  }
  return (
    <Image
      className="z-[999]"
      src={iconSrc[happinessNumber]}
      height={280}
      width={290}
      alt="happyicon"
    />
  );
}
