"use client";

import { useUser } from "../hooks/use-user";
import AvatarWrapper from "./avatar-wrapper";

export default function UserAvatarWrapper({
  size,
}: {
  size?: "sm" | "lg" | "default";
}) {
  const { user } = useUser();

  if (!user)
    return <AvatarWrapper name="Guest" src="https://github.com/shadcn.png" />;

  return <AvatarWrapper name={user.username} size={size} />;
  // TODO: add image and roles
}
