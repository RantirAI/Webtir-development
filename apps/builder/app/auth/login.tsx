import {
  AccessibleIcon,
  Box,
  css,
  Flex,
  globalCss,
  Text,
  theme,
} from "@webstudio-is/design-system";
import { GithubIcon, GoogleIcon, WebtirIcon } from "@webstudio-is/icons";
import { LoginButton } from "./login-button";
import { Form } from "@remix-run/react";
import { authPath } from "~/shared/router-utils";
import { SecretLogin } from "./secret-login";

const globalStyles = globalCss({
  body: {
    margin: 0,
    background: theme.colors.backgroundPanel,
  },
});

const layoutStyle = css({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  "@tablet": {
    flexDirection: "row",
  },
});

type LoginProps = {
  errorMessage?: string;
  isGithubEnabled?: boolean;
  isGoogleEnabled?: boolean;
  isSecretLoginEnabled?: boolean;
};

export const Login = ({
  errorMessage,
  isGithubEnabled,
  isGoogleEnabled,
  isSecretLoginEnabled,
}: LoginProps) => {
  globalStyles();
  return (
    <Box className={layoutStyle()}>
      <Flex
        align="center"
        direction="column"
        grow
        as="main"
        gap={6}
        css={{
          "@tablet": {
            justifyContent: "center",
          },
        }}
      >
        <Flex
          align="center"
          css={{
            justifyContent: "center",
            gap: theme.spacing[3],
          }}
        >
          <a
            href="https://webtir.com/"
            aria-label="Go to webtir.com"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <AccessibleIcon label="Logo">
              <WebtirIcon
                width="27"
                height="22"
                color={theme.colors.foregroundMain}
              />
            </AccessibleIcon>
          </a>
          <Text variant="brandMediumTitle" color="main" as="h1">
            Webtir
          </Text>
        </Flex>
        <Flex direction="column" gap="4">
          <Flex gap="3" direction="column">
            <Form action={authPath({ provider: "google" })} method="post">
              <LoginButton
                disabled={isGoogleEnabled === false}
                icon={<GoogleIcon size={18} />}
              >
                <Text>Sign in with Google</Text>
              </LoginButton>
            </Form>
            <Form action={authPath({ provider: "github" })} method="post">
              <LoginButton
                disabled={isGithubEnabled === false}
                icon={<GithubIcon size={18} />}
              >
                <Text>Sign in with GitHub</Text>
              </LoginButton>
            </Form>
            {isSecretLoginEnabled && <SecretLogin />}
          </Flex>
          {errorMessage ? (
            <Text align="center" color="destructive">
              {errorMessage}
            </Text>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
};
