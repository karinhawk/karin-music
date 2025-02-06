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

          <h4>Duets</h4>
          <p>Invocation | 2022 | Cello, Piano | 3'00" </p>

          <h4>Trios</h4>
          <p>
            <Link href="/badlands">Badlands</Link> | 2024 | Bass Clarinet, Double Bass, Piano, Fixed Media | 10'15"
          </p>

          <h4>Small Ensemble</h4>
          <p>
            <Link href="/superoxygen">Superoxygen</Link> | 2024 | Oboe, Violin,
            Cello, Piano, Percussion | 9'00"
          </p>
          <p>
            <Link href="/psalm">Psalm</Link> | 2023 | Violin, Violin, Viola,
            Cello | 10'00" - 10'30"
          </p>

          <h4>Large Ensemble</h4>
          <p>
            <Link href="/de-herinnering">De Herinnering</Link> | 2022 | Violin,
            Double Bass, Flute (+Piccolo), Clarinet (+Bass Clarinet), Trombone,
            Percussion, Harp | 7'30"
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
