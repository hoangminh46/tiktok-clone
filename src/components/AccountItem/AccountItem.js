import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6709c6da43ef4429b97dff76ef893b7d~c5_300x300.webp?x-expires=1669633200&x-signature=bnR9rM6S6ij49yjo9BX9w4J%2Bi40%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Hoang Cong Minh</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>hoangminh46</span>
      </div>
    </div>
  );
}

export default AccountItem;
