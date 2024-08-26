import Image from "next/image";
import pic from "../../../public/images/icon2.jpeg"
import styles from "./index.module.css"

export default function Contact() {
  return (
    <section className={styles.main}>
      <div>
      <h1 className={styles.pageTitle}>
      ✣ contact ✣
      </h1>
      <p>
        email: karin.hawksworth@gmail.com
      </p>
      <p>
      instagram: karinhawk
      </p>
      </div>
      <Image alt="medieval iron cast jewellery" src={pic} width={500} height={800}/>
    </section>
  )
}
