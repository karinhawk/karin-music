import styles from "./index.module.css";
import pic from "../../../public/images/pax_tapestry.jpg";
import Image from "next/image";

export default function SarsenBlue() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ sarsen blue (2025) ✣</h1>
        <div className={styles.musicpage}>
          <div className={styles.text}>
            <p
              className={styles.description}
            >{`An ambient soundscape to accompany an art exhibition.`}</p>
            <p
              className={styles.description}
            >I was invited to create music to accompany the 2025 showcase exhibition for <a target="_blank" href="https://www.instagram.com/thepaxresidency?igsh=Z3B2d2lhbjU3Z2Fk">The Pax Residency</a>.
            This piece is in between background and foreground music; something exhibit-goers can tune in and out of as they
            view the works. I recorded myself playing cello for this and also used soundscapes from around the Salisbury area.</p>
            <Image
                className={styles.pic}
                alt="tapestry"
                src={pic}
                width={200}
                height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
