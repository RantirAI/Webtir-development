/**
 * Implementation of "Panel Tabs List" and "Panel Tab Trigger" components from:
 * https://www.figma.com/file/sfCE7iLS0k25qCxiifQNLE/%F0%9F%93%9A-Webstudio-Library?node-id=2647-9488
 */

import * as Primitive from "@radix-ui/react-tabs";
import { textVariants } from "./text";
import { styled, theme } from "../stitches.config";

export const PanelTabs = styled(Primitive.Root, {
  display: "flex",
  flexDirection: "column",
});

export const PanelTabsList = styled(Primitive.List, {
  display: "flex",
  paddingRight: theme.spacing[5],
  paddingLeft: theme.spacing[5],
  paddingTop: theme.spacing[3],
  paddingBottom: theme.spacing[3],
  px: theme.spacing[9],
  // TODO: (#Webtir) Would be better to use a variable
  backgroundColor: "$slate4",
  margin: theme.spacing[3],
  padding: theme.spacing[3],
  borderRadius: theme.borderRadius[3],
  gap: theme.spacing[3],
});

export const PanelTabsTrigger = styled(Primitive.Trigger, {
  all: "unset", // reset <button>
  ...textVariants.titles,
  color: theme.colors.foregroundTextMoreSubtle,
  padding: theme.spacing[3],
  borderRadius: theme.borderRadius[3],
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: theme.colors.backgroundHover,
    color: theme.colors.foregroundMain,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.colors.borderFocus}`,
    outlineOffset: "-2px",
  },

  "&[data-state=active]": {
    color: theme.colors.foregroundMain,
    backgroundColor: theme.colors.panel,
  },
  gap: theme.spacing[3],
});

export const PanelTabsContent = styled(Primitive.Content, {
  "&:focus": { outline: "none" },
  "&[data-state=inactive]": { display: "none" },
});
