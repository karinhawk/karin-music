import SoundCloudEmbedded from "@/components/embeddedPlayer";
import styles from "./index.module.css";
import Link from "next/link";

export default function Badlands() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ Badlands (2024) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/badlands-2024-virtual-playback?si=bf84de4949e64cc89eb56c0c810a84a9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`Small chamber and fixed media.`}</p>
            <p className={styles.description}>{`Bass Clarinet, Double Bass, Piano, Fixed Media`}</p>
            <p className={styles.description}>{`
          Badlands are barren and heavily eroded swathes of land. A place where little thrives.
          They can also be beautiful. This piece is about finding the emotional and beautiful in
          untraditional places. It is open-mindedness and growth in perspective. Changes like this, however, 
          can disarm.
          `}</p>
            <p
              className={styles.description}
            >{`My first piece with fixed media. It progresses from dark and gravelly to lithe to dissociative.`}</p>
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
