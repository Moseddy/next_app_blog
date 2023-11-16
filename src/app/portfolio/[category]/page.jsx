import React from 'react'
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';


const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category.charAt(0).toUpperCase() + `${params.category.slice(1)}`}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum labore omnis obcaecati nesciunt eos, vitae tempore voluptatum. Nihil, dignissimos aperiam harum, et sed temporibus officia architecto ducimus, consectetur molestiae eveniet laborum ut eaque perferendis cumque voluptate doloribus reprehenderit quasi. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure nemo excepturi, quibusdam eum, laudantium ex unde neque, expedita nostrum earum facere aspernatur eligendi placeat ratione odio non exercitationem!</p>
          <Button text={'See more'} url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={'https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600'}
            fill={true}
            alt="" 
            className={styles.image} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum labore omnis obcaecati nesciunt eos, vitae tempore voluptatum. Nihil, dignissimos aperiam harum, et sed temporibus officia architecto ducimus, consectetur molestiae eveniet laborum ut eaque perferendis cumque voluptate doloribus reprehenderit quasi. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure nemo excepturi, quibusdam eum, laudantium ex unde neque, expedita nostrum earum facere aspernatur eligendi placeat ratione odio non exercitationem!</p>
          <Button text={'See more'} url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={'https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600'}
            fill={true}
            alt="" 
            className={styles.image} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum labore omnis obcaecati nesciunt eos, vitae tempore voluptatum. Nihil, dignissimos aperiam harum, et sed temporibus officia architecto ducimus, consectetur molestiae eveniet laborum ut eaque perferendis cumque voluptate doloribus reprehenderit quasi. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et iure nemo excepturi, quibusdam eum, laudantium ex unde neque, expedita nostrum earum facere aspernatur eligendi placeat ratione odio non exercitationem!</p>
          <Button text={'See more'} url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={'https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600'}
            fill={true}
            alt="" 
            className={styles.image} />
        </div>
      </div>
    </div>
  )
}

export default Category