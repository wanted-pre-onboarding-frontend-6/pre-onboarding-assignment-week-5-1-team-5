import React, { useCallback, useState } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const changeValueHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const deleteValueHandler = useCallback(() => {
    setValue('');
  }, []);

  return [value, changeValueHandler, deleteValueHandler, setValue] as const;
}
