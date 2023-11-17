import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.container}>
      {
        data.map(item => (
          <Link href={`/blog/${item.id}`} className={styles.item} key={item.id} > 
          <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {item.title}
          </h1>
          <p className={styles.description}>
            { item.body }
          </p>
        </div>
      </Link>
      ))
    }
    </div>
  )
}

export default Blog