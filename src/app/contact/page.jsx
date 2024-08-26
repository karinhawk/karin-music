import Image from "next/image";
import tv from "../../../public/images/retro_tv.jpeg"

export default function Contact() {
  return (
    <section>
      <h1>
        karin hawksworth contact
      </h1>
      <p>
        email: karin.hawksworth@gmail.com
      </p>
      <p>
      instagram: karinhawks
      </p>
      <Image alt="old chunky box tv on the floor of an empty room" src={tv} width={500} height={800}/>
    </section>
  )
}
