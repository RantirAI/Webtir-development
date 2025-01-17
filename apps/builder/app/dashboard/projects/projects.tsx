import { Flex, Text } from "@webstudio-is/design-system";
import { EmptyState } from "./empty-state";
import { Panel } from "./panel";
import type { DashboardProject } from "@webstudio-is/dashboard";
import { ProjectCard } from "./project-card";
import { WelcomeBanner } from "~/dashboard/projects/welcome-banner";

type ProjectsProps = {
  projects: Array<DashboardProject>;
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Panel>
      <Flex direction="column" gap="3">
        <WelcomeBanner />
        <Flex justify="between">
          <Text variant="brandSectionTitle" as="h2">
            Projects
          </Text>
        </Flex>
        {projects.length === 0 && <EmptyState />}
        <Flex gap="6" wrap="wrap" justify="between">
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.id} />;
          })}
        </Flex>
      </Flex>
    </Panel>
  );
};
