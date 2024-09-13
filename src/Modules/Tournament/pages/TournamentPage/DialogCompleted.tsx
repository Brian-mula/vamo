import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';


interface Props {
  isOpen: boolean,
}


const DialogCompleted = ({
  isOpen,
}: Props) => {
  const history = useHistory();
  const { t, } = useTranslation();

  const handleClose = () => {
    history.push('/');
  };


  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="xs"
    >
      <DialogTitle >{t('tournament:dialogCompetedTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
        {t('tournament:dialogCompetedText')}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center', }}>
        <Button onClick={handleClose} color="primary">
          {t('common:close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}


export default DialogCompleted;
