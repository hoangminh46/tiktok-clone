import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button/Button';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });

  useEffect(() => {
    if (data.button) {
      const checkbox = document.getElementById('checkbox');
      if (checkbox) {
        checkbox.addEventListener('change', () => {
          document.body.classList.toggle('dark');
        });
      }
    }
  }, []);

  return (
    <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick} RightIcon={data.button}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
