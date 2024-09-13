import { DropResult } from 'react-beautiful-dnd';
import { BracketTournamentBracketValues, TableGroups, } from "./types";
import { DEFAULT_DATA, TOURNAMENT_RULES, } from './constants';
import { BracketStoreData } from './BracketStore';


export const getNextTournamentBracketPosition = (position: keyof BracketTournamentBracketValues): keyof BracketTournamentBracketValues | null => {
  const nextPosition = TOURNAMENT_RULES.bracket[position];
  return nextPosition;
}

const getTournamentBracketPositionTeamId = (
  position: keyof BracketTournamentBracketValues,
  bracketTournament: BracketTournamentBracketValues,
): string | null => {
  const nextPositionValue = bracketTournament[position];
  return nextPositionValue;
}


export const setTournamentBracketWinnerStore = (
  position: keyof BracketTournamentBracketValues | null,
  teamId: string | null,
  bracketTournament: BracketTournamentBracketValues,
  isWinner: boolean,
): BracketTournamentBracketValues => {
  if (!position) return bracketTournament;

  const newBracketTournament = {
    ...bracketTournament,
    [position]: teamId,
  };

  const nextPosition = getNextTournamentBracketPosition(position);
  if (!nextPosition) return newBracketTournament;

  const originalTeamId = getTournamentBracketPositionTeamId(position, bracketTournament);
  const nextTeamId = getTournamentBracketPositionTeamId(nextPosition, bracketTournament); 

  if (isWinner || nextTeamId === originalTeamId) {
    return setTournamentBracketWinnerStore(
      nextPosition,
      (isWinner || teamId === nextTeamId) ? teamId : null,
      newBracketTournament,
      false,
    );
  }

  return newBracketTournament;
};


