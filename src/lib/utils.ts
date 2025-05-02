import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getAvatarSrc(avatarId?: string) {
  if (!avatarId) return '/avatar1.png';
  
  const avatars: Record<string, string> = {
    av1: '/av1.png',
    av2: '/av2.png',
  };

  return avatars[avatarId] || '/avatar1.png';
}