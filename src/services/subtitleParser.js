export function parseSubtitles(srtText) {
  const lines = srtText.split("\n");
  const result = [];

  for (const line of lines) {
    if (line.includes("-->")) {
      continue;
    }
    if (/^\d+$/.test(line.trim())) {
        continue;
    }
    if (!line.trim()) {
        continue;
    }

    result.push(line.trim());
  }
  return result;
}