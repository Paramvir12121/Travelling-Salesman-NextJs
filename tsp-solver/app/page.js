import styles from "./page.module.css";
import Link from "next/link";
import Map from '@/components/map/Map'


export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Travelling salesman Problem</h1>
          <Map />
    </div>
  );
}
