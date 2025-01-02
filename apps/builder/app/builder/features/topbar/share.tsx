import {
  Button,
  FloatingPanelPopover,
  FloatingPanelPopoverContent,
  FloatingPanelPopoverTitle,
  FloatingPanelPopoverTrigger,
  FloatingPanelAnchor,
  theme,
  Tooltip,
  Text,
  Flex,
} from "@webstudio-is/design-system";
import type { Project } from "@webstudio-is/prisma-client";
import { ShareProjectContainer } from "~/shared/share-project";
import { useAuthPermit } from "~/shared/nano-states";
import { useIsShareDialogOpen } from "~/builder/shared/nano-states";
import { ChevronDownIcon } from "@webstudio-is/icons";

export const ShareButton = ({ projectId }: { projectId: Project["id"] }) => {
  const [isShareOpen, setIsShareOpen] = useIsShareDialogOpen();
  const [authPermit] = useAuthPermit();

  const isShareDisabled = authPermit !== "own";
  const tooltipContent = isShareDisabled
    ? "Only owner can share projects"
    : undefined;

  return (
    <FloatingPanelPopover
      modal
      open={isShareOpen}
      onOpenChange={setIsShareOpen}
    >
      <FloatingPanelAnchor>
        <Tooltip side="bottom" content={tooltipContent}>
          <FloatingPanelPopoverTrigger asChild>
            <Button disabled={isShareDisabled} color="transparent">
              <Flex gap="1">
                <Text variant="regularBold" align="center">
                  Share
                </Text>
                <ChevronDownIcon />
              </Flex>
            </Button>
          </FloatingPanelPopoverTrigger>
        </Tooltip>
      </FloatingPanelAnchor>

      <FloatingPanelPopoverContent
        css={{
          zIndex: theme.zIndices[1],
          marginTop: theme.spacing[6],
        }}
      >
        <ShareProjectContainer projectId={projectId} />
        <FloatingPanelPopoverTitle>Share</FloatingPanelPopoverTitle>
      </FloatingPanelPopoverContent>
    </FloatingPanelPopover>
  );
};
