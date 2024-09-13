import { BracketStoreData } from "./BracketStore";
import { BracketTournamentBracketStructure, TableGroups, BracketTournamentBracketValues, } from "./types";


export const DEFAULT_DATA: BracketStoreData = {
  isEmpty: false,
  tables: {
    a: [ 'turkey', 'italy', 'wales', 'switzerland', ],
    b: [ 'denmark', 'finland', 'belgium', 'russia', ],
    c: [ 'netherlands', 'ukraine', 'austria', 'republic-of-macedonia', ],
    d: [ 'england', 'croatia', 'scotland', 'czech-republic', ],
    e: [ 'spain', 'sweden', 'poland', 'slovakia', ],
    f: [ 'hungary', 'portugal', 'france', 'germany', ],
  },
  deciderOrder: [ 'a', 'b', 'c', 'd', 'e', 'f', ],
  tournamentBracket: {
    b1p1: 'denmark',
    b1p2: 'wales',
    b2p1: 'turkey',
    b2p2: 'ukraine',
    b3p1: 'hungary',
    b3p2: 'austria',
    b4p1: 'croatia',
    b4p2: 'sweden',
    b5p1: 'spain',
    b5p2: 'belgium',
    b6p1: 'england',
    b6p2: 'portugal',
    b7p1: 'netherlands',
    b7p2: 'scotland',
    b8p1: 'italy',
    b8p2: 'finland',
    c1p1: null,
    c1p2: null,
    c2p1: null,
    c2p2: null,
    c3p1: null,
    c3p2: null,
    c4p1: null,
    c4p2: null,
    d1p1: null,
    d1p2: null,
    d2p1: null,
    d2p2: null,
    e1p1: null,
    e1p2: null,
    f1p1: null,
  },
};



export type TableGroupsRules = { [key in keyof TableGroups]: (keyof BracketTournamentBracketValues)[] }

export type TableNames = {
  id: keyof TableGroups,
  title?: string,
}[]

export const TABLE_NAMES: TableNames = [
  {
    id: 'a',
    title: 'Group A',
  },
  {
    id: 'b',
    title: 'Group B',
  },
  {
    id: 'c',
    title: 'Group C',
  },
  {
    id: 'd',
    title: 'Group D',
  },
  {
    id: 'e',
    title: 'Group E',
  },
  {
    id: 'f',
    title: 'Group F',
  },
];


type ThirdPlacesRules = {
  [key in string]: (result: { [key in string]: string }) => string[];
};


export const TOURNAMENT_RULES = {
  // table
  tables: {
    a: [ 'b2p1', 'b8p1', ],
    b: [ 'b1p1', 'b8p2', ],
    c: [ 'b7p1', 'b2p2', ],
    d: [ 'b6p1', 'b4p1', ],
    e: [ 'b5p1', 'b4p2', ],
    f: [ 'b3p1', 'b6p2', ],
  } as TableGroupsRules,


  thirdPlacesRules: {
    '111100': ({a, b, c, d, e, f}) => [a, d, b, c],
    '111010': ({a, b, c, d, e, f}) => [a, e, b, c],
    '111001': ({a, b, c, d, e, f}) => [a, f, b, c],
    '110110': ({a, b, c, d, e, f}) => [d, e, a, b],
    '110101': ({a, b, c, d, e, f}) => [d, f, a, b],
    '110011': ({a, b, c, d, e, f}) => [e, f, b, a],
    '101110': ({a, b, c, d, e, f}) => [e, d, c, a],
    '101101': ({a, b, c, d, e, f}) => [f, d, c, a],
    '101011': ({a, b, c, d, e, f}) => [e, f, c, a],
    '100111': ({a, b, c, d, e, f}) => [e, f, d, a],
    '11110': ({a, b, c, d, e, f}) => [e, d, b, c],
    '11101': ({a, b, c, d, e, f}) => [f, d, c, b],
    '11011': ({a, b, c, d, e, f}) => [f, e, c, b],
    '10111': ({a, b, c, d, e, f}) => [f, e, d, b],
    '1111': ({a, b, c, d, e, f}) => [f, e, d, c],
  } as ThirdPlacesRules,

  // decider
  decider: {
    
  },

  // brackets
  bracket: {
    b1p1: 'c1p1',
    b1p2: 'c1p1',
    b2p1: 'c1p2',
    b2p2: 'c1p2',
    b3p1: 'c2p1',
    b3p2: 'c2p1',
    b4p1: 'c2p2',
    b4p2: 'c2p2',
    b5p1: 'c3p1',
    b5p2: 'c3p1',
    b6p1: 'c3p2',
    b6p2: 'c3p2',
    b7p1: 'c4p1',
    b7p2: 'c4p1',
    b8p1: 'c4p2',
    b8p2: 'c4p2',

    c1p1: 'd1p1',
    c1p2: 'd1p1',
    c2p1: 'd1p2',
    c2p2: 'd1p2',
    c3p1: 'd2p1',
    c3p2: 'd2p1',
    c4p1: 'd2p2',
    c4p2: 'd2p2',

    d1p1: 'e1p1',
    d1p2: 'e1p1',
    d2p1: 'e1p2',
    d2p2: 'e1p2',

    e1p1: 'f1p1',
    e1p2: 'f1p1',

    f1p1: null,
  } as { [key in keyof BracketTournamentBracketValues]: keyof BracketTournamentBracketValues | null },
};


