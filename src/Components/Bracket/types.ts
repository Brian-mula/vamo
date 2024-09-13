export type TableGroups = {
  a: string[],
  b: string[],
  c: string[],
  d: string[],
  e: string[],
  f: string[],
}; 


export type BracketTournamentBracketValues = {
  b1p1: string | null,
  b1p2: string | null,
  b2p1: string | null,
  b2p2: string | null,
  b3p1: string | null,
  b3p2: string | null,
  b4p1: string | null,
  b4p2: string | null,
  b5p1: string | null,
  b5p2: string | null,
  b6p1: string | null,
  b6p2: string | null,
  b7p1: string | null,
  b7p2: string | null,
  b8p1: string | null,
  b8p2: string | null,
  c1p1: string | null,
  c1p2: string | null,
  c2p1: string | null,
  c2p2: string | null,
  c3p1: string | null,
  c3p2: string | null,
  c4p1: string | null,
  c4p2: string | null,
  d1p1: string | null,
  d1p2: string | null,
  d2p1: string | null,
  d2p2: string | null,
  e1p1: string | null,
  e1p2: string | null,
  f1p1: string | null,
};


export type BracketPosition = {
  positionId: keyof BracketTournamentBracketValues,
  placeholder?: string,
};


export type BracketTournamentBracketStructure = {
  id: string,
  type: string,
  childs: {
    id: string,
    type: string,
    childs: {
      position1: BracketPosition,
      position2: BracketPosition,
    }[],
  }[],
}[];
