import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import { TEAMS } from "./teams";


const useStyles = makeStyles((theme: Theme) => createStyles({
  team: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
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
}));


interface Props {
  teamId: string,
}


const Team = ({
  teamId,
}: Props): JSX.Element => {
  const classes = useStyles();

  const {
    name,
    flag,
  } = TEAMS[teamId];


  return (
    <div className={classes.team}>
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
  );
};


export default Team;
