export async function translateWord(word, from = "en", to = "ru") {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    word
  )}&langpair=${from}|${to}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Translation request failed");
  }

  const data = await response.json();

  return data.responseData.translatedText;
}