import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export interface UserAvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "lg" | "default";
}

const sizeMap = { sm: 64, default: 80, lg: 96 };

export default function AvatarWrapper({
  src,
  name,
  size = "default",
}: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  const imageSize = sizeMap[size];

  if (src) {
    return (
      <Avatar size={size} className="border-background shadow-sm relative">
        <AvatarImage asChild />
        <Image
          src={src}
          alt="User profile image"
          width={imageSize}
          height={imageSize}
          className="aspect-square object-cover"
        />
      </Avatar>
    );
  }

  return (
    <Avatar size={size} className="border-background shadow-sm relative">
      <AvatarFallback className="text-sm font-medium text-primary-foreground bg-primary">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
