import { makeStyles, Theme, } from '@material-ui/core/styles';
import ButtonLinkOutside from 'Components/ButtonLinkOutside';


const useStyles = makeStyles((theme: Theme) => ({
  bannerRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    marginBottom: theme.spacing(0.5),
  },
}));


interface Props {
  imageSrc?: string | null ,
  buttonText?: string | null,
  buttonLink?: string | null,
  isButton: boolean
}


const HomeBanner = ({
  imageSrc,
  buttonText,
  buttonLink,
  isButton,
}: Props) => {
  const classes = useStyles();


  if (!imageSrc) return null;

  return (
    <div className={classes.bannerRoot}>

      <div>
        <img
          className={classes.img}
          src={imageSrc}
          alt="banner"
        />
      </div>

      {(isButton && buttonText && buttonLink) && (
        <div>
          <ButtonLinkOutside
            href={buttonLink}
            color="primary"
            variant="contained"
            size="large"
          >
            {buttonText}
          </ButtonLinkOutside>
        </div>
      )}



    </div>
  );
};


export default HomeBanner;
