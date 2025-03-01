// @todo this should be a local customization in sidebar left, not a reusable component
import { type ComponentProps, type ElementRef, forwardRef } from "react";
import { type CSS, styled } from "../stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { theme } from "../stitches.config";

export const SidebarTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
});

export const SidebarTabsTrigger = styled(TabsPrimitive.Trigger, {
  boxSizing: "border-box",
  flexShrink: 0,
  display: "flex",
  size: theme.spacing[15],
  m: 0,
  userSelect: "none",
  outline: "none",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.slate11,
  border: "1px solid transparent",
  backgroundColor: "transparent",

  "@hover": {
    "&:hover": {
      backgroundColor: theme.colors.slateA3,
      color: theme.colors.hiContrast,
    },
  },

  '&[data-state="active"]': {
    color: theme.colors.hiContrast,
    backgroundColor: theme.colors.slateA4,
    borderColor: theme.colors.slate6,
  },
});

const StyledTabsList = styled(TabsPrimitive.List, {
  boxSizing: "border-box",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  flexGrow: 1,
});

type TabsListPrimitiveProps = ComponentProps<typeof TabsPrimitive.List>;
type TabsListProps = TabsListPrimitiveProps & { css?: CSS };

export const SidebarTabsList = forwardRef<
  ElementRef<typeof StyledTabsList>,
  TabsListProps
>((props, forwardedRef) => (
  <>
    <StyledTabsList {...props} ref={forwardedRef} />
  </>
));

SidebarTabsList.displayName = "SidebarTabsList";

export const SidebarTabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  position: "absolute",
  borderTopLeftRadius: theme.borderRadius[7],
  borderTopRightRadius: theme.borderRadius[7],
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
  top: 0,
  left: `calc(100% + ${theme.spacing[5]})`,
  height: "100%",
  background: theme.colors.panel,
  outline: "none",
});
