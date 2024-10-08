import { StatsData } from "../types/types";

export const wordDefTest = {
  word: "chant",
  phonetic: "/tʃænt/",
  phonetics: [
    {
      text: "/tʃænt/",
      audio: "",
    },
    {
      text: "/tʃænt/",
      audio:
        "https://api.dictionaryapi.dev/media/pronunciations/en/chant-us.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=2650739",
      license: {
        name: "BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
    },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition:
            "Type of singing done generally without instruments and harmony.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A short and simple melody, divided into two parts by double bars, to which unmetrical psalms, etc., are sung or recited. It is the most ancient form of choral music.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "Twang; manner of speaking; a canting tone.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "A repetitive song, typically an incantation or part of a ritual.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [],
      antonyms: [],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        {
          definition:
            "To sing, especially without instruments, and as applied to monophonic and pre-modern music.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To sing or intone sacred text.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "To utter or repeat in a strongly rhythmical manner, especially as a group.",
          synonyms: [],
          antonyms: [],
          example: "The football fans chanted insults at the referee.",
        },
        {
          definition: "To sell horses fraudulently, exaggerating their merits.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [],
      antonyms: [],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: ["https://en.wiktionary.org/wiki/chant"],
};

export const wordtest = ["chant"];

export const dummyData: StatsData[] = [
  {
    guessed: true,
    guessedAt: 3,
  },
  {
    guessed: false,
  },
  {
    guessed: true,
    guessedAt: 5,
  },
  {
    guessed: true,
    guessedAt: 1,
  },
  {
    guessed: false,
  },
  {
    guessed: true,
    guessedAt: 3,
  },
  {
    guessed: true,
    guessedAt: 3,
  },
  {
    guessed: true,
    guessedAt: 2,
  },
  {
    guessed: false,
  },
  {
    guessed: false,
  },
  {
    guessed: true,
    guessedAt: 5,
  },
  {
    guessed: true,
    guessedAt: 5,
  },
  {
    guessed: true,
    guessedAt: 5,
  },
  {
    guessed: true,
    guessedAt: 5,
  },
];

export const dummyResultsData: StatsData = {
  guessed: true,
  guessedAt: 3,
};
