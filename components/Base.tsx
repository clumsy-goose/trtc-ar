import styles from '@/styles/base.module.scss';
import Banner from '@/components/Banner';
import TryOnDemoLayout from '@/components/TryOnDemoLayout';
import { Button, MessagePlugin, Loading, DialogPlugin } from 'tdesign-react/lib';
export default function Base() {
  return (
    <div className={styles.layout}>
      <header>
        <Banner></Banner>
      </header>
      <main>
        <TryOnDemoLayout></TryOnDemoLayout>
      </main>
    </div>
  );
}
