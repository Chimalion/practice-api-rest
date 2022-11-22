interface Origin {
  name: string;
  url: string;
}

interface BestSentences {
  id: number;
  sentence: string;
}

export interface CharacterEntity {
  id: number;
  name: string;
  bestSentences: BestSentences;
}
