import {
  PanelTabs,
  PanelTabsList,
  PanelTabsTrigger,
  Text,
} from "@webstudio-is/design-system";
import { useIsPreviewMode } from "~/shared/nano-states";
import { FloatingPanelProvider } from "~/builder/shared/floating-panel";
import { useEffect, useRef, useState } from "react";

declare module "~/shared/pubsub" {
  export interface PubsubMap {
    previewMode: boolean;
  }
}

export const PreviewToggle = () => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const availableTabs = ["design", "preview"].filter((tab) => tab);
  const [isPreviewMode, setIsPreviewMode] = useIsPreviewMode();
  const [tab, setTab] = useState("preview");

  useEffect(() => {
    setTab(isPreviewMode ? "preview" : "design");
  }, [isPreviewMode]);

  const handleChangePreviewMode = (tab: string) => {
    setIsPreviewMode(tab === "preview");
  };

  return (
    <FloatingPanelProvider container={tabsRef}>
      <PanelTabs
        ref={tabsRef}
        value={availableTabs.includes(tab) ? tab : availableTabs[0]}
        onValueChange={handleChangePreviewMode}
        asChild
      >
        <PanelTabsList css={{ flexDirection: "row" }}>
          <PanelTabsTrigger value="design">
            <Text variant="labelsTitleCase" color="main" truncate>
              Design
            </Text>
          </PanelTabsTrigger>
          <PanelTabsTrigger value="preview">
            <Text variant="labelsTitleCase" color="main" truncate>
              Preview
            </Text>
          </PanelTabsTrigger>
        </PanelTabsList>
      </PanelTabs>
    </FloatingPanelProvider>
  );
};
