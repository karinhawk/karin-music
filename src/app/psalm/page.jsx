import SoundCloudEmbedded from "@/components/embeddedPlayer";
import styles from "./index.module.css";

export default function Psalm() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ Psalm (2023) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/psalm?si=39035aace6904ef388dc9781354a2403&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`A string quartet for reflection.`}</p>
            <p className={styles.description}>{`
Psalm offers a space to reflect. It invites the listener to enter a deeper state of listening by following the winding lines as they breathe and sigh and mingle in and out of peace.`}</p>
            <p
              className={styles.description}
            >{`I had the honour of The Solem Quartet playing this piece for a workshop.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
