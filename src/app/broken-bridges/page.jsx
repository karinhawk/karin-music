import SoundCloudEmbedded from "@/components/embeddedPlayer";
import styles from "./index.module.css";
import Link from "next/link";

export default function BrokenBridges() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ Broken Bridges (2025) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/broken-bridges?si=416cba9d7faa4673b58e816cc47c250b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`A string quartet for reflection.`}</p>
            <p className={styles.description}>{`
Two friends on either side of a bridge cup their hands and shout sweet nothings at each other.`}</p>
            <p
              className={styles.description}
            >{`Based off of a local walk I loved growing up.`}</p>
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
