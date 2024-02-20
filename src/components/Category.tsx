import { Dispatch, SetStateAction, useEffect, useRef, MouseEvent } from 'react';
import styles from '@/components/category.module.scss';

interface Props {
  name: string;
  topics: Topic[];
  id: number;
  topicCount: number;
  selectedAim: string;
  setSelectedTopic: Dispatch<SetStateAction<Topic | undefined>>;
  setSelectedCategory: Dispatch<
    SetStateAction<{ x: number; y: number; id: number } | undefined>
  >;
}

export default function Category({
  name,
  topics,
  id,
  topicCount,
  selectedAim,
  setSelectedTopic,
  setSelectedCategory,
}: Props) {
  const index = id - 1;
  const degree = index * 36;
  const sanitizedAim = selectedAim.replaceAll(' ', '');

  const getRadius = (subId: number) => {
    let radius = 46;
    const area = Math.PI * Math.pow(radius, 2) * (1 / 10) * topicCount;

    radius = Math.sqrt(((area / subId) * 10) / Math.PI);
    radius = (radius / topicCount) * subId;

    return radius;
  };

  const getText = (text: string) => {
    let lines = text.split('\n');
    return lines;
  };

  const nameRef = useRef<SVGTextPathElement | null>(null);

  const handleMouseOver = (e: MouseEvent<any>) => {
    setSelectedCategory({
      x: e.clientX,
      y: e.clientY,
      id: id,
    });
  };
  const handleMouseLeave = () => {
    setSelectedCategory(undefined);
  };

  return (
    <svg viewBox="25 0 50 50" className={styles['gwb-category']}>
      {topics.map((top) => {
        const lines = getText(top.title);

        return (
          <g
            className={styles['gwb-category__quote']}
            style={{
              transformOrigin: 'bottom right',
              clipPath: `url(#clip-triangle${sanitizedAim}${index})`,
            }}
            transform={`rotate(${degree})`}
            key={top.id}
          >
            <defs>
              <clipPath id={`clip-triangle${sanitizedAim}${index}`}>
                <path
                  d="M50 50H0c0-10.98 3.54-21.13 9.55-29.38L50 50Z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={0.2}
                />
              </clipPath>
              <path
                id={`textPath${sanitizedAim}${top.id}`}
                //prettier-ignore
                d={`
                  M ${51 - getRadius(top.id)!}, 50 
                  a ${getRadius(top.id)},${getRadius(top.id)} 0 1,1 ${getRadius(top.id)! * 2},0 
                  a ${getRadius(top.id)},${getRadius(top.id)} 0 1,1 -${getRadius(top.id)! * 2},0
                `}
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

            {lines.map((text, index) => (
              <text
                className={styles['gwb-category__quote__text']}
                x={(getRadius(top.id) * Math.PI * 0.98) / 10}
                dy={index * 2.5}
                textAnchor="middle"
                fontSize={2.2}
                letterSpacing={index * 0.1}
                fill="#fff"
                onClick={() => setSelectedTopic(top)}
                key={index}
              >
                <textPath
                  dominantBaseline="text-before-edge"
                  xlinkHref={`#textPath${sanitizedAim}${top.id}`}
                >
                  {text}
                </textPath>
              </text>
            ))}
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
        <text
          className={styles['gwb-category__name']}
          x={(50 * Math.PI) / 10}
          textAnchor="middle"
          fontSize={3}
        >
          <textPath
            dominantBaseline="text-before-edge"
            xlinkHref="#titlePath"
            ref={nameRef}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {name}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
