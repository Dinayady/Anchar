import { useState } from 'react';
import style from './checkboxField.module.css';

type Props = {
  title: string;
  filtered: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxField = ({ title, filtered }: Props) => {
  return (
    <label className={style.label}>
      <input
        type='checkbox'
        className={style.checkbox}
        value={title}
        onChange={(e) => filtered(e)}
      />
      {title}
    </label>
  );
};
