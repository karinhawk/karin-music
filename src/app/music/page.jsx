import Image from "next/image";
import pic from "../../../public/images/icon3.png"
import styles from "./index.module.css"

export default function Music() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
      <h1 className={styles.pageTitle}>
      ✣ music ✣
      </h1>
      <h3>Chamber</h3>

      <h4>Duets</h4>
      <p>Invocation | 2022 | Cello, Piano | 3'00" </p>

      <h4>Trios</h4>
      <p>this. | 2024 | Bass Clarinet, Double Bass, Stage Piano | WIP</p>

      <h4>Small Ensemble</h4>
      <p>Superoxygen | 2024 | Oboe, Violin, Cello, Piano, Percussion | 9'00" | <a href="https://soundcloud.com/karinhawksworth/dream-state-excerpt-2024-virtual-playback?si=dd609a2ea5ed477b8f379fa2f405c1e8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">listen to excerpt</a></p>
      <p>Psalm | 2023 | Violin, Violin, Viola, Cello | 10'00" - 10'30" | <a href="https://soundcloud.com/karinhawksworth/psalm?si=627476581cf04c85a176c549ddd0405b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">listen</a></p>
      
      <h4>Large Ensemble</h4>
      <p>De Herinnering | 2022 | Violin, Cello, Double Bass, Flute (+Piccolo), Clarinet (+Bass Clarinet), Trombone, Percussion | 7'30" | <a href="https://soundcloud.com/karinhawksworth/de-herinnering-2022-virtual-playback?si=482c4f14f9b0463faa62de92e2590d7b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">listen</a></p>
      </div>
      <Image className={styles.pic} alt="medieval iron cast jewellery" src={pic} width={500} height={800}/>
    </section>
  )
}
