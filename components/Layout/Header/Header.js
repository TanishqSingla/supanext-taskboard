import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<div className={styles.Header}>
			<div className="logo">
				<Link href="/" passHref>
					<a className="title">Taskboard</a>
				</Link>
			</div>
		</div>
	);
}
