import { DropResult } from 'react-beautiful-dnd';
import create from 'zustand';
import { DEFAULT_DATA } from './constants';
import { BracketTournamentBracketValues, TableGroups } from './types';
import { setTournamentBracketWinnerStore, setTournamentTableOnDrop, setDeciderOrder, parseResponse, } from './utils';


export type BracketStoreData = {
  isEmpty: boolean,
  tables: TableGroups,
  deciderOrder: (keyof TableGroups)[],
  tournamentBracket: BracketTournamentBracketValues,
};


/**
 * Types
 */
export type BracketStore = {
  fetchState: {
    loading: boolean,
    error: boolean,
  },
  data: BracketStoreData,
  resetStore: () => void,
  fetchCompleted: (data: any) => void,
  fetchError: () => void,
  chooseTournamentBracketWinner: (position: keyof BracketTournamentBracketValues, teamId: string | null) => void,
  dropWithinTable: (result: DropResult) => void, 
  dropDecider: (result: DropResult) => void,
};


/**
 * Store
 */
export const useBracketStore = create<BracketStore>((set) => ({
  // state
  fetchState: {
    loading: true,
    error: false,
  },
  data: DEFAULT_DATA,

  // methods
  resetStore: () => set({
    fetchState: {
      loading: true,
      error: false,
    },
  }),
  fetchCompleted: (data) => set((state) => ({
    fetchState: {
      loading: false,
      error: false,
    },
    data: parseResponse(data),
  })),
  fetchError: () => set((state) => ({
    fetchState: {
      loading: false,
      error: true,
    },
  })),
  chooseTournamentBracketWinner: (position, teamId) => set((state) => {
    try {
      return {
        data: {
          ...state.data,
          tournamentBracket: setTournamentBracketWinnerStore(
            position,
            teamId,
            state.data.tournamentBracket,
            true,
          ),
        },
      };
    } catch  {
      return {
        data: state.data,
      }
    }
  }),
  dropWithinTable: (result) => set((state) => {
    try {
      return ({
        data: setTournamentTableOnDrop(
          result,
          state.data,
        ),
      });
    } catch {
      return {
        data: state.data,
      }
    }
  }),
  dropDecider: (result) => set((state) => {
    try {
      return ({
        data: setDeciderOrder(
          result,
          state.data,
        ),
      });
    } catch  {
      return {
        data: state.data,
      }
    }
  }),
}));
