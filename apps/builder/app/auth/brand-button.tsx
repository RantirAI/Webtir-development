import { css, textVariants, theme } from "@webstudio-is/design-system";
import type { ComponentProps } from "react";

const buttonStyle = css({
  all: "unset",
  width: theme.spacing[28],
  boxSizing: "border-box",
  minWidth: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing[5],
  height: theme.spacing[13],
  px: theme.spacing[9],
  borderRadius: theme.spacing[5],
  border: `1px solid ${theme.colors.borderNeutral}`,
  whiteSpace: "nowrap",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  color: theme.colors.foregroundMain,
  ...textVariants.brandButtonRegular,
  "&:hover": {
    boxShadow: theme.shadows.brandElevationBig,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.colors.borderFocus}`,
    outlineOffset: 1,
  },
  "&:disabled": {
    boxShadow: "none",
    color: theme.colors.foregroundDisabled,
    "& svg": {
      opacity: "0.5",
    },
  },
});

type BrandButtonProps = ComponentProps<"button"> & {
  icon: JSX.Element;
};

export const BrandButton = ({ icon, children, ...props }: BrandButtonProps) => {
  return (
    <button {...props} type="submit" className={buttonStyle()}>
      {icon}
      {children}
    </button>
  );
};
