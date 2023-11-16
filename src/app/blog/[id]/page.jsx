import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  return res.json();
} 

const BlogPost = async({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.description}>
            {data.body}
          </p>
          <div className={styles.author}>
            <div className={styles.avatarImage}>
              <Image 
                src={"https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                alt=""
                fill={true}
                className={styles.avatar}
                />
              </div>

              <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            src={"https://images.pexels.com/photos/3314328/pexels-photo-3314328.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            alt=''
            fill={true}
            className={styles.image}
            />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto possimus. Quis voluptate neque magnam voluptates inventore ipsum rerum asperiores, veniam tempora consequuntur, a culpa eaque quidem cupiditate optio autem, sunt nihil! Ducimus itaque corporis asperiores quam expedita fugiat quis consequuntur provident autem commodi nulla, illum totam blanditiis quod at reiciendis laborum cum, minus molestias eaque facilis dicta doloremque error. Placeat, perferendis. In facere ex maiores rem delectus ipsa commodi facilis fuga culpa deleniti dolorem magni, quod inventore minus dolore!br
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero quas vero molestiae cumque, suscipit numquam, fuga itaque dignissimos, aliquam modi voluptate totam. Doloribus, tenetur reiciendis earum deleniti nostrum amet illo adipisci sequi eos molestias natus fugit quis. Odit, sunt! <br /><br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque fuga odit sunt ipsam, minus non harum incidunt vel assumenda repellat adipisci quam laborum! Quisquam rerum vel eius temporibus eos quae? Obcaecati aspernatur, magni inventore placeat optio ea excepturi quas! <br /><br />
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto possimus. Quis voluptate neque magnam voluptates inventore ipsum rerum asperiores, veniam tempora consequuntur, a culpa eaque quidem cupiditate optio autem, sunt nihil! Ducimus itaque corporis asperiores quam expedita fugiat quis consequuntur provident autem commodi nulla, illum totam blanditiis quod at reiciendis laborum cum, minus molestias eaque facilis dicta doloremque error. Placeat, perferendis. In facere ex maiores rem delectus ipsa commodi facilis fuga culpa deleniti dolorem magni, quod inventore minus dolore!br
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero quas vero molestiae cumque, suscipit numquam, fuga itaque dignissimos, aliquam modi voluptate totam. Doloribus, tenetur reiciendis earum deleniti nostrum amet illo adipisci sequi eos molestias natus fugit quis. Odit, sunt! <br /><br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque fuga odit sunt ipsam, minus non harum incidunt vel assumenda repellat adipisci quam laborum! Quisquam rerum vel eius temporibus eos quae? Obcaecati aspernatur, magni inventore placeat optio ea excepturi quas! <br /><br />
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto possimus. Quis voluptate neque magnam voluptates inventore ipsum rerum asperiores, veniam tempora consequuntur, a culpa eaque quidem cupiditate optio autem, sunt nihil! Ducimus itaque corporis asperiores quam expedita fugiat quis consequuntur provident autem commodi nulla, illum totam blanditiis quod at reiciendis laborum cum, minus molestias eaque facilis dicta doloremque error. Placeat, perferendis. In facere ex maiores rem delectus ipsa commodi facilis fuga culpa deleniti dolorem magni, quod inventore minus dolore!br
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero quas vero molestiae cumque, suscipit numquam, fuga itaque dignissimos, aliquam modi voluptate totam. Doloribus, tenetur reiciendis earum deleniti nostrum amet illo adipisci sequi eos molestias natus fugit quis. Odit, sunt! <br /><br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque fuga odit sunt ipsam, minus non harum incidunt vel assumenda repellat adipisci quam laborum! Quisquam rerum vel eius temporibus eos quae? Obcaecati aspernatur, magni inventore placeat optio ea excepturi quas! <br /><br />
        </p>
      </div>
    </div>
  )
}

export default BlogPost