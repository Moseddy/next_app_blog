
import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>Learnora &copy; 2023 Your No. 1 learning academy</div>
        <div className={styles.social}>
            <Image src="/1.png" width={20} className={styles.icon} height={20} alt='Learnora Dev' />
            <Image src="/2.png" width={20} className={styles.icon} height={20} alt='Learnora Dev' />
            <Image src="/3.png" width={20} className={styles.icon} height={20} alt='Learnora Dev' />
            <Image src="/4.png" width={20} className={styles.icon} height={20} alt='Learnora Dev' />
        </div>
    </div>
  )
}

export default Footer