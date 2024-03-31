import Icon from "@/screens/Icon";

interface SocialIconProps {
  social: SocialType;
  color: LayoutColorType;
}

const iconSrc = {
  white: {
    linkedin: "/icon/social/linkedin-white.png",
    facebook: "/icon/social/facebook-white.png",
    naver: "/icon/social/naver-white.png",
    kakao: "/icon/social/kakao-white.png",
  },
  black: {
    linkedin: "/icon/social/linkedin-black.png",
    facebook: "/icon/social/facebook-black.png",
    naver: "/icon/social/naver-black.png",
    kakao: "/icon/social/kakao-black.png",
  },
};

export default function SocialIcon({ social, color }: SocialIconProps) {
  return (
    <Icon src={iconSrc[color][social]} size={40} className="rounded-full" />
  );
}
