import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name="Supanext Taskboard"
					content="Manage your tasks"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main></main>
		</div>
	);
}