export const TOURNAMENT_TABLES_STRUCTURE = [ 'a', 'b', 'c', 'd', 'e', 'f', ];


export const TOURNAMENT_BRACKET_STRUCTURE: BracketTournamentBracketStructure = [
  {
    id: 'col1',
    type: 'column',
    childs: [
      {
        id: 'cont1',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              placeholder: 'Winner B',
              positionId: 'b1p1',
            },
            position2: {
              placeholder: '3rd Place A/D/E/F',
              positionId: 'b1p2',
            },
          },
          {
            position1: {
              placeholder: 'Winner A',
              positionId: 'b2p1',
            },
            position2: {
              placeholder: 'Runner-up C',
              positionId: 'b2p2',
            },
          },
        ],
      },
      {
        id: 'cont2',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              placeholder: 'Winner F',
              positionId: 'b3p1',
            },
            position2: {
              placeholder: '3rd Place A/B/C',
              positionId: 'b3p2',
            },
          },
          {
            position1: {
              placeholder: 'Runner-up D',
              positionId: 'b4p1',
            },
            position2: {
              placeholder: 'Runner-up E',
              positionId: 'b4p2',
            },
          },
        ],
      },
      {
        id: 'cont3',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              placeholder: 'Winner E',
              positionId: 'b5p1',
            },
            position2: {
              placeholder: '3rd Place A/B/C/D',
              positionId: 'b5p2',
            },
          },
          {
            position1: {
              placeholder: 'Winner D',
              positionId: 'b6p1',
            },
            position2: {
              placeholder: 'Runner-up F',
              positionId: 'b6p2',
            },
          },
        ],
      },
      {
        id: 'cont4',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              placeholder: 'Winner C',
              positionId: 'b7p1',
            },
            position2: {
              placeholder: '3rd Place D/E/F',
              positionId: 'b7p2',
            },
          },
          {
            position1: {
              placeholder: 'Runner-up A',
              positionId: 'b8p1',
            },
            position2: {
              placeholder: 'Runner-up B',
              positionId: 'b8p2',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'col2',
    type: 'column',
    childs: [
      {
        id: 'cont1',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              positionId: 'c1p1',
            },
            position2: {
              positionId: 'c1p2',
            },
          },
          {
            position1: {
              positionId: 'c2p1',
            },
            position2: {
              positionId: 'c2p2',
            },
          },
        ],
      },
      {
        id: 'cont2',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              positionId: 'c3p1',
            },
            position2: {
              positionId: 'c3p2',
            },
          },
          {
            position1: {
              positionId: 'c4p1',
            },
            position2: {
              positionId: 'c4p2',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'col3',
    type: 'column',
    childs: [
      {
        id: 'cont1',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              positionId: 'd1p1',
            },
            position2: {
              positionId: 'd1p2',
            },
          },
          {
            position1: {
              positionId: 'd2p1',
            },
            position2: {
              positionId: 'd2p2',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'col4',
    type: 'column',
    childs: [
      {
        id: 'cont1',
        type: 'nodesContainer',
        childs: [
          {
            position1: {
              positionId: 'e1p1',
            },
            position2: {
              positionId: 'e1p2',
            },
          },
        ],
      },
    ],
  },
];



