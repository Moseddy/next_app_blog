import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import contactImg from 'public/contact.png'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Let's Keep in Touch
      </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={contactImg} fill={true} className={styles.img} />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Enter your name' className={styles.input} />
          <input type="email" placeholder='Enter your email' className={styles.input} />
          <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10"
            placeholder='Enter your message'
            className={styles.textarea}>

            </textarea>

            <Button text={"Submit"} url={'#'} />
        </form>
      </div>
    </div>
  )
}

export default Contact