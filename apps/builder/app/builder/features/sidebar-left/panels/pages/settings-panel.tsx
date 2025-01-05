import {
  styled,
  keyframes,
  Collapsible,
  Box,
} from "@webstudio-is/design-system";
import { theme } from "@webstudio-is/design-system";

const CollapsibleRoot = styled(Collapsible.Root, {
  position: "absolute",
  left: `calc(100% + ${theme.spacing[5]})`,
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  marginLeft: 1,
});

const openKeyframes = keyframes({
  from: {
    opacity: 0.5,
    transform: `translateX(-${theme.spacing[30]})`,
  },
  to: {
    transform: "translateX(0)",
    opacity: 1,
  },
});

const closeKeyframes = keyframes({
  from: {
    transform: "translateX(0)",
    opacity: 1,
  },
  to: {
    opacity: 0.2,
    transform: `translateX(-${theme.spacing[30]})`,
  },
});

const CollapsibleContent = styled(Collapsible.Content, {
  overflow: "hidden",
  flexGrow: "1",
  display: "flex",
  flexDirection: "column",
  '&[data-state="open"]': {
    animation: `${openKeyframes} 200ms ${theme.easing.easeOutQuart}`,
  },
  '&[data-state="closed"]': {
    animation: `${closeKeyframes} 200ms ${theme.easing.easeOutQuart}`,
  },
});

export const SettingsPanel = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <CollapsibleRoot open={isOpen}>
      <CollapsibleContent>
        <Box
          css={{
            flexGrow: 1,
            width: theme.spacing[35],
            background: theme.colors.panel,
            borderTopLeftRadius: theme.borderRadius[7],
            borderTopRightRadius: theme.borderRadius[7],
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
            height: "100%",
            position: "relative",
          }}
        >
          {children}
        </Box>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};