const reorder = (list: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [ removed, ] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


export const setTournamentTableOnDrop = (result: DropResult, data: BracketStoreData): BracketStoreData => {
  const { source, destination, } = result;

  if (!destination) {
    return data;
  }

  
  const tableId = destination.droppableId as keyof TableGroups;
  const table = data.tables[tableId];
  const sourceIndex = source.index;
  const destinationIndex = destination.index;

  const newTable = reorder(
    table,
    sourceIndex,
    destinationIndex,
  );


  const tournamentBracketWithFirstPlace = setTournamentBracketWinnerStore(
    TOURNAMENT_RULES.tables[tableId][0],
    newTable[0],
    data.tournamentBracket,
    false,
  );
  const tournamentBracketWithSecondPlace = setTournamentBracketWinnerStore(
    TOURNAMENT_RULES.tables[tableId][1],
    newTable[1],
    tournamentBracketWithFirstPlace,
    false,
  );


  const ret = {
    ...data,
    tables: {
      ...data.tables,
      [tableId]: newTable,
    },
    tournamentBracket: tournamentBracketWithSecondPlace,
  };


  return setThirdPlaces(ret); 
};

export const setDeciderOrder = (result: DropResult, data: BracketStoreData): BracketStoreData => {
  const { source, destination, } = result;

  if (!destination) {
    return data;
  }


  const table = data.deciderOrder;
  const sourceIndex = source.index;
  const destinationIndex = destination.index;

  const newTable = reorder(
    table,
    sourceIndex,
    destinationIndex,
  );

  
  return setThirdPlaces({
    ...data,
    deciderOrder: newTable as (keyof TableGroups)[],
  });
};



const TABLE_NUMBER_VALUES: { [key in keyof TableGroups]: { value: number, name: keyof TableGroups, } } = {
  'a': {
    name: 'a',
    value: 100000,
  },
  'b': {
    name: 'b',
    value: 10000,
  },
  'c': {
    name: 'c',
    value: 1000,
  },
  'd': {
    name: 'd',
    value: 100,
  },
  'e': {
    name: 'e',
    value: 10,
  },
  'f': {
    name: 'f',
    value: 1
  },
};

const getTableNumberValue = (tableId: keyof TableGroups): number => {
  if (Object.prototype.hasOwnProperty.call(TABLE_NUMBER_VALUES, tableId)) {
    return TABLE_NUMBER_VALUES[tableId].value;
  }
  return 0;
};


export const setThirdPlaces = (data: BracketStoreData): BracketStoreData => {
  const results = {
    [data.deciderOrder[0]]: data.tables[data.deciderOrder[0]][2],
    [data.deciderOrder[1]]: data.tables[data.deciderOrder[1]][2],
    [data.deciderOrder[2]]: data.tables[data.deciderOrder[2]][2],
    [data.deciderOrder[3]]: data.tables[data.deciderOrder[3]][2],
    [data.deciderOrder[4]]: data.tables[data.deciderOrder[4]][2],
    [data.deciderOrder[5]]: data.tables[data.deciderOrder[5]][2],
  };

  const thirdPlacesFnNumber = 
    getTableNumberValue(data.deciderOrder[0])
    + getTableNumberValue(data.deciderOrder[1])
    + getTableNumberValue(data.deciderOrder[2])
    + getTableNumberValue(data.deciderOrder[3]);

  const { thirdPlacesRules, } = TOURNAMENT_RULES;

  
  if (Object.prototype.hasOwnProperty.call(thirdPlacesRules, thirdPlacesFnNumber)) {
    const thirdPlaces = thirdPlacesRules[thirdPlacesFnNumber.toString()](results);

    const firstPlaceData = setTournamentBracketWinnerStore(
      'b1p2',
      thirdPlaces[0],
      data.tournamentBracket,
      false,
    );
    const secondPlaceData = setTournamentBracketWinnerStore(
      'b7p2',
      thirdPlaces[1],
      firstPlaceData,
      false,
    );
    const thirdPlaceData = setTournamentBracketWinnerStore(
      'b5p2',
      thirdPlaces[2],
      secondPlaceData,
      false,
    );
    const fourthPlaceData = setTournamentBracketWinnerStore(
      'b3p2',
      thirdPlaces[3],
      thirdPlaceData,
      false,
    );

    return ({
      ...data,
      tournamentBracket: {
        ...fourthPlaceData,
        b1p2: thirdPlaces[0],
        b7p2: thirdPlaces[1],
        b5p2: thirdPlaces[2],
        b3p2: thirdPlaces[3],
      },
    })
  }
  
  return data;
}


export const parseResponse = (data: any): BracketStoreData => {
  try {
    if (!data.deciderOrder || !data.tables ||  !data.tournamentBracket) throw new Error('empty bracket');

    return {
      ...DEFAULT_DATA,
      isEmpty: false,
      deciderOrder: data.deciderOrder,
      tables: data.tables,
      tournamentBracket: data.tournamentBracket
    };
  } catch {
    return {
      ...DEFAULT_DATA,
      isEmpty: true,
    };
  }
};


export const validateBracket = (data: BracketStoreData): boolean => {
  if (!data.tournamentBracket.b1p1) return false;
  if (!data.tournamentBracket.b1p2) return false;
  if (!data.tournamentBracket.b2p1) return false;
  if (!data.tournamentBracket.b2p2) return false;
  if (!data.tournamentBracket.b3p1) return false;
  if (!data.tournamentBracket.b3p2) return false;
  if (!data.tournamentBracket.b4p1) return false;
  if (!data.tournamentBracket.b4p2) return false;
  if (!data.tournamentBracket.b5p1) return false;
  if (!data.tournamentBracket.b5p2) return false;
  if (!data.tournamentBracket.b6p1) return false;
  if (!data.tournamentBracket.b6p2) return false;
  if (!data.tournamentBracket.b7p1) return false;
  if (!data.tournamentBracket.b7p2) return false;
  if (!data.tournamentBracket.b8p1) return false;
  if (!data.tournamentBracket.b8p2) return false;
  if (!data.tournamentBracket.c1p1) return false;
  if (!data.tournamentBracket.c1p2) return false;
  if (!data.tournamentBracket.c2p1) return false;
  if (!data.tournamentBracket.c2p2) return false;
  if (!data.tournamentBracket.c3p1) return false;
  if (!data.tournamentBracket.c3p2) return false;
  if (!data.tournamentBracket.c4p1) return false;
  if (!data.tournamentBracket.c4p2) return false;
  if (!data.tournamentBracket.d1p1) return false;
  if (!data.tournamentBracket.d1p2) return false;
  if (!data.tournamentBracket.d2p1) return false;
  if (!data.tournamentBracket.d2p2) return false;
  if (!data.tournamentBracket.e1p1) return false;
  if (!data.tournamentBracket.e1p2) return false;
  if (!data.tournamentBracket.f1p1) return false;
  
  return true;
}
