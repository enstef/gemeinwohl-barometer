import styles from './aim.module.scss';

interface Props {
  label: string;
  index: number;
}

export default function Aim({ label, index }: Props) {
  const degree = index * -11.25;

  return (
    <svg viewBox="25 0 50 50" className={styles['gwb-aim']}>
      <path
        d="m 50 0 L .96 9.75 C .33 6.6 0 3.34 0 0 h 50 Z"
        style={{ transformOrigin: 'top right' }}
        transform={`rotate(${degree})`}
        fill="#fff"
        stroke="#00378b"
        strokeWidth={0.1}
      />
      <text
        x={index < 8 ? 2 : 98}
        y={index < 8 ? 3 : -1}
        fontSize={2.5}
        style={{
          transformOrigin: 'top right',
        }}
        textAnchor={index < 8 ? 'start' : 'end'}
        //todo flip
        transform={
          index < 8 ? `rotate(${degree})` : `rotate(${degree}) scale(-1,-1)`
        }
      >
        {label}
      </text>
    </svg>
  );
}
