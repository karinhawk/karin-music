import SoundCloudEmbedded from "@/components/embeddedPlayer";
import styles from "./index.module.css";

export default function Superoxygen() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ Superoxygen (2024) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/superoxygen-end-2024-virtual-playback?si=4fa3867b18fb454d83d9ca659b46ed66&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`A volatile yet meditative piece for oboe, percussion, piano, violin, and 'cello.`}</p>
            <p className={styles.description}>{`
Superoxygen explores the nature of the element oxygen and its interaction with the body, requiring the ensemble to react to each other, metabolize themes, and become a breathing organism. As oxygen flows through the piece, we can experience it invigorating and calming the music in waves. Liveliness turns to overconsumption of the element, almost reminiscent of a panic attack, with total destruction via the invisible force almost inevitable.
`}</p>
            <p
              className={styles.description}
            >{`The beginning stages of this piece were written for a workshop with Workers Union Ensemble. I found that their chemistry as a group made me alter my work to become more explosive and the trajectory of my piece found itself teetering between chaos and calm - evoking the imagery behind the piece.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
