import style from './labelCheck.module.css';

type Props = {
  title: string;
};

export const LabelCheck = ({ title }: Props) => {
  return (
    <li className={style.listSection}>
      <label className={style.label}>
        <input type='checkbox' className={style.checkbox} />
        {title}
      </label>
    </li>
  );
};
