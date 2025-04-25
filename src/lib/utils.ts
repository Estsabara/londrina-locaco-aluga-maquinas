
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createWhatsAppLink(phoneNumber: string, message: string): string {
  // Use the exact link format specified by the user
  return `https://wa.me/554333723860?text=${encodeURIComponent(message)}`;
}
