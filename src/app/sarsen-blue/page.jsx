import styles from "./index.module.css";
import picTapestry from "../../../public/images/pax_tapestry.png";
import picHound from "../../../public/images/hound.png";
import pignoli from "../../../public/images/pignoli.png";
import signpost from "../../../public/images/signpost.png";
import thecups from "../../../public/images/thecups.png";
import windchimes from "../../../public/images/windchimes.png";
import Image from "next/image";
import SoundCloudEmbedded from "@/components/embeddedPlayer";
import Link from "next/link";

export default function SarsenBlue() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ sarsen blue (2025) ✣</h1>
        <div className={styles.musicpage}>
          <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/sarsen-blue?si=b41cb79d59a44fd386aafa906c528aff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`An ambient soundscape to accompany an art exhibition.`}</p>
            <p
              className={styles.description}
            >{`the grandeur and aloftness of the stones of Stonehenge waft in and out of your consciousness, as though they were conversing in an old language.`}</p>
            <p className={styles.description}>
              I was invited to create music to accompany the 2025 showcase
              exhibition for{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/thepaxresidency?igsh=Z3B2d2lhbjU3Z2Fk"
              >
                The Pax Residency
              </a>
              . This piece is in between background and foreground music;
              something exhibit-goers can tune in and out of as they view the
              works. I recorded myself playing cello for this and also used
              soundscapes from around the Salisbury area.
            </p>
          </div>
        </div>
        <div className={styles.divider}>
          <p>✣ 2025 residency ✣</p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.gallery1}>
            <Image
              className={styles.pic}
              src={picTapestry}
              height={400}
              width={300}
              alt="hanging tapestry of different materials"
            />
            <Image
              className={styles.pic}
              src={thecups}
              height={400}
              width={300}
              alt="embossed metal plates"
            />
          </div>
          <div className={styles.gallery2}>
            <Image
              className={styles.pic}
              src={picHound}
              height={200}
              width={300}
              alt="a scultpure made of corrogated steel and springs"
            />
            <Image
              className={styles.pic}
              src={pignoli}
              height={200}
              width={300}
              alt="a bundle of long pinecones"
            />
            <Image
              className={styles.pic}
              src={signpost}
              height={200}
              width={300}
              alt="a sculpture of whittled wood"
            />
            <Image
              className={styles.pic}
              src={windchimes}
              height={200}
              width={300}
              alt="found materials strung on material as wind chimes"
            />
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
