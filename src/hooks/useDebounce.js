import { useState, useEffect } from 'react';
// Custom hook useDebounce
// Dùng để xử lý khi có 1 chuỗi hành động xảy ra liên tục
// nhưng ta chỉ muốn thực hiện hành động cuối cùng
// khi chuỗi hành động đó kết thúc sau khoảng thời gian ngắn
function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // Clean up function
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
}

export default useDebounce;
