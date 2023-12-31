import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600" 
        fill={true}
        className={styles.img}  />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>Handcrafting award-winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}> Who we are</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus maxime illo consequatur, quidem voluptatibus eius odit nobis, dicta deserunt veniam esse ipsam? <br /> <br /> 
              In numquam molestiae aliquid autem placeat dignissimos tempore minima, ex laborum mollitia, doloremque harum? Animi, consectetur aspernatur.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus maxime illo consequatur, quidem voluptatibus eius odit nobis, dicta deserunt veniam esse ipsam? <br /> <br /> 
              In numquam molestiae aliquid autem placeat dignissimos tempore minima, ex laborum mollitia, doloremque harum? Animi, consectetur aspernatur.
            </p>
          </div>

          <div className={styles.item}>
            <h1 className={styles.title}> What we do</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus maxime illo consequatur, quidem voluptatibus eius odit nobis, dicta deserunt veniam esse ipsam?
              quidem voluptatibus eius odit nobis, dicta deserunt veniam esse ipsam? <br /> <br /> 
              Animi, consectetur aspernatur.
            </p>
            <Button url={'/contact'} text={'Contact Us'} />
          </div>
        </div>
    </div>
  )
}

export default About