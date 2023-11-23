import { Dispatch, SetStateAction } from 'react';
import styles from './Category.module.scss';

interface Props {
  label: string;
  quotes: { title: string; id: number }[];
  id: number;
  quoteCount: number;
  selected: { id: number; categoryId: number } | undefined;
  setSelected: Dispatch<
    SetStateAction<{ id: number; categoryId: number } | undefined>
  >;
}

export default function Category({
  label,
  quotes,
  id,
  quoteCount,
  selected,
  setSelected,
}: Props) {
  const index = id - 1;

  const degree = index * 36;

  const quotedegrees = (cirle: 'outer' | 'inner', quoteId: number) => {
    if (cirle === 'outer') {
      return (50 / quoteCount) * quoteId;
    }
    if (cirle === 'inner') {
      return (50 / quoteCount) * (quoteId - 1);
    }
  };

  return (
    <svg viewBox="25 0 50 50" className={styles['gwb-category']}>
      {quotes.map((quote) => (
        <g
          className={styles['gwb-category__quote']}
          style={{
            transformOrigin: 'bottom right',
            clipPath: 'url(#clip-triangle)',
          }}
          transform={`rotate(${degree})`}
          key={quote.id}
        >
          <defs>
            <clipPath id="clip-triangle">
              <path
                d="M50 50H0c0-10.98 3.54-21.13 9.55-29.38L50 50Z"
                fill="none"
                stroke="#fff"
                strokeWidth={0.2}
              />
            </clipPath>
            <mask id="hole">
              <rect width="100%" height="100%" fill="white" />
              <circle
                id="inner"
                cx={50}
                cy={50}
                r={quotedegrees('inner', quote.id)}
                fill="#000"
              />
            </mask>
          </defs>

          {/* <circle
            cx={50}
            cy={50}
            r={quotedegrees('outer', i)}
            stroke="#fff"
            strokeWidth={0.2}
            fill="none"
          /> */}
          <circle
            className={
              styles[
                `${
                  index % 2 === 1
                    ? 'gwb-category__quote__circle--blue'
                    : 'gwb-category__quote__circle--pink'
                }`
              ]
            }
            id="outer"
            mask={quote.id === 1 ? '' : 'url(#hole)'}
            cx={50}
            cy={50}
            r={quotedegrees('outer', quote.id)}
            stroke="#fff"
            strokeWidth={0.2}
            onClick={() => setSelected({ id: quote.id, categoryId: id })}
          />
        </g>
      ))}

      <text
        className={styles['gwb-category__text']}
        x={index < 3 ? 2 : 98}
        y={index < 3 ? 48 : 54}
        fontSize={3}
        style={{
          transformOrigin: 'bottom right',
          textTransform: 'uppercase',
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
