import styles from './index.module.scss';
import Aim from '@/components/Aim';
import Category from '@/components/Category';
import Quote from '@/components/Quote';
import { useEffect, useState } from 'react';

interface Quote {
  id: number;
  title: string;
  text: string;
}

interface Category {
  id: number;
  name: string;
  quotes: Quote[];
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Category 1',
    quotes: [
      { id: 1, title: 'Quote 1', text: 'Lorem Ipsum' },
      { id: 2, title: 'Quote 2', text: 'Lorem Ipsum' },
    ],
  },
  {
    id: 2,
    name: 'Category 2',
    quotes: [
      { id: 1, title: 'Quote 1', text: 'Lorem Ipsum' },
      { id: 2, title: 'Quote 2', text: 'Lorem Ipsum' },
      { id: 3, title: 'Quote 3', text: 'Lorem Ipsum' },
      { id: 4, title: 'Quote 4', text: 'Lorem Ipsum' },
    ],
  },
  {
    id: 3,
    name: 'Category 3',
    quotes: [{ id: 1, title: 'Quote 1', text: 'Lorem Ipsum' }],
  },
  {
    id: 4,
    name: 'Category 4',
    quotes: [{ id: 1, title: 'Quote 1', text: 'Lorem Ipsum' }],
  },
  {
    id: 5,
    name: 'Category 5',
    quotes: [
      { id: 1, title: 'Quote 1', text: 'Lorem Ipsum' },
      { id: 2, title: 'Quote 2', text: 'Lorem Ipsum' },
      { id: 3, title: 'Quote 3', text: 'Lorem Ipsum' },
    ],
  },
];

const quoteCount = categories.sort(
  (a, b) => b.quotes.length - a.quotes.length
)[0].quotes.length;

console.log(quoteCount);

categories.sort((a, b) => a.id - b.id);

const aims = [
  'Aim 1',
  'Aim 2',
  'Aim 3',
  'Aim 4',
  'Aim 5',
  'Aim 6',
  'Aim 7',
  'Aim 8',
  'Aim 9',
  'Aim 10',
  'Aim 11',
  'Aim 12',
  'Aim 13',
  'Aim 14',
  'Aim 15',
  'Aim 16',
];

export default function App() {
  const [selectedQuoteId, setSelectedQuoteId] = useState<
    { id: number; categoryId: number } | undefined
  >();
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
                quotes={category.quotes.sort((a, b) => b.id - a.id)}
                id={category.id}
                quoteCount={quoteCount}
                setSelectedQuoteId={setSelectedQuoteId}
                key={index}
              />
            );
          })}
        </svg>
        <hr
          style={{
            margin: 0,
            marginTop: '-4px',
            marginBottom: '-1px',
            width: '100%',
            borderTop: '4px solid black',
          }}
        />
        <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="50%"
        >
          {aims.map((aim, index) => (
            <Aim label={aim} index={index} key={index} />
          ))}
          <circle
            cx={50}
            cy={0}
            r={9}
            stroke="#000"
            strokeWidth={0.5}
            fill="#fff"
          />
          <text x={46.5} y={5} fontSize={4}>
            GQI
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
