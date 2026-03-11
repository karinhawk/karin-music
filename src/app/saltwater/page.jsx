import SoundCloudEmbedded from "@/components/embeddedPlayer";
import styles from "./index.module.css";
import Link from "next/link";

export default function Saltwater() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ Saltwater (2026) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/saltwater?si=6fb89f18165c417b88a9d6eb89b24705&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`Small chamber and fixed media.`}</p>
            <p className={styles.description}>{`Cello Quartet, Fixed Media`}</p>
            <p className={styles.description}>{`
          Literal waves lap over pulsating morphing organ-like heaves and sighs. like listening through a seashell.
          `}</p>
          </div>
        </div>
        <Link href="/music" className={styles.back_link}>
          <div className={styles.back}>
            <p className={styles.arrow}>⇐</p>
            <p>back to music</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
