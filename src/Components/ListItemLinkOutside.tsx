import ButtonBase, { ButtonBaseProps, } from '@material-ui/core/ButtonBase';
import ListItem from '@material-ui/core/ListItem';


interface Props extends Omit<ButtonBaseProps, 'component' > {
  href: string,
  target?: string,
  rel?: string,
  divider?: boolean,
}


const ListItemLinkOutside : React.FC<Props> = ({
  href,
  target,
  rel,
  children,
  divider,
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
    <ListItem
      {...rest}
      button
      divider={divider}
      component={ButtonBase}
    >
      {children}
    </ListItem>
  </a>
);


export default ListItemLinkOutside ;
