import Image from "next/image";
import building from "../../../public/images/abandoned_building.jpeg"

export default function Music() {
  return (
    <section>
      <h1>
        karin hawksworth music
      </h1>
      <h2>Chamber</h2>
      <h3>Duets</h3>
      <p>Invocation | 2022 | Cello, Piano | 3'00" | Listen Here</p>
      <h3>Small Ensemble</h3>
      <p>wip | 2024 | Oboe, Cello, Piano, Percussion | 9'00"</p>
      <p>Psalm | 2023 | Violin, Violin, Viola, Cello | 10'00" | Listen Here</p>
      <h3>Large Ensemble</h3>
      <p>De Herinnering | 2022 | Violin, Cello, Double Bass, Flute (+Piccolo), Clarinet (+Bass Clarinet), Trombone, Percussion | 7'30" | Listen Here</p>

      <Image alt="abandoned concrete building interior" src={building} width={500} height={800}/>
    </section>
  )
}
