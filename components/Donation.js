import styles from "./Donation.module.css";

const Donation = (props) => {
	return (
		<div className={styles["container"]}>
			<section className={styles["header"]}>
				<h2 className={styles["header__text"]}>Bitcoin donation</h2>
				<img className={styles["header__icon"]} src="/bitcoin-letter.svg" alt="Bitcoin letter B logo icon" />
			</section>
			<div className={styles["options"]}>
				<section className={styles["option-container"]}>
					<div className={styles["option-info"]}>
						<p className={styles["option-info__title"]}>Amount</p>
						<span className={styles["option-info__subtitle"]}>The amount in satoshis</span>
					</div>
				</section>
				<section className={styles["option-container"]}>
					<div className={styles["option-info"]}>
						<p className={styles["option-info__title"]}>Method</p>
						<span className={styles["option-info__subtitle"]}>Choose between on-chain and lightning</span>
					</div>
				</section>
			</div>
			<button className={styles["button"]}>Maak donatie</button>
		</div>
	);
};

export default Donation;