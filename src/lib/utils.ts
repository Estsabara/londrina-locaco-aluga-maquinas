
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createWhatsAppLink(phoneNumber: string, message: string): string {
  // Format: phone number without "+" at the beginning
  const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber.substring(1) : phoneNumber;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}
