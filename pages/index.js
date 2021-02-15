import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Meta title="Ninja List | Home" keywords="ninjas" />
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officia
          dolorem cupiditate, dolore illum vitae nemo fuga nihil deserunt
          praesentium laboriosam commodi iusto corporis ducimus saepe distinctio
          dolor repellendus suscipit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quidem quisquam, vero quia ad quis placeat eaque quo maxime
          accusantium, totam nobis reprehenderit odit labore, eligendi velit
          iste facilis maiores.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          <a>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
