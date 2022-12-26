import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '../../assets/images';
import styles from './Image.module.scss';

// forWardRef dùng để đưa ref của thẻ img ra ngoài cho component image
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
  // Xử lý khi ảnh bị lỗi thì sẽ hiển thị ảnh mặc định
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
