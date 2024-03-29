import styles from './index.module.scss';
import Aim from '@/components/Aim';
import Category from '@/components/Category';
import Quote from '@/components/Quote';
import { useCallback, useEffect, useState } from 'react';
import { aims, categories } from '@/data';

export default function App() {
  const [selectedAimId, setSelectedAimId] = useState<number>(0);
  const [selectedAim, setSelectedAim] = useState<Aim>(aims[0]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>();
  const [topicCount, setTopicCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<
    { x: number; y: number; id: number } | undefined
  >();
  const [selectedDesc, setSelectedDesc] = useState<string | undefined>();

  const findTopicsPerCategory = useCallback(
    (catId: number) => {
      let foundtopics: Topic[] = [];

      selectedAim.topics.map((top) => {
        if (top.categoryId === catId) {
          foundtopics.push(top);
        }
      });

      return foundtopics;
    },
    [selectedAim.topics]
  );

  const findMaxTopicCount = useCallback(() => {
    let max = 1;

    for (let i = 1; i <= 5; i++) {
      let currMax = findTopicsPerCategory(i).length;

      if (currMax > max) {
        max = currMax;
      }
    }

    return max;
  }, [findTopicsPerCategory]);

  useEffect(() => {
    let foundAim = aims.find((aim, index) => index === selectedAimId);

    if (foundAim) {
      setSelectedAim(foundAim);

      setTopicCount(findMaxTopicCount());
    }
  }, [selectedAimId, findMaxTopicCount]);

  useEffect(() => {
    let foundCategory = categories.find(
      (cat) => cat.id === selectedCategory?.id
    );

    if (foundCategory) {
      setSelectedDesc(foundCategory.description);
    } else setSelectedDesc(undefined);
  }, [selectedCategory]);

  return (
    <div className={styles['gwb']}>
      <div className={styles['gwb__wrap']}>
        <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="50%"
        >
          {categories.map((category, index) => {
            return (
              <Category
                name={category.name}
                topics={findTopicsPerCategory(category.id).sort(
                  (a, b) => b.id - a.id
                )}
                id={category.id}
                topicCount={topicCount}
                selectedAim={selectedAim.name}
                setSelectedTopic={setSelectedTopic}
                key={index}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}
        </svg>

        <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="50%"
          style={{ marginTop: '-8px' }}
        >
          {aims.map((aim, index) => (
            <Aim
              label={aim.name}
              index={index}
              key={index}
              selected={selectedAimId}
              setSelected={setSelectedAimId}
            />
          ))}
          <circle
            cx={50}
            cy={0}
            r={9}
            stroke="#000"
            strokeWidth={0.5}
            fill="#fff"
          />
          <text x={50} y={2.5} fontSize={2.25} textAnchor="middle">
            Quartier-
          </text>
          <text x={50} y={5} fontSize={2.25} textAnchor="middle">
            Gemeinwohl-
          </text>
          <text x={50} y={7.5} fontSize={2.25} textAnchor="middle">
            Index
          </text>
          <line x1="0" y1="0" x2="100" y2="0" stroke="#000" strokeWidth={1} />
          <text x={98} y={48} fontSize={1.8} textAnchor="end">
            Stand 2022
          </text>
        </svg>
      </div>

      {selectedCategory && (
        <div
          className={styles['gwb__category-desc']}
          style={{
            top: selectedCategory!.y,
            left: selectedCategory!.x,
            transform:
              selectedCategory.id === 3
                ? 'translate(-50%, 0)'
                : selectedCategory.id > 3
                ? 'translate(-100%, 0)'
                : '',
          }}
        >
          {selectedDesc}
        </div>
      )}

      {selectedTopic && (
        <Quote
          selectedAim={selectedAim.name}
          title={selectedTopic.title}
          quotes={selectedTopic.quotes}
          onClose={() => setSelectedTopic(undefined)}
        />
      )}
    </div>
  );
}
