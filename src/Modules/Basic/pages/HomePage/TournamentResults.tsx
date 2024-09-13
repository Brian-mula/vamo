import Grid from '@material-ui/core/Grid';
import { BracketColumn, BracketNode, BracketRoot, BracketNodesContainer, } from 'Components/Bracket';
import { TABLE_NAMES, TOURNAMENT_BRACKET_STRUCTURE } from 'Components/Bracket/constants';
import TableGroup from 'Components/Bracket/TableGroup';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { BracketStore, useBracketStore, } from 'Components/Bracket/BracketStore';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  bracketContainer: {
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  bracketWrapper: {
    minWidth: 850,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  }
}));


const selectFetchState = (store: BracketStore) => store.fetchState;
const selectIsEmpty = (store: BracketStore) => store.data.isEmpty;


const READ_ONLY = true;


const TournamentResults = () => {
  const classes = useStyles();
  const { t, } = useTranslation();
  const fetchState = useBracketStore(selectFetchState);
  const isEmpty = useBracketStore(selectIsEmpty);


  if (fetchState.loading || fetchState.error) return null;


  return (
    <div className={classes.root}>

      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        {t('home:resultsTitle')}
      </Typography>

      <Grid container spacing={2} justify="center">
        {TABLE_NAMES.map((table) => (
          <Grid key={table.id} item xs="auto" md={4} className={classes.gridItem}>
            <TableGroup
              key={table.id}
              tableId={table.id}
              readOnly={READ_ONLY}
              emptyMode={isEmpty}
              title={table.title}
            />
          </Grid>
          ))}
      </Grid>
      
      <div className={classes.bracketContainer}>
        <div className={classes.bracketWrapper}>
          <BracketRoot>
            {TOURNAMENT_BRACKET_STRUCTURE.map((columnItems) => (
              <BracketColumn key={columnItems.id}>
                {columnItems.childs.map((nodes) => (
                  <BracketNodesContainer key={nodes.id}>
                    {nodes.childs.map((node) => (
                      <BracketNode
                        key={node.position1.positionId}
                        position1={node.position1}
                        position2={node.position2}
                        readOnly={READ_ONLY}
                        emptyMode={isEmpty}
                      />
                    ))}
                  </BracketNodesContainer>
                ))}
              </BracketColumn>
            ))}
          </BracketRoot>
        </div>
      </div>

    </div>
  );
};


export default TournamentResults;
