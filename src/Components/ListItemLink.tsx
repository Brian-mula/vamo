import React, { useMemo, forwardRef, } from 'react';
import { Link, } from 'react-router-dom';
import ListItem, { ListItemProps, } from '@material-ui/core/ListItem';


interface Props extends Omit<ListItemProps, 'component' | 'button'> {
  to: string,
}


const ListItemLink : React.FC<Props> = ({
  to,
  children,
  ...rest
}: Props) => {
  const CustomLink = useMemo(
    () => forwardRef((linkProps, ref: any) => (
      <Link ref={ref} to={to} {...linkProps} />
    )),
    [to],
  );

  return (
    <ListItem
      {...rest}
      button
      component={CustomLink}
    >
      {children}
    </ListItem>
  );
};


export default ListItemLink ;
