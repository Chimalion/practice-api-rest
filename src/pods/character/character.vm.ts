interface BestSentences {
  id: string;
  sentence: string;
}

export interface CharacterEntity {
  id: number;
  name: string;
  bestSentences: BestSentences[];
}
