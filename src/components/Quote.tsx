import styles from './Quote.module.scss';

interface Props {
  title: string;
  text: string;
  onClose: () => void;
}
export default function Category({ title, text, onClose }: Props) {
  return (
    <div className={styles['gwb-quote']}>
      <button onClick={onClose}>Close</button>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
