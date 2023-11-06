import styles from './category.module.scss';

interface Props {
  label: string;
  quotes: string[];
  index: number;
}

export default function Category({ label, quotes, index }: Props) {
  const degree = index * 36;
  const quoteCount = quotes.length;

  const quotedegrees = (cirle: 'outer' | 'inner', i: number) => {
    if (cirle === 'outer') {
      return (50 / quoteCount) * (quoteCount - i);
    }
    return (50 / quoteCount) * (quoteCount - i + 1);
  };

  return (
    <svg viewBox="25 0 50 50" className={styles['gwb-category']}>
      {quotes.map((quote, i) => (
        <>
          <defs>
            <clipPath id="clip-triangle">
              <path
                d="M50 50H0c0-10.98 3.54-21.13 9.55-29.38L50 50Z"
                fill="none"
                stroke="#fff"
                strokeWidth={0.2}
              />
            </clipPath>
            <mask id="clip-circle">
              <rect width="100%" height="100%" fill="white" />
              <circle
                cx={50}
                cy={50}
                r={quotedegrees('inner', i)}
                fill="black"
                opacity={0}
              />
            </mask>
          </defs>

          <g
            className={styles['gwb-category__path']}
            style={{
              transformOrigin: 'bottom right',
              clipPath: 'url(#clip-triangle)',
            }}
            transform={`rotate(${degree})`}
            fill="none"
          >
            <circle
              mask="url(#clip-circle)"
              cx={50}
              cy={50}
              r={quotedegrees('outer', i)}
              fill={index % 2 === 1 ? '#00378b' : '#e2007a'}
              stroke="#fff"
              strokeWidth={0.2}
            />
          </g>
        </>
      ))}

      <text
        className={styles['gwb-category__text']}
        x={index < 3 ? 2 : 98}
        y={index < 3 ? 48 : 54}
        fontSize={3}
        style={{
          transformOrigin: 'bottom right',
        }}
        textAnchor={index < 3 ? 'start' : 'end'}
        transform={
          index < 3 ? `rotate(${degree})` : `rotate(${degree}) scale(-1,-1)`
        }
      >
        {label}
      </text>
    </svg>
  );
}
