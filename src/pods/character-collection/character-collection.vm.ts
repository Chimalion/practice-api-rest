interface Origin {
  name: string;
  url: string;
}

interface BestSentences {
  id: string;
  sentence: string;
}
export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: Origin;
  image: string;
  bestSentences: BestSentences[];
}
