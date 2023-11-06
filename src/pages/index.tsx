import styles from './index.module.scss';
import Aim from '@/components/Aim';
import Category from '@/components/Category';

const categories = [
  { name: 'Category 1', quotes: ['Quote 1', 'Quote 2'] },
  { name: 'Category 2', quotes: ['Quote 1', 'Quote 2', 'Quote 3'] },
  { name: 'Category 3', quotes: ['Quote 1'] },
  { name: 'Category 4', quotes: ['Quote 1'] },
  { name: 'Category 5', quotes: ['Quote 1', 'Quote 2', 'Quote 3'] },
];
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
          {categories.map((category, index) => (
            <Category
              label={category.name}
              quotes={category.quotes}
              index={index}
              key={index}
            />
          ))}
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
    </div>
  );
}
