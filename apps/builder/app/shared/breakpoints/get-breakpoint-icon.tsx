import { SmartphoneIcon, TabletIcon } from "@webstudio-is/icons";
import { theme } from "@webstudio-is/design-system";

export const getBreakpointIcon = (breakpoint: {
  maxWidth?: number;
  isSelected: boolean;
}) => {
  //TODO: (#Webtir) Temporary solution. Better to use breakpoint variables
  // instead of hard coding the value here. Current Breakpoint object
  // type does not have a friendly id. That's why hardcoded values
  // are used here.
  const mobilePortraitBreakpoint = 479;
  const mobileLandscapeBreakpoint = 767;
  const tabletBreakpoint = 991;

  if (breakpoint.maxWidth === tabletBreakpoint) {
    return (
      <TabletIcon
        size={16}
        style={{
          color: breakpoint.isSelected
            ? theme.colors.foregroundMain
            : theme.colors.foregroundSubtle,
        }}
      />
    );
  }

  if (breakpoint.maxWidth === mobileLandscapeBreakpoint) {
    return (
      <TabletIcon
        transform="rotate(90 0 0)"
        style={{
          color: breakpoint.isSelected
            ? theme.colors.foregroundMain
            : theme.colors.foregroundSubtle,
        }}
      />
    );
  }

  if (breakpoint.maxWidth === mobilePortraitBreakpoint) {
    return (
      <SmartphoneIcon
        style={{
          color: breakpoint.isSelected
            ? theme.colors.foregroundMain
            : theme.colors.foregroundSubtle,
        }}
      />
    );
  }

  return null;
};
