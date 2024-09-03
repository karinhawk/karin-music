import SoundCloudEmbedded from "@/components/embeddedPlayer";
import styles from "./index.module.css";

export default function DeHerinnering() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ De Herinnering (2022) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/de-herinnering-2022-virtual-playback?si=b62cfc1302144894b0dc6873a33675c6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`A memorial piece for Louis Andriessen written for large chamber ensemble.`}</p>
            <p className={styles.description}>{`Violin,
            Double Bass, Flute (+Piccolo), Clarinet (+Bass Clarinet),
            Trombone, Percussion, Harp`}</p>
            <p className={styles.description}>{`
          Dutch for 'the remembrance', or 'the memory', De Herinnering is a piece honouring the legacy of the late Louis Andriessen.
          I had only discovered his large catalogue of works just before his passing in 2021, and I wanted to capture
          his compositional voice in the impression I formed when I heard it for the first time - 
          music that was moody, punchy, humourous, and expansive.`}</p>
            <p
              className={styles.description}
            >{`Written as the final piece for my undergrad at The University of Birmingham. It was workshopped and performed by Birmingham Contemporary Music Group (BCMG).`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
