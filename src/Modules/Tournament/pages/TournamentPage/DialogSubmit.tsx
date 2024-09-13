import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, } from 'react';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import { useFillBracketMutation } from 'Apollo/graphql';
import { BracketStore, useBracketStore, } from 'Components/Bracket/BracketStore';
import { useToken } from 'Tools/auth';
import { Typography } from '@material-ui/core';
import { validateBracket } from 'Components/Bracket/utils';
import DialogSubmitCompleted from './DialogSubmitCompleted';


const useStyles = makeStyles((theme: Theme) => ({
  submitRoot: {
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
  errorText: {
    marginTop: 4,
  },
}));


interface Props {
  onClose: () => void,
}


const selectData = (store: BracketStore) => store.data;


const DialogSubmit = ({
  onClose,
}: Props) => {
  const [ submitted, setSubmitted, ] = useState<boolean>(false);
  const [ invalid, setInvalid, ] = useState<boolean>(false);

  const classes = useStyles();
  const { t, } = useTranslation();

  const data = useBracketStore(selectData);
  const token = useToken();


  const handleCompleted = () => setSubmitted(true);

  const getError = (error: any, invalid: boolean): string => {
    if (invalid) return t('common:invalidForm');
    return t('common:errorText');
  };


  const [ submitMutation,  { loading, error, }, ] = useFillBracketMutation({
    fetchPolicy: 'no-cache',
    onCompleted: handleCompleted,
  });


  const handleSubmit = () => {
    const isBracketValid = validateBracket(data);

    if (isBracketValid) {
      submitMutation({
        variables: {
          bracket: data,
          token: token || '',
        },
      });
    } else {
      setInvalid(true);
    }
  };


  if (submitted) {
    return (
      <DialogSubmitCompleted />
    );
  }

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="xs"
    >
      <DialogTitle >{t('tournament:dialogSubmitTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
        {t('tournament:dialogSubmitText')}
        </DialogContentText>
        {(error || invalid) && (
          <Typography
            align="right"
            color="error"
            variant="body2"
          >
            {getError(error, invalid)}
          </Typography>
        )}
      </DialogContent>
      <DialogActions style={{ justifyContent: 'space-between', padding: '8px 24px', }}>
        <Button onClick={onClose} color="default" variant="outlined">
          {t('common:close')}
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {t('tournament:submit')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default DialogSubmit;
