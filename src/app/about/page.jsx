import Image from "next/image";
import plaster from "../../../public/images/plaster_window.jpeg"
import styles from "./index.module.css"

export default function About() {
  return (
    <section>
      <h1>
        karin hawksworth about
      </h1>
      <p className={styles.description}>
      {`Karin Hawksworth is a composer, cellist, and software developer from South West England.
        She studied at the University of Birmingham under Michael Zev Gordon, Daria Kwiatkowska, and Ryan Latimer.
        She is (currently) working in software development and is composing often. Her works are finding their feet in
        exploration, where each piece will evoke a completely different soundscape and draw from themes such as the human condition,
        dirt, tears from a Tuesday night, jerky dancing, or religion.`}
      </p>
      <Image alt="picture of a hollow window in a terracotta wall with cast iron bars over the opening" src={plaster} width={500} height={800}/>
    </section>
  )
}
