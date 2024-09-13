import { useTranslation } from 'react-i18next';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import { BracketColumn, BracketNode, BracketRoot, BracketNodesContainer, } from 'Components/Bracket';
import { TABLE_NAMES, TOURNAMENT_BRACKET_STRUCTURE } from 'Components/Bracket/constants';
import TableGroup from 'Components/Bracket/TableGroup';
import TableDecider from 'Components/Bracket/TableDecider';
import Submit from './Submit';
import clsx from 'clsx';
import { useMemo } from 'react';
import { xaxaxa } from './utils';
import HomeBanner from 'Modules/Basic/pages/HomePage/HomeBanner';


const useStyles = makeStyles((theme: Theme) => ({
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  statusIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(0.5),
  },
  statusIcon: {
    fontSize: 30,
  },
  root: {
    marginTop: theme.spacing(4),
  },
  text: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  info2: {
    padding: theme.spacing(1.5, 0),
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
  },
  alreadyFilled: {
    display: 'block',
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    marginBottom: theme.spacing(1),
  },
}));


interface Props {
  loading: boolean,
  error: boolean,
  isChallengeOver?: boolean | null, 
  isEmpty: boolean,
  result?: any,
  userResult?: any,
}


const View = ({
  loading,
  error,
  isChallengeOver,
  isEmpty,
  result,
  userResult,
}: Props) => {
  const classes = useStyles();
  const { t, } = useTranslation();

  const readOnly = !isEmpty || !!isChallengeOver;
  const showResult = !isEmpty && !!isChallengeOver && !!result?.tournamentBracket && !!userResult?.tournamentBracket;

  const {
    isWinner,
    isLoser,
  } = useMemo(
    () => xaxaxa(showResult, result, userResult),
    [ showResult, result, userResult, ]
  );

  const showHelp = isEmpty && !isChallengeOver;
  const showChallengeOver = isEmpty && !!isChallengeOver;
  const showLoser = !isEmpty && isLoser;
  const showContinue = !isEmpty && !isLoser;


  if (loading) return (
    <div className={classes.statusContainer}>
      <CircularProgress />
    </div>
  )

  if (error) return (
    <div className={classes.statusContainer}>
      <div className={classes.statusIconWrapper}>
        <ErrorOutlineOutlinedIcon
          className={classes.statusIcon}
          color="error"
        />
      </div>
      <div>
        <div>
          <Typography
            variant="subtitle2"
            color="error"
          >
            {t('common:errorTitle')}
          </Typography>
        </div>
        <div>
          <Typography
            variant="body2"
            color="error"
          >
            {t('common:errorText')}
          </Typography>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>

      {showContinue && (
        <div>
          <img
            className={classes.img}
            src="/images/win.jpg"
            alt="winner"
          />
        </div>
      )}
      {showLoser && (
        <div>
          <img
            className={classes.img}
            src="/images/lost.jpg"
            alt="loser"
          />
        </div>
      )}
      {/*showSent && (
        <Card className={classes.alreadyFilled}>
          <p>{t('tournament:cardAlreadySent')}</p>
        </Card>
      )*/}
      {showChallengeOver && (
        <Card className={classes.alreadyFilled}>
          <p>{t('tournament:cardChallengeOver')}</p>
        </Card>
      )}

      {showHelp && (
        <Box mb={2}>
          <Typography
            className={classes.text}
            variant="body2"
            align="center"
          >
            {t('tournament:info1')}
          </Typography>
        </Box>
      )}

      <Box mb={4}>
        <Grid container spacing={2} justify="center">
          {TABLE_NAMES.map((table) => (
            <Grid key={table.id} item xs="auto" md={4} className={classes.gridItem}>
              <TableGroup
                key={table.id}
                tableId={table.id}
                readOnly={readOnly}
                title={table.title}
                result={(showResult && result?.tables[table.id]) ? result?.tables[table.id] : undefined}
              />
            </Grid>
          ))}
          {showHelp && (
            <Grid xs={12}>
              <Typography
                className={clsx(classes.text, classes.info2)}
                variant="body2"
                align="center"
              >
                {t('tournament:info2')}
              </Typography>
            </Grid>
          )}
          <Grid item xs="auto">
            <TableDecider
              readOnly={readOnly}
              title="Group of third-placed teams"
              result={(showResult && result?.deciderOrder) ? result : undefined}
            />
          </Grid>
        </Grid>
      </Box>
      
      {showHelp && (
        <Typography
          className={classes.text}
          variant="body2"
          align="center"
        >
          {t('tournament:info3')}
        </Typography>
      )}
      {showHelp && (
        <Typography
          className={classes.text}
          variant="body2"
          align="center"
        >
          {t('tournament:info4')}
        </Typography>
      )}

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
                        readOnly={readOnly}
                        result={(showResult && result?.tournamentBracket) ? result.tournamentBracket : undefined}
                      />
                    ))}
                  </BracketNodesContainer>
                ))}
              </BracketColumn>
            ))}
          </BracketRoot>
        </div>
      </div>
      
      {(isEmpty && !isChallengeOver) && (
        <Submit />
      )}

    </div>
  );
};


export default View;
