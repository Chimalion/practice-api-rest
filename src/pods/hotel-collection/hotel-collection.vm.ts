interface Origin {
  name: string;
  url: string;
}

type Locationa = Origin;

interface BestSentences {
  id: number;
  sentence: string;
}

export interface CharacterEntityVm {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Locationa;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences: BestSentences;
}
