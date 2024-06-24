import { useState } from 'react';
import style from './rangeYear.module.css';

type Props = {
  min: number;
  max: number;
  onDataChange: (data: { dataMin: number; dataMax: number }) => void;
};

export const RangeYear = ({ min, max, onDataChange }: Props) => {
  const [dataMin, setDataMin] = useState(min);
  const [dataMax, setDataMax] = useState(max);

  let totalRange = max - min;
  let percentLeft = ((dataMin - min) / totalRange) * 100;
  let percentRight = ((max - dataMax) / totalRange) * 100;

  return (
    <div>
      <div className={style.value}>
        <div className={style.min}>
          <span id='min-value' className={style.minValue}>
            {dataMin}
          </span>
        </div>
        <div> — </div>
        <div className={style.max}>
          <span id='max-value' className={style.maxValue}>
            {dataMax}
          </span>
        </div>
      </div>
      <div className={style.slider}>
        <div
          className={style.progress}
          style={{ left: `${percentLeft}%`, right: `${percentRight}%` }}
        ></div>
      </div>
      <div className={style.minMaxRange}>
        <input
          type='range'
          min={min}
          max={max}
          value={dataMin}
          onChange={(e: any) => {
            setDataMin(e.target.value);
            onDataChange({ dataMin: e.target.value, dataMax });
          }}
          className={style.range}
          id='min'
        />
        <input
          type='range'
          min={min}
          max={max}
          value={dataMax}
          onChange={(e: any) => {
            setDataMax(e.target.value);
            onDataChange({ dataMin, dataMax: e.target.value });
          }}
          className={style.range}
          id='max'
        />
      </div>
      <div className={style.marks}>
        <div className={style.line} style={{ left: '-4%' }}>
          <div className={style.marksLine}></div>
          <div className={style.lineTitle}>1900</div>
        </div>
        <div className={style.line} style={{ left: '19.5%' }}>
          <div className={style.marksLine}></div>
          <div className={style.lineTitle}>1931</div>
        </div>
        <div className={style.line} style={{ left: '43%' }}>
          <div className={style.marksLine}></div>
          <div className={style.lineTitle}>1962</div>
        </div>
        <div className={style.line} style={{ left: '66.5%' }}>
          <div className={style.marksLine}></div>
          <div className={style.lineTitle}>1993</div>
        </div>
        <div className={style.line} style={{ left: '90%' }}>
          <div className={style.marksLine}></div>
          <div className={style.lineTitle}>2024</div>
        </div>
      </div>
    </div>
  );
};
