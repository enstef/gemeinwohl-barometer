import { Dispatch, SetStateAction } from 'react';
import styles from '@/components/aim.module.scss';
import classnames from 'classnames';

interface Props {
  label: string;
  index: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

export default function Aim({ label, index, selected, setSelected }: Props) {
  const degree = index * -11.25;

  return (
    <svg
      viewBox="25 0 50 50"
      className={classnames(styles['gwb-aim'], {
        [styles['gwb-aim--selected']]: selected === index,
      })}
      onClick={() => setSelected(index)}
    >
      <g
        style={{ transformOrigin: 'top right' }}
        transform={`rotate(${degree})`}
      >
        <path d="m 50 0 L .96 9.75 C .33 6.6 0 3.34 0 0 h 50 Z" />
        <line x1="50" y1="0" x2="0 " y2="0" stroke="#000" strokeWidth={0.1} />

        <g
          style={{
            transformOrigin: 'center center',
          }}
          transform={
            index < 8
              ? 'rotate(-6)'
              : 'rotate(-5) scale(-1 -1) translate(42.5 44.5)'
          }
        >
          <text
            className={styles['gwb-aim__text']}
            x={4}
            y={3.5}
            fontSize={2.5}
            textAnchor={index < 8 ? 'start' : 'end'}
          >
            {label}
          </text>
        </g>
      </g>
    </svg>
  );
}
