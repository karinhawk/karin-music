import Image from "next/image";
import pic from "../../../public/images/icon1.png"
import styles from "./index.module.css"

export default function About() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
      <h1 className={styles.pageTitle}>
      ✣ about ✣
      </h1>
      <p className={styles.description}>
      {`Karin Hawksworth is a composer, cellist, and software developer from South West England.
        She studied at the University of Birmingham under Michael Zev Gordon, Daria Kwiatkowska, and Ryan Latimer.
        She is (currently) working in software development and is composing often. Her works are finding their feet in
        exploration, where each piece will evoke a completely different soundscape and draw from themes such as the human condition,
        dirt, tears from a Tuesday night, jerky dancing, or religion.`}
      </p>
      </div>
      <Image className={styles.pic} alt="medieval iron cast jewellery" src={pic} width={500} height={800}/>
    </section>
  )
}
