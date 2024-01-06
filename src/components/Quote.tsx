import Close from '@/assets/icons/Close';
import styles from '@/components/quote.module.scss';

interface Props {
  title: string;
  quotes: string[];
  onClose: () => void;
}
export default function Quote({ title, quotes, onClose }: Props) {
  return (
    <div className={styles['gwb-quote']}>
      <div className={styles['gwb-quote__popup']}>
        <div className={styles['gwb-quote__popup__header']}>
          <h3 className={styles['gwb-quote__popup__header__title']}>{title}</h3>
          <button
            className={styles['gwb-quote__popup__header__button']}
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        <div className={styles['gwb-quote__popup__content']}>
          {quotes.map((quote, index) => (
            <p
              className={styles['gwb-quote__popup__content__quote']}
              key={index}
            >
              &quot;{quote}&quot;
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
