import { Breadcrumbs, ButtonBase, Typography } from "@mui/material";
import footerMenu from "@/components/Layout/Footer/footerMenu";

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
  return (
    <Breadcrumbs
      separator="·"
      aria-label="breadcrumb"
      className={style[color]}
      sx={breadcrumbsStyle}
    >
      {footerMenu.map((menu, index) => (
        <ButtonBase key={index} href={menu.href} target={menu.target}>
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
