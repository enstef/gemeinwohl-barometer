import styles from './index.module.scss';
import Aim from '@/components/Aim';
import Category from '@/components/Category';
import Quote from '@/components/Quote';
import { useEffect, useState } from 'react';
import { aims, categories } from '@/data';

const quoteCount = categories.sort(
  (a, b) => b.quotes.length - a.quotes.length
)[0].quotes.length;

console.log(quoteCount);

categories.sort((a, b) => a.id - b.id);

export default function App() {
  const [selectedQuoteId, setSelectedQuoteId] = useState<
    { id: number; categoryId: number } | undefined
  >();
  const [selectedAimId, setSelectedAimId] = useState<number>(0);
  const [selectedQuote, setSelectedQuote] = useState<
    { id: number; title: string; text: string } | undefined
  >();

  useEffect(() => {
    if (!selectedQuoteId) return;

    const selectedCategory = categories.find(
      (category) => category.id === selectedQuoteId?.categoryId
    );

    setSelectedQuote(
      selectedCategory?.quotes.find((quote) => quote.id === selectedQuoteId?.id)
    );
  }, [selectedQuoteId]);

  return (
    <div className={styles['gwb']}>
      <div className={styles['gwb-wrap']}>
        <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="50%"
        >
          {categories.map((category, index) => {
            const sorted = category.quotes.sort((a, b) => b.id - a.id);
            console.log(category.id, sorted);

            return (
              <Category
                label={category.name}
                description={category.description}
                quotes={category.quotes.sort((a, b) => b.id - a.id)}
                id={category.id}
                quoteCount={quoteCount}
                selected={selectedQuoteId}
                setSelected={setSelectedQuoteId}
                key={index}
              />
            );
          })}
          <line
            x1="0"
            y1="50"
            x2="100 "
            y2="50"
            stroke="#000"
            strokeWidth={1}
          />
        </svg>

        <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="50%"
          style={{ marginTop: '-6px' }}
        >
          {aims.map((aim, index) => (
            <Aim
              label={aim}
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
            Gemeinwohl-
          </text>
          <text x={50} y={5} fontSize={2.25} textAnchor="middle">
            quartiers-
          </text>
          <text x={50} y={7.5} fontSize={2.25} textAnchor="middle">
            index
          </text>
        </svg>
      </div>

      {selectedQuoteId && (
        <Quote
          title={selectedQuote?.title}
          text={selectedQuote?.text}
          onClose={() => setSelectedQuoteId(undefined)}
        />
      )}
    </div>
  );
}
