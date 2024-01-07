import { Dispatch, SetStateAction } from 'react';
import styles from '@/components/category.module.scss';

interface Props {
  name: string;
  description: string;
  topics: Topic[];
  id: number;
  subjectCount: number;
  selectedAim: string;
  setSelectedTopic: Dispatch<SetStateAction<Topic | undefined>>;
}

export default function Category({
  name,
  description,
  topics,
  id,
  subjectCount,
  selectedAim,
  setSelectedTopic,
}: Props) {
  const index = id - 1;

  const degree = index * 36;

  const getRadius = (subId: number) => {
    let radius = 46;

    const area = Math.PI * Math.pow(radius, 2) * (1 / 10) * subjectCount;

    radius = Math.sqrt(((area / subId) * 10) / Math.PI);

    radius = (radius / subjectCount) * subId;

    return radius;
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
              <path
                //prettier-ignore
                d={`
                  M ${51 - getRadius(top.id)!}, 50 
                  a ${getRadius(top.id)},${getRadius(top.id)} 0 1,1 ${getRadius(top.id)! * 2},0 
                  a ${getRadius(top.id)},${getRadius(top.id)} 0 1,1 -${getRadius(top.id)! * 2},0
                `}
                id={`textPath${selectedAim}${top.id}`}
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
              r={getRadius(top.id)}
              stroke="#fff"
              strokeWidth={0.2}
              onClick={() => setSelectedTopic(top)}
            />

            <text
              x={1.3}
              fill="#fff"
              fontSize={2.3}
              className={styles['gwb-category__quote__text']}
              onClick={() => setSelectedTopic(top)}
            >
              <textPath
                alignmentBaseline="before-edge"
                xlinkHref={`#textPath${selectedAim}${top.id}`}
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
