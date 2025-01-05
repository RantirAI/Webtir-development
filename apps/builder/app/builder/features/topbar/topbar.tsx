import { useStore } from "@nanostores/react";
import {
  theme,
  css,
  Flex,
  Text,
  Toolbar,
  ToolbarToggleGroup,
} from "@webstudio-is/design-system";
import type { Project } from "@webstudio-is/project";
import type { Publish } from "~/shared/pubsub";
import { selectedPageStore } from "~/shared/nano-states";
import { PreviewToggle } from "./preview";
import { ShareButton } from "./share";
import { PublishButton } from "./publish";
import { SyncStatus } from "./sync-status";
import { Menu } from "./menu";
import {
  BreakpointsSelectorContainer,
  BreakpointsPopover,
} from "../breakpoints";
import { ViewMode } from "./view-mode";
import { CopyIcon } from "@webstudio-is/icons";

const topbarContainerStyle = css({
  position: "fixed",
  minWidth: "fit-content",
  justifyContent: "space-between",
  width: theme.spacing[30],
  transform: "translateX(-50%)",
  left: "50%",
  top: theme.spacing[5],
  display: "flex",
  /*TODO: (#Webtir) #paletteUpdates backgroundTopbar color is not used anymore*/
  /*background: theme.colors.backgroundTopbar,*/
  background: theme.colors.panel,
  height: theme.spacing[15],
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
  paddingInline: theme.spacing[3],
  color: "inherit",
  borderRadius: theme.borderRadius[7],
});

type TopbarProps = {
  gridArea: string;
  project: Project;
  publish: Publish;
};

export const Topbar = ({ gridArea, project, publish }: TopbarProps) => {
  const page = useStore(selectedPageStore);

  return (
    <nav
      className={topbarContainerStyle({
        css: { gridArea, gap: theme.spacing[5] },
      })}
    >
      <Flex>
        <Flex grow={false} shrink={false}>
          <Menu publish={publish} />
        </Flex>
        <Flex
          css={{
            px: theme.spacing[9],
            // TODO: (#Webtir) Add #F0F0F0 to the color palette
            backgroundColor: "#F0F0F0",
            margin: theme.spacing[3],
            padding: theme.spacing[3],
            borderRadius: theme.borderRadius[3],
          }}
          align="center"
        >
          <Flex
            css={{
              backgroundColor: theme.colors.panel,
              padding: theme.spacing[3],
              borderRadius: theme.borderRadius[3],
              gap: theme.spacing[3],
            }}
          >
            <Text variant="labelsTitleCase" color="main" truncate>
              {page?.name ?? ""}
            </Text>
            <CopyIcon color="black" />
          </Flex>
          <BreakpointsPopover />
        </Flex>
      </Flex>
      <Flex align="center" justify="center">
        <BreakpointsSelectorContainer />
      </Flex>
      <Flex align="center" justify="end">
        <Toolbar>
          <ToolbarToggleGroup
            type="single"
            css={{
              justifyContent: "flex-end",
              gap: theme.spacing[5],
              paddingRight: theme.spacing[2],
            }}
          >
            <ViewMode />
            <SyncStatus />
            <PreviewToggle />
            <ShareButton projectId={project.id} />
            <PublishButton projectId={project.id} />
          </ToolbarToggleGroup>
        </Toolbar>
      </Flex>
    </nav>
  );
};

const topbarEmptySpaceStyle = css({
  display: "flex",
  height: theme.spacing[19],
  backgroundColor: theme.colors.backgroundCanvas,
});

type TopbarEmptySpaceProps = {
  gridArea: TopbarProps["gridArea"];
};

// This component is used to preserve space for the Topbar. Without it, canvas will collide with the Topbar
export const TopbarEmptySpace = ({ gridArea }: TopbarEmptySpaceProps) => {
  return <span className={topbarEmptySpaceStyle({ css: { gridArea } })} />;
};
