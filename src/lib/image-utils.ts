/**
 * Processes an image URL to ensure it has the correct format
 * 
 * @param url The original image URL
 * @returns A properly formatted image URL
 */
export function processImageUrl(url: string): string {
  if (!url) return "/placeholder.svg";
  
  // If it's already a full URL or starts with / (local path), use it directly
  if (url.startsWith("http") || url.startsWith("/")) {
    return url;
  }
  
  // Otherwise, treat as a relative path
  return `/${url}`;
}
