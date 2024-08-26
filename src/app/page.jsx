import Image from "next/image";
import concrete from "../../public/images/upwards_concrete.jpeg"

export default function Home() {
  return (
    <section>
      <h1>
        karin hawksworth root
      </h1>
      <p>
        {`Karin Hawksworth is a composer, cellist, and software developer.`}
      </p>
      <Image alt="dutch angle of the inside of the stairwell of a concrete building" src={concrete} width={500} height={800}/>
    </section>
  )
}
