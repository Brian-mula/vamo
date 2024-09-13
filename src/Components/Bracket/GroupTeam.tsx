import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import clsx from 'clsx';
import { TEAMS } from "./teams";


const useStyles = makeStyles((theme: Theme) => createStyles({
  teamRoot: {
    userSelect: 'none',
    padding: '1px 0',
    '& > .team-success': {
      background: '#9feed1',
    },
    '& > .team-warning': {
      background: '#ffd383',
    },
    '& > .team-error': {
      background: '#ee9f9f',
    },
  },
  team: {
    display: 'flex',
    height: 36,
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    background: '#ececec',
  },
  colFlag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1.25rem',
    width: '1.25rem',
    marginRight: 10,
    '& > svg': {
      height: '1.25rem',
      width: '1.25rem',
    },
  },
  colName: {
    
  },
  leftCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    fontWeight: 600,
  },
  leftEmpty: {
    width: 16,
  },
}));


interface Props {
  teamId: string,
  background: {
    success: boolean,
    warning: boolean,
    error: boolean,
  },
  emptyMode?: boolean,
  leftCol?: string | number,
}


const GroupTeam = ({
  teamId,
  background: {
    success,
    warning,
    error,
  },
  emptyMode,
  leftCol,
}: Props): JSX.Element => {
  const classes = useStyles();

  const {
    name,
    flag,
  } = TEAMS[teamId];


  return (
    <div className={classes.teamRoot}>
      <div className={clsx({
        [classes.team]: true,
        'team-success': !emptyMode && success,
        'team-warning': !emptyMode && warning,
        'team-error': !emptyMode && error,
      })}>
        {!emptyMode ? (
          <span className={classes.leftCol}>
            {leftCol}
          </span>
        ) : (
          <span className={classes.leftEmpty}/>
        )}
        <span className={classes.colFlag}>
          {flag}
        </span>
        <Typography
          className={classes.colName}
          variant="body1"
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};


export default GroupTeam;
