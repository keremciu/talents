import { useRef, useCallback } from 'react';

const useDebouncedCallback = (fn, delay) => {
  const timeout = useRef();

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        fn(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, delay);
    },
    [fn, delay],
  );
};

export default useDebouncedCallback;
