export function getImageUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  const cleanPath = path.replace(/^\/+/, "");
  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
    return cleanPath;
  }
  if (cleanPath.startsWith("storage/")) {
    return `/${cleanPath}`;
  }
  return `/storage/${cleanPath}`;
}

export function extractYoutubeId(url: string | null | undefined): string | null {
  if (!url) return null;
  const value = url.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*(?:&|\?)v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export function getEmbedUrl(url: string | null | undefined): string | null {
  const id = extractYoutubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}
