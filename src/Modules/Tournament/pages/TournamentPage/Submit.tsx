import { useState, } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogSubmit from './DialogSubmit';


const useStyles = makeStyles((theme: Theme) => ({
  submitRoot: {
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
  errorText: {
    marginTop: 4,
  },
}));



const View = () => {
  const [ isOpenSubmitModal, setOpenSubmitModal, ] = useState<boolean>(false);

  const classes = useStyles();
  const { t, } = useTranslation();


  const handleSubmit = () => setOpenSubmitModal(true);
  const handleCloseDialogSubmit = () => setOpenSubmitModal(false);


  return (
    <>
      {isOpenSubmitModal && (
        <DialogSubmit onClose={handleCloseDialogSubmit} />
      )}
      <div className={classes.submitRoot}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit}
        >
          {t('tournament:submit')}
        </Button>
      </div>
    </>
  );
};


export default View;
