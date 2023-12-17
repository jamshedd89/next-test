import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import MainLayout from '../../components/MainLayout';


export default function Post({ post: serverPost }) {
  const [ post, setPost ] = useState(serverPost);
  const router = useRouter()

  useEffect(()=>{
    async function load(){
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data);
    }

    if(!serverPost){
      load();
    }
  }, [])


  if(!post){
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }


  return (
    <MainLayout title='posts page'>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}>Back to posts</Link>
    </MainLayout>
  )
}


Post.getInitialProps = async ({ query, req })=>{
  if(!req){
    return {
      post: null
    }
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return {
    post
  }
}


// export async function getIServerSideProps({ query, req }){
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();

//   return { props: {post} }
// }