import Close from '@/assets/icons/Close';
import styles from '@/components/Quote.module.scss';

interface Props {
  title?: string;
  text?: string;
  onClose: () => void;
}
export default function Quote({ title, text, onClose }: Props) {
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
        <p>{text}</p>
      </div>
    </div>
  );
}
