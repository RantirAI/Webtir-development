import { Box, css, theme } from "@webstudio-is/design-system";
import type { ComponentProps } from "react";

const panelStyle = css({
  padding: theme.spacing[13],
  margin: theme.spacing[13],
  borderRadius: theme.borderRadius[6],
  color: theme.colors.foregroundMain,
  minWidth: "min-content",
  // TODO: (#Webtir) Remove "brandElevationBig" from palette. Color not used anymore
  //boxShadow: theme.shadows.brandElevationBig,
  flexGrow: 1,
  maxWidth: "769px",
});

export const Panel = (props: ComponentProps<typeof Box>) => (
  <Box className={panelStyle()} {...props} />
);
