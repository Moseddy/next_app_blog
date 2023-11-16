"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';


const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  function Profile(){
    const {data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    if(error) return <div>Failed to load</div>
    if(isLoading) return <div>Loading....</div>

    console.log(data);
    return <div> hello {data.title}</div>


  }

  Profile();
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async() => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: "no-store",
  //     });

  //     if(!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   }

  //   getData()
  // }, [])

  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Dashboard 