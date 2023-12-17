import Link from 'next/link'
import MainLayout from '../components/MainLayout'


export default function Home() {
  return (
    <>
      <MainLayout title='Home Page'>
        <h1>Home Page</h1>
        <p><Link href='/about'>About</Link></p>
        <p><Link href='/posts'>Posts</Link></p>
      </MainLayout>
    </>
  )
}