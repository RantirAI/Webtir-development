import {
  EnhancedTooltip,
  Text,
  theme,
  Toolbar,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from "@webstudio-is/design-system";
import { useRef } from "react";
import { StarIcon } from "@webstudio-is/icons";
import { useSetInitialCanvasWidth } from ".";
import { selectedBreakpointIdStore } from "~/shared/nano-states";
import { groupBreakpoints, isBaseBreakpoint } from "~/shared/breakpoints";
import type { Breakpoint, Breakpoints } from "@webstudio-is/project-build";
import { getBreakpointIcon } from "~/shared/breakpoints/get-breakpoint-icon";

const getTooltipContent = (breakpoint: Breakpoint) => {
  if (isBaseBreakpoint(breakpoint)) {
    return (
      <>
        <Text variant="regularBold">Base</Text>
        <br />
        Styles on Base apply to all viewport sizes unless overwritten by another
        breakpoint. Start your styling here.
      </>
    );
  }
  if (breakpoint.maxWidth !== undefined) {
    return (
      <>
        <Text variant="regularBold">{breakpoint.maxWidth}px and down</Text>
        <br />
        Styles on this breakpoint apply to viewport widths {breakpoint.maxWidth}
        px and down, unless overwritten by a smaller breakpoint.
      </>
    );
  }
  if (breakpoint.minWidth !== undefined) {
    return (
      <>
        <Text variant="regularBold">{breakpoint.minWidth}px and up</Text>
        <br />
        Styles on this breakpoint apply to viewport widths {breakpoint.minWidth}
        px and up, unless overwritten by a larger breakpoint.
      </>
    );
  }
};

type BreakpointsSelector = {
  breakpoints: Breakpoints;
  selectedBreakpoint: Breakpoint;
};

export const BreakpointsSelector = ({
  breakpoints,
  selectedBreakpoint,
}: BreakpointsSelector) => {
  const refs = useRef(new Map<string, HTMLButtonElement>());
  const setInitialCanvasWidth = useSetInitialCanvasWidth();

  return (
    <Toolbar>
      <ToolbarToggleGroup
        type="single"
        value={selectedBreakpoint.id}
        onValueChange={(breakpointId: string) => {
          // onValueChange gives empty string when unselected
          // which is not part of breakpoints so do nothing in this case
          if (breakpoints.has(breakpointId) === false) {
            return;
          }
          selectedBreakpointIdStore.set(breakpointId);
          setInitialCanvasWidth(breakpointId);
        }}
        css={{ position: "relative" }}
      >
        {groupBreakpoints(Array.from(breakpoints.values())).map(
          (breakpoint) => {
            const breakpointSelected = breakpoint.id === selectedBreakpoint.id;

            return (
              <EnhancedTooltip
                key={breakpoint.id}
                content={getTooltipContent(breakpoint)}
                css={{ maxWidth: 240 }}
              >
                <ToolbarToggleItem
                  variant="subtle"
                  ref={(node) => {
                    if (node) {
                      refs.current.set(breakpoint.id, node);
                      return;
                    }
                    refs.current.delete(breakpoint.id);
                  }}
                  value={breakpoint.id}
                >
                  {getBreakpointIcon({
                    maxWidth: breakpoint.maxWidth,
                    isSelected: breakpointSelected,
                  })}
                  {breakpoint.minWidth ? (
                    <Text color="subtle">{breakpoint.minWidth}</Text>
                  ) : breakpoint.maxWidth ? (
                    <Text color="subtle">{breakpoint.maxWidth}</Text>
                  ) : (
                    <StarIcon
                      size={16}
                      fill="none"
                      style={{
                        color: breakpointSelected
                          ? theme.colors.foregroundMain
                          : theme.colors.foregroundSubtle,
                      }}
                    />
                  )}
                </ToolbarToggleItem>
              </EnhancedTooltip>
            );
          }
        )}
      </ToolbarToggleGroup>
    </Toolbar>
  );
};
