const firstWord = (text) => {
  const trimmedText = text.replace(/\n/g, "");

  const sentences = trimmedText.match(/[^.]*[.]/g);

  const firstWords = sentences.map((element) => {
    const trimmedSentence = element.trim();
    const firstWord = trimmedSentence.split(" ");
    return firstWord[0];
  });
  return firstWords;
};

const mainText = `After a long day of hiking in the mountains, 
  Sarah decided to set up camp near a sparkling lake.
  As the sun began to set, she cooked a warm meal over the campfire while 
  enjoying the peaceful sounds of nature. Later that evening, while 
  gazing at the stars reflected in the calm water, 
  she felt a deep sense of gratitude for the beauty around her.`;

console.log(firstWord(mainText));
