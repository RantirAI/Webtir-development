import { ChevronDownIcon, WebtirIcon } from "@webstudio-is/icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  Flex,
  Avatar,
  css,
  rawTheme,
  theme,
  Button,
} from "@webstudio-is/design-system";
import { useNavigate } from "@remix-run/react";
import { logoutPath } from "~/shared/router-utils";
import type { User } from "~/shared/db/user.server";

const containerStyle = css({
  px: theme.spacing[13],
  bc: theme.colors.backgroundPanel,
  minWidth: "fit-content",
  justifyContent: "space-between",
  top: theme.spacing[5],
  display: "flex",
  /*TODO: (#Webtir) #paletteUpdates backgroundTopbar color is not used anymore*/
  /*background: theme.colors.backgroundTopbar,*/
  background: theme.colors.panel,
  height: theme.spacing[15],
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
  margin: theme.spacing[5],
  paddingInline: theme.spacing[7],
  color: "inherit",
  borderRadius: theme.borderRadius[7],
});

const getAvatarLetter = (title?: string) => {
  return (title || "X").charAt(0).toLocaleUpperCase();
};

const Menu = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const title = user?.username ?? user?.email ?? undefined;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button color="ghost" aria-label="Menu Button" css={{ height: "100%" }}>
          <Flex gap="1" align="center">
            <Avatar
              src={user?.image || undefined}
              fallback={getAvatarLetter(title)}
              alt={title || "User Avatar"}
            />
            <ChevronDownIcon
              width={15}
              height={15}
              color={rawTheme.colors.foregroundMain}
            />
          </Flex>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => navigate(logoutPath())}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Header = ({ user }: { user: User }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="between"
      className={containerStyle()}
    >
      <WebtirIcon width="22" height="22" />
      <Flex gap="1" align="center">
        <Menu user={user} />
      </Flex>
    </Flex>
  );
};
