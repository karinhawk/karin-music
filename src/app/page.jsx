import Image from "next/image";
import pic from "../../public/images/icon4.jpeg"
import styles from "./index.module.css"

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
      <h1 className={styles.pageTitle}>
      ✣ home ✣
      </h1>
      <p>
        {`Karin Hawksworth is a London-based composer, cellist, and software developer.`}
      </p>
      </div>
      <Image className={styles.pic} alt="medieval iron cast jewellery" src={pic} width={500} height={800}/>
    </section>
  )
}
