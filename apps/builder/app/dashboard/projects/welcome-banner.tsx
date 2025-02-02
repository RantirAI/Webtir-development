import { Button, css, Flex, Text, theme } from "@webstudio-is/design-system";
import type { ComponentProps } from "react";
// eslint-disable-next-line import/no-internal-modules
import PixelGradientBackgroundImage from "../assets/pixel-gradient-background.png";
// eslint-disable-next-line import/no-internal-modules
import { WelcomeBannerBrandsIcon } from "@webstudio-is/icons";
import { CreateProject } from "~/dashboard/projects/project-dialogs";

const welcomeBannerStyle = css({
  background: theme.colors.brandBackgroundDashboard,
  borderRadius: theme.borderRadius[6],
  border: `1px solid ${theme.colors.borderNeutral}`,
  color: theme.colors.foregroundMain,
  minWidth: "min-content",
  // TODO: (#Webtir) Remove "brandElevationBig" from palette. Color not used anymore
  //boxShadow: theme.shadows.brandElevationBig,
  flexGrow: 1,
  gap: theme.spacing[19],
  width: "769px",
  height: "219px",
  backgroundImage: `url(${PixelGradientBackgroundImage})`,
  overflow: "hidden",
});

export const WelcomeBanner = (props: ComponentProps<typeof Flex>) => (
  <Flex className={welcomeBannerStyle()} {...props}>
    <Flex
      direction="column"
      justify="center"
      css={{
        width: "50%",
        gap: theme.spacing[6],
        marginLeft: theme.spacing[11],
      }}
    >
      <Text variant="small" as="h1" css={{ color: "$blueA10" }}>
        GET STARTED
      </Text>
      <Flex
        direction="column"
        justify="center"
        css={{
          gap: theme.spacing[10],
        }}
      >
        <Text variant="welcomeBannerTitle" as="h1">
          Welcome Back
        </Text>
        <Text
          variant="welcomeBannerDescription"
          as="h1"
          css={{ marginRight: theme.spacing[19] }}
        >
          Webtir is the easiest way to build unlimted projects and own them. We
          are on a new mission to experience a new level of No Code & AI.
        </Text>
        <Flex css={{ gap: theme.spacing[5] }}>
          <CreateProject />
          <Button disabled={false} color="ghost">
            <Flex gap="1">
              <Text variant="labelsTitleCase" align="center">
                Get Integrations & Data
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
    <Flex align="center">
      <WelcomeBannerBrandsIcon size={365} height={206} />
    </Flex>
  </Flex>
);
