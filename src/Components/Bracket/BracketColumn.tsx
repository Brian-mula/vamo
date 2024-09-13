import { ReactNode, } from 'react';
import { makeStyles, createStyles, } from '@material-ui/core/styles';


const useStyles = makeStyles(() => createStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
}));


interface Props {
  children: ReactNode
}


const BracketColumn = ({
  children,
}: Props) => {
  const classes = useStyles();


  return (
    <div className={classes.column}>
      {children}
    </div>
  );
};


export default BracketColumn;
