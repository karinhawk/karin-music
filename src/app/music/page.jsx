import Image from "next/image";
import pic from "../../../public/images/icon3.png";
import styles from "./index.module.css";
import Link from "next/link";

export default function Music() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ music ✣</h1>
        <div className={styles.compositions}>
          <h3>Chamber</h3>

          <h4 className={styles.groupSize}>Duets</h4>
          <p className={styles.piece}>
            Invocation | 2022 | Cello, Piano | 3'00"{" "}
          </p>

          <h4 className={styles.groupSize}>Trios</h4>
          <p className={styles.piece}>
            <Link href="/badlands">Badlands</Link> | 2024 | Bass Clarinet,
            Double Bass, Piano, Fixed Media | 10'15"
          </p>

          <h4 className={styles.groupSize}>Small Ensemble</h4>
          <p className={styles.piece}>
            <Link href="/broken-bridges">Broken Bridges</Link> | 2025 | 3
            Violins and Cello | 2'15"
          </p>
          <p className={styles.piece}>
            <Link href="/superoxygen">Superoxygen</Link> | 2024 | Oboe, Violin,
            Cello, Piano, Percussion | 9'00"
          </p>
          <p className={styles.piece}>
            <Link href="/psalm">Psalm</Link> | 2023 | String Quartet | 10'00" -
            10'30"
          </p>

          <h4 className={styles.groupSize}>Large Ensemble</h4>
          <p className={styles.piece}>
            <Link href="/de-herinnering">De Herinnering</Link> | 2022 | Violin,
            Double Bass, Flute (+Piccolo), Clarinet (+Bass Clarinet), Trombone,
            Percussion, Harp | 7'30"
          </p>

          <h4 className={styles.groupSize}>Electronic</h4>
          <p className={styles.piece}>
            <Link href="/sarsen-blue">sarsen blue</Link> | 2025 | ambient
            soundscape for an art exhibition | 15'00"
          </p>
        </div>
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
