import { useState } from 'react';

export const useSelectItem = (): [
  string[],
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [data, setData] = useState<string[]>([]);

  const selectItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setData([...data, e.target.value]);
    } else {
      setData(data.filter((filterCheck) => filterCheck !== e.target.value));
    }
  };

  return [data, selectItem];
};
