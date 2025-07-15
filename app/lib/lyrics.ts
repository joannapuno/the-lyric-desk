export const fetchLyrics = async (artist: string, title: string): Promise<string> => {
  const res = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
  if (!res.ok) {
    throw new Error("Lyrics not found");
  }
  const data = await res.json();
  return data.lyrics
  .trim()
  .replace(/\r\n/g, "\n")
  .replace(/\n{3,}/g, "\n");
};
