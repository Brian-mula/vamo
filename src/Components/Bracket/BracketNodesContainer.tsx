import { ReactNode, } from 'react';
import { makeStyles, createStyles, } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles(() => createStyles({
  nodesContainer: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:after': {
      content: '""',
      borderLeft: '2px solid #838383',
      position: 'absolute',
      right: -1,
      top: 'calc(25% - 1px)',
      height: 'calc(50% + 2px)',
    },
  },
}));


interface Props {
  children: ReactNode
}


const BracketNodesContainer = ({
  children,
}: Props) => {
  const classes = useStyles();


  return (
    <div className={clsx(classes.nodesContainer, 'bracket--nodes-container')}>
      {children}
    </div>
  );
};


export default BracketNodesContainer;
