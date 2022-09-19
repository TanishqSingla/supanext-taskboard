import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Supanext Taskboard</title>
				<meta name="Supanext Taskboard" content="Manage your tasks" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.Main}></main>
		</>
	);
}
