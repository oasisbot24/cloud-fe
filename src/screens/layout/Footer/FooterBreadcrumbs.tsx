import { useRouter } from "next/router";
import { Breadcrumbs, ButtonBase, Typography } from "@mui/material";
import footerMenu from "@/screens/Layout/Footer/footerMenu";

interface FooterBreadcrumbsProps {
  color: LayoutColorType;
}

const style = {
  white: "text-white",
  black: "text-black",
};

const breadcrumbsStyle = {
  ".MuiBreadcrumbs-separator": {
    margin: "0 0.25rem",
  },
};

export default function FooterBreadcrumbs({ color }: FooterBreadcrumbsProps) {
  const { push } = useRouter();
  return (
    <Breadcrumbs
      separator="·"
      aria-label="breadcrumb"
      className={style[color]}
      sx={breadcrumbsStyle}
    >
      {footerMenu.map((menu, index) => (
        <ButtonBase key={index} onClick={() => push(menu.href)}>
          <Typography
            variant={menu.title === "개인정보처리방침" ? "200B" : "200R"}
            className={style[color]}
          >
            {menu.title}
          </Typography>
        </ButtonBase>
      ))}
    </Breadcrumbs>
  );
}
