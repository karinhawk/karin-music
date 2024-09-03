import Image from "next/image";
import pic from "../../../public/images/icon1.png";
import styles from "./index.module.css";

export default function About() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ about ✣</h1>
        <p className={styles.description}>
          Karin Hawksworth is a composer and cellist raised in South West
          England and living in London.`
        </p>
        <p className={styles.description}>
          She studied at the University of Birmingham under Michael Zev Gordon,
          Daria Kwiatkowska, and Ryan Latimer. Since then, she has pursued
          lessons with composer and conductor Leo Geyer and continues to pour
          herself into creating new and exciting works for a variety of
          ensembles.
        </p>
        <p>
          She has had pieces workshopped by Birmingham Contemporary Music Group
          (De Herinnering), The Solem Quartet (Psalm), and Workers Union
          Ensemble (Superoxygen).
        </p>
        <p>
          She works as a site reliability engineer but makes sure she leaves
          generous time for composing.
        </p>
      </div>
      <Image
        className={styles.pic}
        alt="medieval iron cast jewellery"
        src={pic}
        width={500}
        height={800}
      />
    </section>
  );
}
