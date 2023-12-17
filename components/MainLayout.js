import React from 'react';
import Head from 'next/head';
import Link from 'next/link';



function MainLayout({ children, title = 'Next App' }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, react, javascript" />
        <meta name="description" content="Краткое описание" />
        <meta charSet='utf-8' />
      </Head>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/posts'}>Posts</Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav{
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: #c5c5c5;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a{
          color: #fff;
        }

        main{
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </React.Fragment>
  )
}


export default MainLayout;