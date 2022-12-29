import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import axios, { isCancel, AxiosError } from 'axios';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '../../../../apiServices/searchService';
import AccountItem from '../../../AccountItem/AccountItem';
import { SearchIcon } from '../../../Icons/Icons';
import { Wrapper as PopperWrapper } from '../../../Popper/Popper';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDebounce } from '../../../../hooks';

const cx = classNames.bind(styles);

function Search() {
  // Giá trị ng dùng nhập vào ô input
  const [searchValue, setSearchValue] = useState('');
  // Dữ liệu nhận vào khi ng dùng tìm kiếm (nhận từ API)
  const [searchResult, setSearchResult] = useState([]);
  // Ẩn hiện kết quả
  const [showResults, setShowResults] = useState(true);
  // Xử lý icon loading khi tìm kiếm
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleHideResults = () => {
    setShowResults(false);
  };

  // Lấy dữ liệu tìm kiếm API
  useEffect(() => {
    // kiểm tra nếu ng dùng nhập vào mới get API
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    // Trước khi get API sẽ set loading cho icon
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  return (
    <HeadLessTippy
      interactive={true}
      visible={showResults && searchResult.length > 0}
      onClickOutside={handleHideResults}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Tài khoản</h4>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm tài khoản và video"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResults(true)}
          spellCheck={false}
        />
        {!!searchValue && !loading && (
          <button
            className={cx('clear')}
            onClick={() => {
              inputRef.current.focus();
              setSearchValue('');
              setSearchResult([]);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadLessTippy>
  );
}

export default Search;
