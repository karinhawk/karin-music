import Image from "next/image";
import pic from "../../public/images/icon4.png";
import styles from "./index.module.css";
import Link from "next/link";
import SoundCloudEmbedded from "@/components/embeddedPlayer";

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>✣ home ✣</h1>
        <p>
          {`Karin Hawksworth is a young London-based composer, cellist, and site reliability engineer.`}
        </p>
        <div className={styles.buffer}>
          <p>
          {`Listen to Badlands`}
          </p>
        </div>
        <SoundCloudEmbedded
            url={
              "https://soundcloud.com/karinhawksworth/badlands-2024-virtual-playback?si=bf84de4949e64cc89eb56c0c810a84a9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            }
          />
        <Link href="/music">
          <p className={styles.showme}>My Pieces</p>
        </Link>
        <Link href="https://soundcloud.com/karinhawksworth">
          <p className={styles.showme}>Soundcloud</p>
        </Link>
      </div>
      <Image
        className={styles.pic}
        alt="medieval iron cast jewellery"
        src={pic}
        width={500}
        height={800}
      />
    </section>
  );
}
