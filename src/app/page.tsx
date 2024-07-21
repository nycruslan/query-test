import Image from 'next/image';
import styles from './page.module.css';
import { Todos } from './Todos';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Todos />
      </div>
    </main>
  );
}
