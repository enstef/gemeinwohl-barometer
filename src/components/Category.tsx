import { Dispatch, SetStateAction } from 'react';
import styles from '@/components/category.module.scss';

interface Props {
  name: string;
  description: string;
  topics: Topic[];
  id: number;
  subjectCount: number;
  setSelectedTopic: Dispatch<SetStateAction<Topic | undefined>>;
}

export default function Category({
  name,
  description,
  topics,
  id,
  subjectCount,
  setSelectedTopic,
}: Props) {
  const index = id - 1;

  const degree = index * 36;

  const radius = (cirle: 'outer' | 'inner', subId: number) => {
    if (cirle === 'outer') {
      return (46 / subjectCount) * subId;
    }
    if (cirle === 'inner') {
      return (46 / subjectCount) * (subId - 1);
    }
  };

  return (
    <svg viewBox="25 0 50 50" className={styles['gwb-category']}>
      {topics.map((top) => {
        return (
          <g
            className={styles['gwb-category__quote']}
            style={{
              transformOrigin: 'bottom right',
              clipPath: 'url(#clip-triangle)',
            }}
            transform={`rotate(${degree})`}
            key={top.id}
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
                  r={radius('inner', top.id)}
                  fill="#000"
                />
              </mask>

              <path
                //prettier-ignore
                d={`
                  M ${51 - radius('outer', top.id)!}, 50 
                  a ${radius('outer', top.id)},${radius('outer',top.id)} 0 1,1 ${radius('outer', top.id)! * 2},0 
                  a ${radius('outer',top.id)},${radius('outer', top.id)} 0 1,1 -${radius('outer', top.id)! * 2},0
                `}
                id={`textPath${top.id}`}
              />
            </defs>
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
              mask={top.id === 1 ? '' : 'url(#hole)'}
              cx={50}
              cy={50}
              r={radius('outer', top.id)}
              stroke="#fff"
              strokeWidth={0.2}
              onClick={() => setSelectedTopic(top)}
            />

            <text
              x={1.3}
              fill="#fff"
              fontSize={2.3}
              className={styles['gwb-category__quote__text']}
            >
              <textPath
                alignmentBaseline="before-edge"
                xlinkHref={`#textPath${top.id}`}
              >
                {top.title}
              </textPath>
            </text>
          </g>
        );
      })}

      <g
        style={{
          transformOrigin: 'bottom right',
          textTransform: 'uppercase',
        }}
        transform={`rotate(${degree})`}
      >
        <defs>
          <path
            //prettier-ignore
            d="
            M 0,50
            a 50,50 0 1,1 100,0
            a 50,50 0 1,1 -100,0
          "
            id="titlePath"
          />
        </defs>
        <text x={2} fontSize={3}>
          <textPath alignmentBaseline="before-edge" xlinkHref="#titlePath">
            {name}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
