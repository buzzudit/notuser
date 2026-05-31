"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Person } from "@/data/people";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type PersonAvatarProps = {
  person: Pick<Person, "name" | "image">;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-12 w-12 text-sm",
  md: "h-16 w-16 text-lg",
  lg: "h-24 w-24 text-2xl",
};

export function getPersonInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function PersonAvatar({ person, size = "md" }: PersonAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageSrc = useMemo(
    () => (person.image && !hasImageError ? resolveMirroredMediaSrc(person.image) : null),
    [hasImageError, person.image],
  );
  const initials = getPersonInitials(person.name);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-border bg-gradient-to-br from-primary/20 via-secondary to-card ${sizeClasses[size]}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={person.name}
          fill
          className="object-cover"
          sizes={size === "lg" ? "96px" : size === "md" ? "64px" : "48px"}
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-mono font-semibold text-primary">
          {initials}
        </div>
      )}
    </div>
  );
}
