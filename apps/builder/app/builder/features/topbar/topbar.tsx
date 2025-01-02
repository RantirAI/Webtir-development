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
import { PreviewButton } from "./preview";
import { ShareButton } from "./share";
import { PublishButton } from "./publish";
import { SyncStatus } from "./sync-status";
import { Menu } from "./menu";
import {
  BreakpointsSelectorContainer,
  BreakpointsPopover,
} from "../breakpoints";
import { ViewMode } from "./view-mode";
import { CopyNewIcon } from "@webstudio-is/icons";

const topbarContainerStyle = css({
  position: "fixed",
  minWidth: "fit-content",
  justifyContent: "space-between",
  /*TODO: (#Webtir) Next two lines are temporary solution until side navbars are not updated*/
  width: "calc(100% - 239px - 239px - 41px - 24px)",
  marginLeft: 20.5,
  zIndex: "999",
  transform: "translateX(-50%)",
  left: "50%",
  top: theme.spacing[5],
  display: "flex",
  /*TODO: (#Webtir) #paletteUpdates backgroundTopbar color is not used anymore*/
  /*background: theme.colors.backgroundTopbar,*/
  background: theme.colors.panel,
  height: theme.spacing[16],
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
    <nav className={topbarContainerStyle({ css: { gridArea } })}>
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
            <CopyNewIcon color="transparent" />
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
              width: theme.spacing[30],
              paddingRight: theme.spacing[2],
            }}
          >
            <ViewMode />
            <SyncStatus />
            <PreviewButton />
            <ShareButton projectId={project.id} />
            <PublishButton projectId={project.id} />
          </ToolbarToggleGroup>
        </Toolbar>
      </Flex>
    </nav>
  );
};
