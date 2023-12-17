import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import styles from '../styles/error.module.scss';

export default function ErrorPage(){
  return (
    <MainLayout title='ErorPage'>
      <div className={styles.error}>Error 404</div>
      <div>Go to </div><Link href="/">back</Link>
    </MainLayout>
  )
}