import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ to, href, type, size, disabled, children, className, leftIcon, RightIcon, onClick, ...passProps }) {
  let Comp = 'button';
  const props = { onClick, ...passProps };

  // Remove event listeners when button disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    [type]: type,
    disabled,
    [size]: size,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      <span>{children}</span>
      {RightIcon && <span className={cx('right-icon')}>{RightIcon}</span>}
    </Comp>
  );
}

export default Button;
