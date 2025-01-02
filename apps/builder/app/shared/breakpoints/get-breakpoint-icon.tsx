import {
  SmartphoneIcon,
  SmartphoneSubtleIcon,
  TabletIcon,
  TabletSubtleIcon,
} from "@webstudio-is/icons";

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
    return breakpoint.isSelected ? (
      <TabletIcon fill="none" size={16} />
    ) : (
      <TabletSubtleIcon fill="none" size={16} />
    );
  }

  if (breakpoint.maxWidth === mobileLandscapeBreakpoint) {
    return breakpoint.isSelected ? (
      <TabletIcon fill="none" transform="rotate(90 0 0)" />
    ) : (
      <TabletSubtleIcon fill="none" transform="rotate(90 0 0)" />
    );
  }

  if (breakpoint.maxWidth === mobilePortraitBreakpoint) {
    return breakpoint.isSelected ? (
      <SmartphoneIcon fill="none" />
    ) : (
      <SmartphoneSubtleIcon fill="none" />
    );
  }

  return null;
};
