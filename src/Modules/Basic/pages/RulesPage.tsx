import { Trans, useTranslation } from 'react-i18next';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(2),
  },
  transP: {
    margin: theme.spacing(1, 0),
  },
  transLi: {
    margin: theme.spacing(1, 0),
  },
  transB: {
    fontSize: '1.125rem',
  },
}));


const RulesPage = () => {
  const classes = useStyles();
  const { t, } = useTranslation();


  return (
    <Container className={classes.container}>
      <Box mb={4}>
        <Card className={classes.card}>
          <Typography
            variant="h4"
          >
            {t('home:howItWorksTitle')}
          </Typography>
          <Typography
            variant="body1"
            component="section"
          >
            <p>
              {t('rules:description')}
            </p>
            <Trans
              i18nKey="home:howItWorksRuleList"
              components={{
                p: <p className={classes.transP} />,
                ol: <ol />,
                li: <li className={classes.transLi} />,
                b: <b className={classes.transB} />
              }}
            />
          </Typography>
        </Card>
      </Box>

      <Card className={classes.card}>
        <Typography
          variant="h4"
        >
          {t('rules:title')}
        </Typography>
        <Typography
          variant="body1"
          component="section"
        >
          <p>
            {t('rules:description')}
          </p>
          <Trans
            i18nKey="rules:ruleList"
            components={{
              p: <p className={classes.transP} />,
              ol: <ol />,
              li: <li className={classes.transLi} />,
              b: <b className={classes.transB} />
            }}
          />
        </Typography>
      </Card>

    </Container>
  );
};


export default RulesPage;
