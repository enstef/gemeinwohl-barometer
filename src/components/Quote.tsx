import Close from '@/assets/icons/Close';
import styles from '@/components/quote.module.scss';
import { useCallback, useEffect, useRef } from 'react';

interface Props {
  title: string;
  quotes: string[];
  onClose: () => void;
}
export default function Quote({ title, quotes, onClose }: Props) {
  const sanitizedTitle = title.replaceAll('-\n', '');

  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === backgroundRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('pointerdown', handleClick);

    return () => {
      document.removeEventListener('pointerdown', handleClick);
    };
  }, [handleClick]);

  return (
    <div className={styles['gwb-quote']} ref={backgroundRef}>
      <div className={styles['gwb-quote__popup']} ref={popupRef}>
        <div className={styles['gwb-quote__popup__header']}>
          <h3 className={styles['gwb-quote__popup__header__title']}>
            {sanitizedTitle}
          </h3>
          <button
            className={styles['gwb-quote__popup__header__button']}
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        <div className={styles['gwb-quote__popup__content']}>
          {quotes.map((quote, index) => (
            <div
              className={styles['gwb-quote__popup__content__quote']}
              key={index}
            >
              <p className={styles['gwb-quote__popup__content__quote__text']}>
                &bdquo;{quote}&ldquo;
              </p>
            </div>
          ))}
          <div className={styles['gwb-quote__popup__content__end']}>
            <div
              className={styles['gwb-quote__popup__content__end__dot']}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
