import React, { useMemo, forwardRef, } from 'react';
import { Link, } from 'react-router-dom';
import Button, { ButtonProps, } from '@material-ui/core/Button';


interface Props extends Omit<ButtonProps, 'component'> {
  to: string,
}


const ButtonLink: React.FC<Props> = ({
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
    <Button
      {...rest}
      component={CustomLink}
    >
      {children}
    </Button>
  );
};


export default ButtonLink;
