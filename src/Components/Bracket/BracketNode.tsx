import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import clsx from 'clsx';
import { BracketPosition, BracketTournamentBracketValues, } from 'Components/Bracket/types';
import { useCallback } from 'react';
import { BracketStore, useBracketStore, } from './BracketStore';
import Team from './Team';
import { getNextTournamentBracketPosition, } from './utils';


const useStyles = makeStyles((theme: Theme) => createStyles({
  node: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(2),
    width: '100%',
  },
  bracket: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    minWidth: 180,
    '&:before': {
      content: '""',
      borderTop: '2px solid #838383',
      position: 'absolute',
      left: -17,
      top: 'calc(50% - 1px)',
      width: 11,
      height: '100%',
    },
    '&:after': {
      content: '""',
      borderTop: '2px solid #838383',
      position: 'absolute',
      right: -17,
      top: 'calc(50% - 1px)',
      width: 11,
      height: '100%',
    },
    '&>$bracketPlace:first-child': {
      marginBottom: 2,
    },
    '& .bracket-node--winner': {
      background: '#9feed1',
    },
    '& .bracket-node--winner:hover': {
      background: '#7ccbae',
    },
    '& .bracket-node--error': {
      background: '#ee9f9f',
    },
  },
  bracketPlace: {
    height: 36,
  },
  buttonBase: {
    background: '#ececec',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.75, 2),
    '&:hover': {
      background: '#d5d5d5',
    },
  },
  placeholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.75, 2),
    background: '#ececec',
    color: '#707070',
  },
}));


const isError = (
  teamId: string,
  position: BracketPosition,
  isWinner: boolean,
  nextPosition: keyof BracketTournamentBracketValues | null,
  result?: any,
) => {
  if (!result || !result[position.positionId]) return false;

  try {
    const resultTeamId = result[position.positionId];
    if (teamId !== resultTeamId) return true;

    if (nextPosition && result[nextPosition]) {
      const resultNextWinner = result[nextPosition];
      const resultIsWinner = resultNextWinner === resultTeamId;
      if (isWinner !== resultIsWinner) return true;
    }
  } catch {
    // ignore error
  }
  return false;
}


interface Props {
  position1: BracketPosition,
  position2: BracketPosition,
  readOnly?: boolean,
  emptyMode?: boolean,
  result?: any,
}


const selectorChooseTournamentBracketWinner = (store: BracketStore) => store.chooseTournamentBracketWinner;


const BracketNode = ({
  position1,
  position2,
  readOnly,
  emptyMode,
  result,
}: Props) => {
  const classes = useStyles();

  const nextPosition = getNextTournamentBracketPosition(position1.positionId);
  const value1Selector = useCallback(
    (store: BracketStore) => store.data.tournamentBracket[position1.positionId],
    [],
  );
  const value2Selector = useCallback(
    (store: BracketStore) => store.data.tournamentBracket[position2.positionId],
    [],
  );
  const nextValueIdSelector = useCallback(
    (store: BracketStore) => {
      if (!nextPosition) return null;
      return store.data.tournamentBracket[nextPosition];
    },
    [ nextPosition, ],
  );
  const chooseTournamentBracketWinner = useBracketStore(selectorChooseTournamentBracketWinner);
  const value1 = useBracketStore(value1Selector);
  const value2 = useBracketStore(value2Selector);
  const nextValue = useBracketStore(nextValueIdSelector);

  const handleClickTeam1 = () => chooseTournamentBracketWinner(position1.positionId, value1);
  const handleClickTeam2 = () => chooseTournamentBracketWinner(position2.positionId, value2);

  const winnerTeam1 = nextValue && (nextValue === value1);
  const winnerTeam2 = nextValue && (nextValue === value2);

  return (
    <div className={classes.node}>
      <div className={clsx(classes.bracket, 'bracket--node')}>
        <div className={classes.bracketPlace}>
          {(value1 && !emptyMode) ? (
            <ButtonBase
              className={clsx({
                [classes.buttonBase]: true,
                'bracket-node--winner': !!winnerTeam1,
                'bracket-node--error': isError(value1, position1, !!winnerTeam1, nextPosition, result),
              })}
              disabled={readOnly}
              onClick={handleClickTeam1}
            >
              <Team teamId={value1} />
            </ButtonBase>
          ) : (
            <div className={classes.placeholder}>
              {position1.placeholder || ''}
            </div>
          )}
        </div>
        <div className={classes.bracketPlace}>
          {(value2 && !emptyMode) ? (
            <ButtonBase
              className={clsx({
                [classes.buttonBase]: true, 
                'bracket-node--winner': !!winnerTeam2,
                'bracket-node--error': isError(value2, position2, !!winnerTeam2, nextPosition, result),
              })}
              disabled={readOnly}
              onClick={handleClickTeam2}
            >
              <Team teamId={value2} />
            </ButtonBase>
          ) : (
            <div className={classes.placeholder}>
              {position2.placeholder || ''}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default BracketNode;
