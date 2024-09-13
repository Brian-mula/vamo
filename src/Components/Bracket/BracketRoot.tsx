import { ReactNode, } from 'react';
import { makeStyles, createStyles, } from '@material-ui/core/styles';


const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    '& > div:last-child .bracket--nodes-container:after': {
      display: 'none',
    },
    '& > div:last-child .bracket--node:after': {
      display: 'none',
    },
    '& > div:first-child .bracket--node:before': {
      display: 'none',
    },
  },
}));


interface Props {
  children: ReactNode
}


const BracketRoot = ({
  children,
}: Props) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};


export default BracketRoot;
