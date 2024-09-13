import Button, { ButtonProps, } from '@material-ui/core/Button';


interface Props extends Omit<ButtonProps, 'component'> {
  href: string,
  target?: string,
  rel?: string,
}


const ButtonLinkOutside: React.FC<Props> = ({
  href,
  target,
  rel,
  children,
  ...rest
}: Props) => (
  <a
    href={href}
    target={target}
    rel={rel}
    style={{
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    <Button
      {...rest}
    >
      {children}
    </Button>
  </a>
);


export default ButtonLinkOutside;
